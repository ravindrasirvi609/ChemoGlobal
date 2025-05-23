"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function RequestQuote() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    productName: searchParams?.get("product") || "",
    casNumber: searchParams?.get("cas") || "",
    quantity: "",
    purity: "",
    targetDate: "",
    requirements: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions before submitting.");
      return;
    }

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
        console.log("Quote request submission successful:", result);
        alert(
          "Thank you for your quote request. Our team will process it and get back to you shortly!"
        );

        // Reset form (except for any pre-filled product)
        const product = formData.productName;
        const cas = formData.casNumber;
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          country: "",
          productName: product, // Keep the product name
          casNumber: cas, // Keep the CAS number
          quantity: "",
          purity: "",
          targetDate: "",
          requirements: "",
          termsAccepted: false,
        });
      }
    } catch (error) {
      console.error("Error submitting quote request:", error);
      alert(
        "An error occurred while submitting your quote request. Please try again later."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-500/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
          <div
            className="absolute bottom-0 -left-24 w-64 h-64 bg-gradient-to-br from-green-400/10 to-green-500/20 rounded-full blur-3xl opacity-70 animate-pulse"
            style={{ animationDuration: "15s" }}
          ></div>

          {/* Molecular Structure Background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="molecularPattern"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="30" cy="30" r="2" fill="#3E64FF" />
                  <path d="M30,30 L50,50" stroke="#3E64FF" strokeWidth="1" />
                  <path d="M30,30 L10,50" stroke="#3E64FF" strokeWidth="1" />
                  <path d="M30,30 L30,10" stroke="#3E64FF" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#molecularPattern)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center mb-4 bg-blue-500/10 backdrop-filter backdrop-blur-sm rounded-full px-4 py-1 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">
              Get a custom quote for your specific needs
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-transparent bg-clip-text">
              Request a Quote
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Fill out the form below to request pricing information for our
            chemical products. Our team will respond within 24 hours.
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

      <main className="flex-grow py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-filter backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-white/50">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Contact Information Section */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Contact Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Your Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Company Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                          placeholder="Your Company, Inc."
                          required
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Email Address*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Phone Number*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                          placeholder="+1 234 567 8900"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group md:col-span-1">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                        placeholder="123 Business St."
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                        placeholder="Boston"
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Country*
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                        placeholder="United States"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Product Information Section */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Product Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="productName"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Product Name*
                      </label>
                      <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                        placeholder="Product name"
                        required
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="casNumber"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        CAS Number
                      </label>
                      <input
                        type="text"
                        id="casNumber"
                        name="casNumber"
                        value={formData.casNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                        placeholder="e.g. 123-45-6"
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Quantity Needed*
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                        placeholder="e.g. 100 kg"
                        required
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="purity"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Required Purity
                      </label>
                      <input
                        type="text"
                        id="purity"
                        name="purity"
                        value={formData.purity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                        placeholder="e.g. >99%"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="group">
                      <label
                        htmlFor="targetDate"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Target Date
                      </label>
                      <input
                        type="date"
                        id="targetDate"
                        name="targetDate"
                        value={formData.targetDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="group">
                      <label
                        htmlFor="requirements"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors"
                      >
                        Additional Requirements or Comments
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        rows={4}
                        value={formData.requirements}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/70 backdrop-filter backdrop-blur-sm"
                        placeholder="Please share any specific requirements or additional information..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Terms and Submit Section */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="termsAccepted"
                        name="termsAccepted"
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="focus:ring-blue-500 h-5 w-5 text-blue-600 border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="termsAccepted"
                        className="font-medium text-gray-700"
                      >
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white px-8 py-3.5 rounded-xl font-medium hover:from-[#3E64FF] hover:to-[#3E64FF] transition-all hover:-translate-y-1 duration-300 shadow-md hover:shadow-xl flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <span>Submit Quote Request</span>
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
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Information Box */}
            <div className="mt-12 bg-blue-50/80 backdrop-filter backdrop-blur-md rounded-2xl p-8 border border-blue-100/50 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  What happens next?
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <span className="font-semibold">1</span>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Our team will review your request and process it within 24
                      business hours.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <span className="font-semibold">2</span>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      You&apos;ll receive a confirmation email with your request
                      details.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <span className="font-semibold">3</span>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Our sales team will contact you to discuss your
                      requirements and provide pricing options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
