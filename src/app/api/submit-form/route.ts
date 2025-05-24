import { NextResponse } from "next/server";
import { Resend } from "resend";

// Check if the API key exists
const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  console.warn(
    "RESEND_API_KEY is not configured. Email functionality will not work."
  );
}

// Initialize Resend with the API key if available
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

// Configure recipient and sender emails using environment variables
const CONTACT_RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL;
const QUOTE_RECIPIENT_EMAIL = process.env.QUOTE_RECIPIENT_EMAIL;
const RESEND_SENDER_EMAIL =
  process.env.RESEND_SENDER_EMAIL || "onboarding@resend.dev"; // Use your verified Resend sender email

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Determine which form was submitted based on the presence of specific fields
    const isContactForm =
      formData.hasOwnProperty("subject") && formData.hasOwnProperty("message");
    const isRequestQuoteForm =
      formData.hasOwnProperty("productName") &&
      formData.hasOwnProperty("quantity");

    if (isContactForm) {
      // Handle Contact Form submission
      console.log("Contact Form Submission:", formData);

      if (!CONTACT_RECIPIENT_EMAIL) {
        console.error("CONTACT_RECIPIENT_EMAIL is not configured.");
        return NextResponse.json(
          {
            message:
              "Server configuration error: Contact recipient email not set.",
          },
          { status: 500 }
        );
      }

      // Check if Resend has been initialized
      if (!resend) {
        console.error("Resend API key is missing. Cannot send email.");
        return NextResponse.json(
          {
            message:
              "Server configuration error: Email service not configured.",
          },
          { status: 500 }
        );
      }

      // Send email using Resend for Contact Form
      const { data, error } = await resend.emails.send({
        from: RESEND_SENDER_EMAIL,
        to: CONTACT_RECIPIENT_EMAIL,
        subject: `New Contact Form Submission: ${formData.subject}`,
        text: `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Request Type: ${formData.requestType}
Preferred Contact: ${formData.preferredContact}
Message: ${formData.message}
`,
      });

      if (error) {
        console.error("Error sending contact email:", error);
        return NextResponse.json(
          { message: "Error sending email", error },
          { status: 500 }
        );
      }

      console.log("Contact email sent:", data);

      return NextResponse.json(
        { message: "Contact form submitted successfully" },
        { status: 200 }
      );
    } else if (isRequestQuoteForm) {
      // Handle Request to Quote Form submission
      console.log("Request to Quote Form Submission:", formData);

      if (!QUOTE_RECIPIENT_EMAIL) {
        console.error("QUOTE_RECIPIENT_EMAIL is not configured.");
        return NextResponse.json(
          {
            message:
              "Server configuration error: Quote recipient email not set.",
          },
          { status: 500 }
        );
      }

      // Check if Resend has been initialized
      if (!resend) {
        console.error("Resend API key is missing. Cannot send email.");
        return NextResponse.json(
          {
            message:
              "Server configuration error: Email service not configured.",
          },
          { status: 500 }
        );
      }

      // Send email using Resend for Request to Quote Form
      const { data, error } = await resend.emails.send({
        from: RESEND_SENDER_EMAIL,
        to: QUOTE_RECIPIENT_EMAIL,
        subject: `New Request to Quote Submission: ${formData.productName}`,
        text: `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Address: ${formData.address}
City: ${formData.city}
Country: ${formData.country}
Product Name: ${formData.productName}
CAS Number: ${formData.casNumber || "N/A"}
Quantity: ${formData.quantity}
Purity: ${formData.purity || "N/A"}
Target Date: ${formData.targetDate || "N/A"}
Requirements: ${formData.requirements || "None"}
`,
      });

      if (error) {
        console.error("Error sending quote email:", error);
        return NextResponse.json(
          { message: "Error sending email", error },
          { status: 500 }
        );
      }

      console.log("Quote email sent:", data);

      return NextResponse.json(
        { message: "Request to Quote form submitted successfully" },
        { status: 200 }
      );
    } else {
      // Handle unknown form submission
      console.warn("Unknown Form Submission:", formData);
      return NextResponse.json(
        { message: "Unknown form submission" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
