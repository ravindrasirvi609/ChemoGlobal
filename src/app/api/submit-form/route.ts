import { NextRequest, NextResponse } from "next/server";
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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Determine which form was submitted based on the presence of specific fields
    const isContactForm =
      formData.hasOwnProperty("subject") && formData.hasOwnProperty("message");
    const isRequestQuoteForm =
      formData.hasOwnProperty("productName") &&
      formData.hasOwnProperty("quantity");
    const isDownloadForm =
      formData.hasOwnProperty("documentType") &&
      formData.hasOwnProperty("formType");

    if (isDownloadForm) {
      // Handle Download Form submission
      console.log("Download Form Submission:", formData);

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

      // Send email to admin about the download request
      const { data: adminEmail, error: adminError } = await resend.emails.send({
        from: RESEND_SENDER_EMAIL,
        to: CONTACT_RECIPIENT_EMAIL,
        subject: `Download Request: ${formData.documentType} - ${formData.companyName}`,
        html: `
          <h2>New Download Request</h2>
          <p><strong>Document Requested:</strong> ${formData.documentType}</p>
          <p><strong>User Information:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${formData.name}</li>
            <li><strong>Email:</strong> ${formData.email}</li>
            <li><strong>Company:</strong> ${formData.companyName}</li>
            <li><strong>Contact Number:</strong> ${formData.contactNo}</li>
          </ul>
          <p><strong>Request Date:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <p>Please process this download request and send the requested document to the user's email address.</p>
        `,
      });

      if (adminError) {
        console.error("Error sending admin email:", adminError);
        return NextResponse.json(
          { message: "Error sending email", error: adminError },
          { status: 500 }
        );
      }

      // Send confirmation email to user
      const { data: userEmail, error: userError } = await resend.emails.send({
        from: RESEND_SENDER_EMAIL,
        to: formData.email,
        subject: `Download Request Confirmation - ${formData.documentType}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3E64FF;">Download Request Confirmation</h2>
            <p>Dear ${formData.name},</p>
            <p>Thank you for your download request. We have received your request for the following document:</p>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold; color: #3E64FF;">${formData.documentType}</p>
            </div>
            <p><strong>Your Information:</strong></p>
            <ul style="color: #555;">
              <li><strong>Name:</strong> ${formData.name}</li>
              <li><strong>Company:</strong> ${formData.companyName}</li>
              <li><strong>Contact Number:</strong> ${formData.contactNo}</li>
            </ul>
            <p>Our team will process your request and send the requested document to your email address (${formData.email}) within 24-48 hours.</p>
            <p>If you have any questions or need immediate assistance, please don't hesitate to contact us.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #888; font-size: 14px;">
              This is an automated confirmation email. Please do not reply to this email.
            </p>
            <p style="color: #888; font-size: 14px;">
              Best regards,<br>
              ChemoGlobal Team
            </p>
          </div>
        `,
      });

      if (userError) {
        console.error("Error sending user confirmation email:", userError);
        return NextResponse.json(
          { message: "Error sending confirmation email", error: userError },
          { status: 500 }
        );
      }

      console.log("Download request emails sent successfully:", {
        adminEmail,
        userEmail,
      });

      return NextResponse.json(
        {
          message:
            "Download request submitted successfully. You will receive a confirmation email shortly.",
        },
        { status: 200 }
      );
    } else if (isContactForm) {
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
