"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
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
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Browse our extensive catalog of high-quality chemicals for
            pharmaceutical and industrial applications
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="lg:w-1/4">
            <div className="bg-white/50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 sticky top-8 border border-white/20">
              <h2 className="text-xl font-bold mb-6">Categories</h2>

              <ul className="space-y-3 mb-8">
                {CATEGORIES.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center w-full px-3 py-2 rounded-md transition-all duration-300 ${
                        selectedCategory === category.name
                          ? "bg-blue-500/20 backdrop-filter backdrop-blur-sm text-blue-600"
                          : "text-gray-700 hover:bg-gray-100/50 hover:backdrop-blur-sm"
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      <span>{category.name}</span>
                      <span className="ml-auto bg-gray-200/60 backdrop-filter backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold mb-4">Search</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or CAS number..."
                  className="w-full border border-white/30 bg-white/40 backdrop-filter backdrop-blur-lg rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/70 shadow-inner"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-3 top-2.5 text-gray-400">🔍</div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our experts are available to help you find the right chemical
                  for your needs.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-blue-600/90 backdrop-filter backdrop-blur-sm text-white rounded-md py-2 hover:bg-blue-700/90 transition-all hover:-translate-y-1 duration-300 shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Main content with product list */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {selectedCategory}{" "}
                <span className="text-gray-500 text-lg font-normal">
                  ({filteredProducts.length} products)
                </span>
              </h2>

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-blue-600 hover:underline"
                >
                  Clear Search
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-gray-50/60 backdrop-filter backdrop-blur-lg rounded-lg p-8 text-center shadow-md border border-white/20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Products");
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToQuote={handleAddToQuote}
                  />
                ))}
              </div>
            )}

            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">
                Don&apos;t see what you&apos;re looking for? We offer custom
                synthesis services.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600/90 backdrop-filter backdrop-blur-sm text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700/90 transition-all duration-300 shadow-md"
              >
                Inquire About Custom Synthesis
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ChemoGlobal</h3>
              <p className="text-gray-400">
                Your trusted partner for high-quality chemical products and
                solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-gray-400 hover:text-white"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certifications"
                    className="text-gray-400 hover:text-white"
                  >
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <span className="mr-2">📧</span> info@chemoglobal.com
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="mr-2">📱</span> +1 (555) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="mr-2">📍</span> 123 Chemical Way, Industry
                  Park
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded">
                  ISO 9001
                </span>
                <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded">
                  GMP
                </span>
                <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded">
                  FDA
                </span>
                <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded">
                  ISO 14001
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            &copy; 2025 ChemoGlobal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
