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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Form submission successful:", result);
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
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-64 h-64 bg-gradient-to-br from-green-400/10 to-green-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/60 text-[#3E64FF] text-sm font-medium backdrop-filter backdrop-blur-sm">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-transparent bg-clip-text">
              ChemoGlobal
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Get in touch with our chemical experts for inquiries, product
            information, or technical support
          </p>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full h-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <main className="flex-grow py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white/60 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/40">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E64FF]/50 bg-white/50 shadow-sm transition-all duration-300"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E64FF]/50 bg-white/50 shadow-sm transition-all duration-300"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E64FF]/50 bg-white/50 shadow-sm transition-all duration-300"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E64FF]/50 bg-white/50 shadow-sm transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E64FF]/50 bg-white/50 shadow-sm transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E64FF]/50 bg-white/50 shadow-sm transition-all duration-300"
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
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E64FF]/50 bg-white/50 shadow-sm transition-all duration-300"
                      placeholder="Please include specific products you're interested in, quantities, and any special requirements"
                      required
                    ></textarea>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-50/80 backdrop-filter backdrop-blur-sm border border-blue-100">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#3E64FF] border-gray-300 focus:ring-[#3E64FF]/50"
                        />
                        <span className="ml-2 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Email</span>
                        </span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#3E64FF] border-gray-300 focus:ring-[#3E64FF]/50"
                        />
                        <span className="ml-2 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span>Phone</span>
                        </span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="whatsapp"
                          checked={formData.preferredContact === "whatsapp"}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#3E64FF] border-gray-300 focus:ring-[#3E64FF]/50"
                        />
                        <span className="ml-2 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          <span>WhatsApp</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white px-6 py-3.5 rounded-lg font-medium hover:from-[#3E64FF] hover:to-[#3E64FF] transition-all hover:-translate-y-0.5 duration-300 shadow-md flex items-center justify-center"
                    >
                      <span>Submit Inquiry</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="glass-effect p-8 rounded-2xl card-hover bg-white/60 backdrop-filter backdrop-blur-lg shadow-lg border border-white/40">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#3E64FF]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium ml-4 text-gray-800">
                        Headquarters
                      </h3>
                    </div>
                    <address className="not-italic text-gray-600 ml-12">
                      ChemoGlobal, Inc.
                      <br />
                      100 Chemistry Avenue
                      <br />
                      Boston, MA 02115, USA
                    </address>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#3E64FF]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium ml-4 text-gray-800">
                        Phone
                      </h3>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-600">
                        Sales & Support: +1 (555) 123-4567
                      </p>
                      <p className="text-gray-600">
                        Technical Support: +1 (555) 765-4321
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#3E64FF]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium ml-4 text-gray-800">
                        Email
                      </h3>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-600">
                        General Inquiries: info@chemoglobal.com
                      </p>
                      <p className="text-gray-600">
                        Sales: sales@chemoglobal.com
                      </p>
                      <p className="text-gray-600">
                        Support: support@chemoglobal.com
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#3E64FF]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium ml-4 text-gray-800">
                        Business Hours
                      </h3>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM (EST)
                      </p>
                      <p className="text-gray-600">
                        Saturday: 9:00 AM - 1:00 PM (EST)
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 bg-gradient-to-br from-blue-50/80 to-blue-100/50 backdrop-filter backdrop-blur-sm p-6 rounded-2xl border border-blue-100/50">
                <h3 className="text-lg font-medium mb-4 text-gray-800">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full shadow-sm hover:shadow transition-all hover:-translate-y-1 duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-5 w-5 text-[#3E64FF]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full shadow-sm hover:shadow transition-all hover:-translate-y-1 duration-300"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-5 w-5 text-[#3E64FF]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full shadow-sm hover:shadow transition-all hover:-translate-y-1 duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-5 w-5 text-[#3E64FF]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full shadow-sm hover:shadow transition-all hover:-translate-y-1 duration-300"
                    aria-label="YouTube"
                  >
                    <svg
                      className="h-5 w-5 text-[#3E64FF]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white/60 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/40">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Visit Our Facilities
            </h2>
            <div className="rounded-xl overflow-hidden h-[400px] shadow-md border border-white/30">
              <div className="w-full h-full bg-blue-50/80 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white/80 backdrop-filter backdrop-blur-sm p-3 rounded-full inline-flex mb-4 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#3E64FF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 mb-2">
                    Interactive map would be displayed here
                  </p>
                  <p className="text-[#3E64FF]">
                    Google Maps or equivalent integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start a Conversation?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your chemical needs and
              discover how ChemoGlobal can support your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote"
                className="bg-white text-[#3E64FF] px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
