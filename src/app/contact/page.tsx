"use client";

import { useState } from "react";
import Link from "next/link";
import { ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    requestType: "general",
    preferredContact: "email",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend or a CRM
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. Our team will contact you shortly!");
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      requestType: "general",
      preferredContact: "email",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact ChemoGlobal
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our chemical experts for inquiries, product
            information, or technical support
          </p>
        </div>
      </div>

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Send Us a Message
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name*
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Company, Inc."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="requestType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Request Type*
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="quote">Request a Quote</option>
                      <option value="sample">Request a Sample</option>
                      <option value="technical">Technical Support</option>
                      <option value="custom">Custom Synthesis</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Subject of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please include specific products you're interested in, quantities, and any special requirements"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>Phone</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="whatsapp"
                          checked={formData.preferredContact === "whatsapp"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>WhatsApp</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-600">
                    <p>
                      By submitting this form, you consent to our team
                      contacting you regarding your inquiry. We respect your
                      privacy and will not share your information with third
                      parties.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Quick Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 mt-1 mr-3">📧</div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">info@chemoglobal.com</p>
                      <p className="text-gray-600">sales@chemoglobal.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 mt-1 mr-3">📱</div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 mt-1 mr-3">💬</div>
                    <div>
                      <h3 className="font-medium">WhatsApp</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Our Locations</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Headquarters</h3>
                    <p className="text-gray-600">
                      123 Chemical Way
                      <br />
                      Boston, MA 02110
                      <br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Manufacturing Facility</h3>
                    <p className="text-gray-600">
                      456 Industry Park
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">European Office</h3>
                    <p className="text-gray-600">
                      78 Science Street
                      <br />
                      Frankfurt, 60306
                      <br />
                      Germany
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Need Urgent Help?
                </h2>
                <p className="text-gray-700 mb-4">
                  Our sales and support teams are available from Monday to
                  Friday, 9:00 AM - 6:00 PM EST.
                </p>
                <Link
                  href="tel:+15551234567"
                  className="flex items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  <span className="mr-2">📞</span> Call Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Find Us</h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 text-lg">
              Interactive Map Would Be Embedded Here
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
