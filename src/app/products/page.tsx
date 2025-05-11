"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Handle adding product to quote request
  const handleAddToQuote = (product: (typeof PRODUCTS)[0]) => {
    // Could show a notification here
    console.log(`Added ${product.name} to quote request`);
  };

  // Filter products based on search term and selected category
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.casNumber.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-64 h-64 bg-gradient-to-br from-green-400/10 to-green-500/20 rounded-full blur-3xl"></div>

          {/* Molecular Structure Background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="productGrid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="25" cy="25" r="2" fill="#3E64FF" />
                  <path d="M25,25 L45,45" stroke="#3E64FF" strokeWidth="1" />
                  <path d="M25,25 L5,45" stroke="#3E64FF" strokeWidth="1" />
                  <path d="M25,25 L25,5" stroke="#3E64FF" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#productGrid)" />
            </svg>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/60 text-[#3E64FF] text-sm font-medium backdrop-filter backdrop-blur-sm">
            Chemical Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-transparent bg-clip-text">
              Products
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Browse our extensive catalog of high-quality chemicals for
            pharmaceutical and industrial applications
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

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="lg:w-1/4">
            <div className="bg-white/60 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-6 sticky top-8 border border-white/40 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-xl font-bold mb-6 text-gray-800">
                Categories
              </h2>

              <ul className="space-y-3 mb-8">
                {CATEGORIES.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.name
                          ? "bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-filter backdrop-blur-sm text-[#3E64FF] font-medium shadow-sm"
                          : "text-gray-700 hover:bg-gray-50/70 hover:backdrop-blur-sm"
                      }`}
                    >
                      <span className="mr-3 text-lg">{category.icon}</span>
                      <span>{category.name}</span>
                      <span className="ml-auto bg-white/70 backdrop-filter backdrop-blur-sm border border-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium shadow-sm">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold mb-4 text-gray-800">Search</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or CAS number..."
                  className="w-full border border-white/30 bg-white/50 backdrop-filter backdrop-blur-lg rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#3E64FF]/50 shadow-sm transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-3 top-3 text-gray-400">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-blue-50/80 to-blue-100/50 backdrop-filter backdrop-blur-sm p-6 rounded-xl border border-blue-100/50">
                <h3 className="font-semibold mb-2 text-gray-800">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our experts are available to help you find the right chemical
                  for your needs.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white rounded-lg py-2.5 hover:from-[#3E64FF] hover:to-[#3E64FF] transition-all hover:-translate-y-0.5 duration-300 shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Main content with product list */}
          <div className="lg:w-3/4">
            <div className="mb-8 flex flex-wrap justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                {selectedCategory}{" "}
                <span className="text-gray-500 text-lg font-normal">
                  ({filteredProducts.length} products)
                </span>
              </h2>

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-[#3E64FF] hover:text-[#536DFE] flex items-center transition-colors"
                >
                  <span>Clear Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white/80 backdrop-filter backdrop-blur-lg rounded-2xl p-12 text-center shadow-lg border border-white/50">
                <div className="bg-blue-50/80 rounded-full p-4 inline-flex mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  No products found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Products");
                  }}
                  className="inline-flex items-center bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white px-6 py-3 rounded-lg hover:from-[#3E64FF] hover:to-[#3E64FF] transition-all hover:-translate-y-0.5 duration-300 shadow-md"
                >
                  <span>Reset All Filters</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToQuote={handleAddToQuote}
                  />
                ))}
              </div>
            )}

            <div className="mt-16 text-center bg-gradient-to-br from-blue-50/80 to-blue-100/50 backdrop-filter backdrop-blur-sm p-8 rounded-2xl border border-blue-100/50">
              <div className="bg-white/50 backdrop-filter backdrop-blur-lg w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                Custom Synthesis
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Don&apos;t see what you&apos;re looking for? We offer custom
                synthesis services tailored to your specific requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white px-6 py-3.5 rounded-full font-medium hover:from-[#3E64FF] hover:to-[#3E64FF] transition-all hover:-translate-y-0.5 duration-300 shadow-md"
              >
                <span>Inquire About Custom Synthesis</span>
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
