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
    casNumber: "",
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions before submitting.");
      return;
    }

    // In a real application, you would send this data to your backend
    console.log("Quote request submitted:", formData);
    alert(
      "Thank you for your quote request. Our team will process it and get back to you shortly!"
    );

    // Reset form (except for any pre-filled product)
    const product = formData.productName;
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      productName: product, // Keep the product name
      casNumber: "",
      quantity: "",
      purity: "",
      targetDate: "",
      requirements: "",
      termsAccepted: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Request a Quote
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Fill out the form below to request pricing information for our
            chemical products
          </p>
        </div>
      </div>

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-8">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Contact Information Section */}
                <div>
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
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
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+1 234 567 8900"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="123 Business St."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Boston"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Country*
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="United States"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Product Information Section */}
                <div className="pt-6 border-t border-gray-200">
                  <h2 className="text-2xl font-semibold mb-6">
                    Product Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="productName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Product Name*
                      </label>
                      <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Chemical name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="casNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        CAS Number (if known)
                      </label>
                      <input
                        type="text"
                        id="casNumber"
                        name="casNumber"
                        value={formData.casNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 123-45-6"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Quantity Required*
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 25kg, 100kg"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="purity"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Required Purity
                      </label>
                      <select
                        id="purity"
                        name="purity"
                        value={formData.purity}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Purity</option>
                        <option value="95%">95%</option>
                        <option value="98%">98%</option>
                        <option value="99%">99%</option>
                        <option value="99.5%">99.5%</option>
                        <option value="custom">Custom Specification</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="targetDate"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Target Delivery Date
                      </label>
                      <input
                        type="date"
                        id="targetDate"
                        name="targetDate"
                        value={formData.targetDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="requirements"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Additional Requirements or Specifications
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={4}
                      value={formData.requirements}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please specify any special requirements, packaging preferences, or regulatory compliances needed."
                    ></textarea>
                  </div>
                </div>

                {/* Terms and Submission */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="termsAccepted"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <label
                      htmlFor="termsAccepted"
                      className="text-sm text-gray-600"
                    >
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-blue-600 hover:underline"
                      >
                        Terms and Conditions
                      </Link>{" "}
                      and consent to ChemoGlobal processing my data for the
                      purpose of handling this request.
                    </label>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
                    <Link
                      href="/products"
                      className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-center"
                    >
                      Back to Products
                    </Link>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      Submit Quote Request
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>
                  Our sales team will review your request and prepare a quote.
                </li>
                <li>
                  You&apos;ll receive an email with pricing and availability
                  information within 24-48 business hours.
                </li>
                <li>
                  If further specifications are needed, our technical team will
                  contact you.
                </li>
                <li>
                  Once you approve the quote, we&apos;ll process your order and
                  arrange for shipping.
                </li>
              </ol>
              <div className="mt-6 flex items-center text-sm text-gray-600">
                <span className="text-yellow-500 mr-2">⚠️</span>
                <p>
                  For urgent quotes or large volume orders, please contact our
                  sales team directly at{" "}
                  <a
                    href="tel:+918107199052"
                    className="text-blue-600 hover:underline"
                  >
                    +91 8107199052
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
