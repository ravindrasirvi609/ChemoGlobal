"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

// Default product image
const defaultProductImage = "/images/chemical-placeholder.png";

// Mock product data
const PRODUCTS = [
  // Pharmaceutical Intermediates
  {
    id: 1,
    name: "Methyl 4-aminobenzoate",
    casNumber: "619-45-4",
    category: "Pharmaceutical Intermediates",
    description: "High-purity intermediate used in pharmaceutical synthesis",
    purity: "99.5% min",
    applications: ["API synthesis", "Research & Development"],
    image: "",
    isNew: false,
    tags: ["Intermediate", "High Purity"],
  },
  {
    id: 2,
    name: "4-Chlorobenzaldehyde",
    casNumber: "104-88-1",
    category: "Pharmaceutical Intermediates",
    description:
      "Key intermediate for pharmaceutical and agrochemical synthesis",
    purity: "98% min",
    applications: ["Drug development", "Agrochemicals"],
    image: "",
    isNew: false,
    tags: ["Intermediate", "Versatile"],
  },
  {
    id: 13,
    name: "2-Amino-5-chloropyridine",
    casNumber: "1072-98-6",
    category: "Pharmaceutical Intermediates",
    description:
      "High-purity pharmaceutical intermediate valued in organic synthesis and drug discovery",
    purity: "99% min",
    applications: ["API synthesis", "Drug discovery", "CNS drug candidates"],
    image: "",
    isNew: true,
    tags: ["Intermediate", "High Purity"],
  },
  {
    id: 3,
    name: "2-Aminopyridine",
    casNumber: "504-29-0",
    category: "Pharmaceutical Intermediates",
    description: "Used in the synthesis of various pharmaceutical compounds",
    purity: "99% min",
    applications: ["Pharmaceutical synthesis", "Research chemicals"],
    image: "",
    isNew: false,
    tags: ["Intermediate"],
  },
  {
    id: 4,
    name: "1,3-Dicyanobenzene",
    casNumber: "626-17-5",
    category: "Pharmaceutical Intermediates",
    description: "Important intermediate for API synthesis",
    purity: "98% min",
    applications: ["Medicinal chemistry", "Custom synthesis"],
    image: "",
    isNew: false,
    tags: ["Intermediate", "Custom Synthesis"],
  },

  // Specialty Chemicals
  {
    id: 5,
    name: "4-Methylbenzaldehyde",
    casNumber: "104-87-0",
    category: "Specialty Chemicals",
    description: "Used in fragrance and flavor compositions",
    purity: "99% min",
    applications: ["Fragrances", "Flavor compounds", "Chemical synthesis"],
    image: "",
    isNew: false,
    tags: ["Specialty", "Flavors"],
  },
  {
    id: 6,
    name: "Benzoic Acid",
    casNumber: "65-85-0",
    category: "Specialty Chemicals",
    description: "Widely used in industrial applications and preservatives",
    purity: "99.5% min",
    applications: ["Preservatives", "Polymer additives", "Pharmaceuticals"],
    image: "",
    isNew: false,
    tags: ["Specialty", "Industrial"],
  },
  {
    id: 7,
    name: "2-Ethylhexanol",
    casNumber: "104-76-7",
    category: "Specialty Chemicals",
    description: "Versatile solvent and intermediate",
    purity: "99% min",
    applications: ["Plasticizers", "Coatings", "Extraction processes"],
    image: "",
    isNew: true,
    tags: ["Specialty", "Solvent"],
  },
  {
    id: 8,
    name: "Benzophenone",
    casNumber: "119-61-9",
    category: "Specialty Chemicals",
    description: "Used in UV curing applications and organic synthesis",
    purity: "99% min",
    applications: ["UV absorbers", "Photochemistry", "Organic synthesis"],
    image: "",
    isNew: false,
    tags: ["Specialty", "UV Applications"],
  },

  // APIs
  {
    id: 9,
    name: "Paracetamol",
    casNumber: "103-90-2",
    category: "APIs",
    description: "Active pharmaceutical ingredient with analgesic properties",
    purity: "99.5% min",
    applications: ["Pain management", "Fever reduction"],
    image: "",
    isNew: false,
    tags: ["API", "Analgesic"],
  },
  {
    id: 10,
    name: "Metformin HCl",
    casNumber: "1115-70-4",
    category: "APIs",
    description: "Antidiabetic medication API",
    purity: "99% min",
    applications: ["Diabetes management", "Pharmaceutical formulations"],
    image: "",
    isNew: false,
    tags: ["API", "Antidiabetic"],
  },
  {
    id: 11,
    name: "Atorvastatin Calcium",
    casNumber: "134523-03-8",
    category: "APIs",
    description: "GMP-certified API for cholesterol management",
    purity: "99% min",
    applications: ["Cardiovascular health", "Pharmaceutical formulations"],
    image: "",
    isNew: false,
    tags: ["API", "GMP", "Cardiovascular"],
  },
  {
    id: 12,
    name: "Omeprazole",
    casNumber: "73590-58-6",
    category: "APIs",
    description: "API used in treatment of acid reflux and ulcers",
    purity: "99.5% min",
    applications: ["Gastric acid regulation", "Pharmaceutical formulations"],
    image: "",
    isNew: true,
    tags: ["API", "Gastric"],
  },
];

// Categories with icons
const CATEGORIES = [
  { name: "All Products", count: PRODUCTS.length, icon: "🧪" },
  {
    name: "Pharmaceutical Intermediates",
    count: PRODUCTS.filter((p) => p.category === "Pharmaceutical Intermediates")
      .length,
    icon: "🧪",
  },
  {
    name: "Specialty Chemicals",
    count: PRODUCTS.filter((p) => p.category === "Specialty Chemicals").length,
    icon: "⚗️",
  },
  {
    name: "APIs",
    count: PRODUCTS.filter((p) => p.category === "APIs").length,
    icon: "💊",
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [quoteItems, setQuoteItems] = useState<Array<(typeof PRODUCTS)[0]>>([]);

  // Handle adding product to quote request
  const handleAddToQuote = (product: (typeof PRODUCTS)[0]) => {
    setQuoteItems((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
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
                  <div
                    key={product.id}
                    className="bg-white/40 backdrop-filter backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                  >
                    <div className="relative bg-gradient-to-br from-blue-50/50 to-blue-100/50 backdrop-filter backdrop-blur-sm h-48 flex items-center justify-center p-6">
                      <div className="absolute inset-0 bg-blue-500/10 backdrop-filter backdrop-blur-[2px]"></div>
                      <img
                        src={product.image || defaultProductImage}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain z-10 transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <span className="absolute top-2 right-2 bg-green-500/80 backdrop-filter backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-3">
                        {product.casNumber}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags &&
                          product.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-blue-100/50 backdrop-filter backdrop-blur-sm text-blue-800 text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <Link
                          href={`/products/${product.id}`}
                          className="bg-blue-600/90 backdrop-filter backdrop-blur-sm hover:bg-blue-700/90 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
                        >
                          View Details
                        </Link>
                        <button
                          onClick={() => handleAddToQuote(product)}
                          className="ml-2 text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50/60 hover:backdrop-blur-sm transition-all"
                          title="Add to Quote"
                        >
                          <span className="sr-only">Add to Quote</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">
                Don't see what you're looking for? We offer custom synthesis
                services.
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
            &copy; {new Date().getFullYear()} ChemoGlobal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
