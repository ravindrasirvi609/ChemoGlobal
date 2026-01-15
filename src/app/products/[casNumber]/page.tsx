"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  getProductByCasNumber,
  PRODUCTS,
  makeUrlSafe,
} from "../../data/products";

// Download Dialog Component
function DownloadDialog({
  isOpen,
  onClose,
  documentType,
  onSubmit,
  isSubmitting,
}: {
  isOpen: boolean;
  onClose: () => void;
  documentType: string;
  isSubmitting: boolean;
  onSubmit: (formData: {
    name: string;
    email: string;
    companyName: string;
    contactNo: string;
  }) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    contactNo: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.contactNo.trim())
      newErrors.contactNo = "Contact number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
    setFormData({ name: "", email: "", companyName: "", contactNo: "" });
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">
              Download {documentType}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#3E64FF] focus:border-transparent ${errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#3E64FF] focus:border-transparent ${errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#3E64FF] focus:border-transparent ${errors.companyName ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Enter your company name"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.contactNo}
                onChange={(e) =>
                  setFormData({ ...formData, contactNo: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#3E64FF] focus:border-transparent ${errors.contactNo ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Enter your contact number"
              />
              {errors.contactNo && (
                <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>
              )}
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white rounded-lg hover:from-[#3E64FF] hover:to-[#3E64FF] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const params = useParams();
  const [downloadDialog, setDownloadDialog] = useState<{
    isOpen: boolean;
    documentType: string;
  }>({ isOpen: false, documentType: "" });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [submittedDocumentType, setSubmittedDocumentType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Debug params
  console.log("Params received:", params);

  const casNumber = Array.isArray(params.casNumber)
    ? params.casNumber[0]
    : params.casNumber || "";

  // Debug casNumber
  console.log("CAS Number extracted:", casNumber);
  console.log(
    "Product IDs available:",
    PRODUCTS.map((p) => p.casNumber)
  );

  const product = getProductByCasNumber(casNumber);
  console.log("Product found:", product ? "Yes" : "No");

  const handleDownloadClick = (documentType: string) => {
    setDownloadDialog({ isOpen: true, documentType });
  };

  const handleFormSubmit = async (formData: {
    name: string;
    email: string;
    companyName: string;
    contactNo: string;
  }) => {
    try {
      setIsSubmitting(true);
      console.log("Form submitted:", formData);

      // Prepare data for API call
      const apiData = {
        ...formData,
        documentType: downloadDialog.documentType,
        formType: "download",
      };

      // Call the API to send emails
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      const result = await response.json();

      if (response.ok) {
        // Success - show success message
        setSubmittedDocumentType(downloadDialog.documentType);
        setDownloadDialog({ isOpen: false, documentType: "" });
        setShowSuccessMessage(true);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } else {
        // Error - show error message
        console.error("API Error:", result);
        alert(`Error submitting form: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeDownloadDialog = () => {
    setDownloadDialog({ isOpen: false, documentType: "" });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="bg-white/80 backdrop-filter backdrop-blur-lg rounded-2xl p-10 text-center shadow-lg border border-red-100/50">
            <div className="bg-red-50/80 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Product Not Found
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The product with CAS number{" "}
              <span className="font-semibold">{casNumber}</span> could not be
              found in our database.
            </p>
            <Link
              href="/products"
              className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white px-6 py-3 rounded-lg font-medium hover:from-[#3E64FF] hover:to-[#3E64FF] transition-all hover:-translate-y-0.5 duration-300 shadow-md inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Browse All Products</span>
            </Link>
            <p className="text-sm text-gray-500 mt-6">
              Try searching for a different product or contact us for
              assistance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Product Header */}
        <section className="relative overflow-hidden py-16">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-500/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
            <div
              className="absolute bottom-0 -left-24 w-64 h-64 bg-gradient-to-br from-green-400/10 to-green-500/20 rounded-full blur-3xl opacity-70 animate-pulse"
              style={{ animationDuration: "15s" }}
            ></div>

            {/* Molecular Structure Background */}
            <div className="absolute inset-0 opacity-5">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#molecularPattern)"
                />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 text-gray-500 mb-6 backdrop-filter backdrop-blur-sm bg-white/30 py-2 px-4 rounded-full inline-flex shadow-sm hover:shadow transition-shadow duration-300">
              <Link
                href="/products"
                className="hover:text-[#3E64FF] transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Products
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <Link
                href={`/products?category=${encodeURIComponent(
                  product.category
                )}`}
                className="hover:text-[#3E64FF] transition-colors"
              >
                {product.category}
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-[#3E64FF] font-medium">{product.name}</span>
            </div>

            <div className="md:flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-transparent bg-clip-text">
                    {product.name}
                  </span>
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 mb-3 text-gray-700">
                  <div className="bg-blue-50/80 backdrop-filter backdrop-blur-sm px-3 py-1 rounded-full border border-blue-100/50 inline-flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-0.5">
                    <span className="mr-1 text-sm text-gray-500">CAS:</span>
                    <span className="font-mono font-medium">
                      {product.casNumber}
                    </span>
                  </div>
                  {product.molecularFormula && (
                    <div className="bg-blue-50/80 backdrop-filter backdrop-blur-sm px-3 py-1 rounded-full border border-blue-100/50 inline-flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-0.5">
                      <span className="font-medium font-mono">
                        {product.molecularFormula}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  {product.tags &&
                    product.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-white/60 backdrop-filter backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-600 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-0.5 hover:bg-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <Link
                  href={`/request-quote?product=${encodeURIComponent(
                    product.name
                  )}&cas=${encodeURIComponent(product.casNumber)}`}
                  className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white px-6 py-3.5 rounded-full font-medium hover:from-[#3E64FF] hover:to-[#3E64FF] transition-all hover:-translate-y-1 duration-300 shadow-md hover:shadow-lg inline-flex items-center"
                >
                  <span>Request Quote</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
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

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Product Image and Actions */}
            <div>
              <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/30 backdrop-filter backdrop-blur-lg rounded-2xl h-64 flex items-center justify-center mb-6 shadow-lg border border-white/50 overflow-hidden group perspective">
                <div className="relative w-full h-full flex items-center justify-center transform transition-transform duration-700 group-hover:rotate-y-6">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={250}
                      className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="text-8xl transform transition-transform duration-500 group-hover:scale-110 relative">
                      {product.category === "Pharmaceutical Intermediates" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-24 w-24 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      )}
                      {product.category === "Specialty Chemicals" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-24 w-24 text-purple-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      )}
                      {product.category === "APIs" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-24 w-24 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m-6-8h6M9 3v18m0 0h6m-6 0H3m18-9a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-filter backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-lg border border-white/40 hover:shadow-xl transition-shadow duration-300 hover:bg-white/80">
                <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#3E64FF]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                  Quick Information
                </h2>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50/70 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDownloadClick("Certificate of Analysis");
                    }}
                  >
                    <div className="flex items-center">
                      <div className="bg-red-50 p-2 rounded-full mr-3 text-red-500">
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
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <span className="font-medium">
                        Certificate of Analysis (COA)
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#3E64FF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50/70 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDownloadClick("Safety Data Sheet");
                    }}
                  >
                    <div className="flex items-center">
                      <div className="bg-yellow-50 p-2 rounded-full mr-3 text-yellow-500">
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
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      </div>
                      <span className="font-medium">
                        Safety Data Sheet (SDS)
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#3E64FF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50/70 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDownloadClick("Product Brochure");
                    }}
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-50 p-2 rounded-full mr-3 text-blue-500">
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
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="font-medium">Product Brochure</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#3E64FF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/40">
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  Need Assistance?
                </h2>
                <p className="text-gray-600 mb-5">
                  Our technical team is available to answer any questions about
                  this product.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:admin@operantworld.com"
                    className="flex items-center text-[#3E64FF] hover:text-[#536DFE] transition-colors group"
                  >
                    <div className="bg-[#3E64FF]/10 p-2 rounded-full mr-3 text-[#3E64FF] group-hover:bg-[#3E64FF]/20 transition-colors">
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
                    <span className="font-medium">Email Technical Support</span>
                  </a>
                  <a
                    href="tel:+918107199052"
                    className="flex items-center text-[#3E64FF] hover:text-[#536DFE] transition-colors group"
                  >
                    <div className="bg-[#3E64FF]/10 p-2 rounded-full mr-3 text-[#3E64FF] group-hover:bg-[#3E64FF]/20 transition-colors">
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
                    <span className="font-medium">Call Sales Team</span>
                  </a>
                  <a
                    href="https://wa.me/918107199052"
                    className="flex items-center text-[#3E64FF] hover:text-[#536DFE] transition-colors group"
                  >
                    <div className="bg-[#3E64FF]/10 p-2 rounded-full mr-3 text-[#3E64FF] group-hover:bg-[#3E64FF]/20 transition-colors">
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="lg:col-span-2">
              <div className="bg-white/60 backdrop-filter backdrop-blur-lg rounded-2xl p-8 mb-6 shadow-lg border border-white/40">
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#3E64FF] text-sm font-medium">
                  Product Details
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Product Overview
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Add Key Features Section */}
                {product.keyFeatures && product.keyFeatures.length > 0 && (
                  <div className="mb-8 bg-gradient-to-br from-gray-50/80 to-blue-50/50 rounded-xl p-6 border border-white/60">
                    <h3 className="font-bold text-lg mb-4 text-gray-800">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-[#7ED957]/20 p-1 rounded-full mr-3 mt-0.5 text-[#7ED957]">
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">
                    Key Applications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.applications.map((app, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-filter backdrop-blur-sm p-4 rounded-lg border border-gray-100 flex items-center"
                      >
                        <span className="bg-blue-50 p-2 rounded-full mr-3 text-[#3E64FF]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 12l5-5m0 0l5 5m-5-5v12"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-xl p-6 border border-white/60">
                    <h3 className="font-bold text-lg mb-4 text-gray-800">
                      Specifications
                    </h3>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-white/60">
                          <td className="py-3 text-gray-600">Purity</td>
                          <td className="py-3 font-medium text-right">
                            {product.purity}
                          </td>
                        </tr>
                        {product.molecularFormula && (
                          <tr className="border-b border-white/60">
                            <td className="py-3 text-gray-600">
                              Molecular Formula
                            </td>
                            <td className="py-3 font-medium text-right">
                              {product.molecularFormula}
                            </td>
                          </tr>
                        )}
                        {product.molecularWeight && (
                          <tr className="border-b border-white/60">
                            <td className="py-3 text-gray-600">
                              Molecular Weight
                            </td>
                            <td className="py-3 font-medium text-right">
                              {product.molecularWeight}
                            </td>
                          </tr>
                        )}
                        {product.appearance && (
                          <tr className="border-b border-white/60">
                            <td className="py-3 text-gray-600">Appearance</td>
                            <td className="py-3 font-medium text-right">
                              {product.appearance}
                            </td>
                          </tr>
                        )}
                        {/* {product.storageCondition && (
                          <tr className="border-b border-white/60">
                            <td className="py-3 text-gray-600">
                              Storage Condition
                            </td>
                            <td className="py-3 font-medium text-right">
                              {product.storageCondition}
                            </td>
                          </tr>
                        )} */}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-xl p-6 border border-white/60">
                    <h3 className="font-bold text-lg mb-4 text-gray-800">
                      Additional Information
                    </h3>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-white/60">
                          <td className="py-3 text-gray-600">Category</td>
                          <td className="py-3 font-medium text-right">
                            {product.category}
                          </td>
                        </tr>
                        {/* {product.synonyms && product.synonyms.length > 0 && (
                          <tr className="border-b border-white/60">
                            <td className="py-3 text-gray-600">Synonyms</td>
                            <td className="py-3 font-medium text-right">
                              {product.synonyms.join(", ")}
                            </td>
                          </tr>
                        )}
                        {product.hazardClass && (
                          <tr className="border-b border-white/60">
                            <td className="py-3 text-gray-600">Hazard Class</td>
                            <td className="py-3 font-medium text-right">
                              {product.hazardClass}
                            </td>
                          </tr>
                        )}
                        {product.unNumber && (
                          <tr className="border-b border-white/60">
                            <td className="py-3 text-gray-600">UN Number</td>
                            <td className="py-3 font-medium text-right">
                              {product.unNumber}
                            </td>
                          </tr>
                        )} */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Related Products Section */}
              <div className="bg-white/60 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/40">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Similar Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PRODUCTS.filter(
                    (p) =>
                      p.category === product.category && p.id !== product.id
                  )
                    .slice(0, 2)
                    .map((relatedProduct) => (
                      <Link
                        key={relatedProduct.id}
                        href={`/products/${makeUrlSafe(
                          relatedProduct.casNumber
                        )}`}
                        className="bg-white/80 backdrop-filter backdrop-blur-sm p-4 rounded-xl border border-gray-100 flex items-start gap-4 hover:border-blue-100 hover:shadow-md transition-all hover:-translate-y-0.5 duration-300"
                      >
                        <div className="bg-blue-50 p-3 rounded-lg text-blue-500 flex-shrink-0">
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
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800 mb-1">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-1">
                            CAS: {relatedProduct.casNumber}
                          </p>
                          <p className="text-xs text-[#3E64FF]">View details</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white mt-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Interested in {product.name}?
              </h2>
              <p className="text-white/90 mb-8">
                Contact our team to discuss your specific needs, bulk pricing,
                customization options, or other requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href={`/request-quote?product=${encodeURIComponent(
                    product.name
                  )}&cas=${encodeURIComponent(product.casNumber)}`}
                  className="bg-white text-[#3E64FF] px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Contact Sales Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {downloadDialog.isOpen && (
        <DownloadDialog
          isOpen={downloadDialog.isOpen}
          onClose={closeDownloadDialog}
          documentType={downloadDialog.documentType}
          isSubmitting={isSubmitting}
          onSubmit={handleFormSubmit}
        />
      )}
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-40 max-w-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">
                Request Submitted Successfully!
              </p>
              <p className="text-xs text-green-100 mt-1">
                The {submittedDocumentType} will be sent to your email shortly.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
