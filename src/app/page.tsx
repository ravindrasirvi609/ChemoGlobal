"use client";

import Link from "next/link";
import Image from "next/image";
import { featuredProducts, Product } from "./data/products";
import ProductCard from "./components/ProductCard";

// Define types
type Testimonial = {
  name: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
};

// Default product image
export default function Home() {
  // Handle adding product to quote
  const handleAddToQuote = (product: Product) => {
    // Implementation will go here
    console.log("Added to quote:", product);
  };

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      name: "Dr. Sarah Johnson",
      position: "Research Director",
      company: "PharmaTech Labs",
      avatar: "/images/avatars/avatar-1.jpg",
      quote:
        "ChemoGlobal has consistently provided us with high-quality building blocks that have accelerated our drug discovery programs.",
    },
    {
      name: "Michael Chen",
      position: "Procurement Manager",
      company: "BioSynth Inc",
      avatar: "/images/avatars/avatar-2.jpg",
      quote:
        "Their custom synthesis capabilities and technical support have been invaluable to our research initiatives.",
    },
    {
      name: "Dr. Emma Rodriguez",
      position: "Head of Chemistry",
      company: "Advanced Materials Corp",
      avatar: "/images/avatars/avatar-3.jpg",
      quote:
        "Working with ChemoGlobal has significantly shortened our development timelines thanks to their reliable supply chain.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-20 lg:py-28">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gradient-to-br from-green-400/10 to-green-500/20 rounded-full blur-3xl"></div>

          {/* Molecular Structure Background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="molecularGrid"
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
              <rect width="100%" height="100%" fill="url(#molecularGrid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-transparent bg-clip-text">
                  Premium Chemical
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#536DFE] to-[#7ED957] text-transparent bg-clip-text">
                  Intermediates
                </span>
                <br />
                <span>for Global Industries</span>
              </h1>

              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                ChemoGlobal delivers high-quality, specialized chemical
                intermediates for pharmaceutical, agrochemical, and research
                applications worldwide with a commitment to quality and
                innovation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] hover:from-[#3E64FF] hover:to-[#3E64FF] text-white px-6 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 flex items-center"
                >
                  <span>Explore Products</span>
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
                <Link
                  href="/contact"
                  className="border-2 border-[#536DFE] text-[#536DFE] hover:bg-[#536DFE]/10 px-6 py-3.5 rounded-full font-medium transition-colors flex items-center"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12">
                <p className="text-sm text-gray-500 mb-3">
                  Trusted by leading organizations worldwide
                </p>
                <div className="flex flex-wrap items-center gap-8 opacity-70">
                  {[
                    "PharmaCorp",
                    "BioTech Labs",
                    "ChemResearch",
                    "MediSynth",
                  ].map((company, i) => (
                    <div
                      key={i}
                      className="text-gray-400 font-semibold tracking-tight"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/50 backdrop-filter backdrop-blur-sm">
                <Image
                  src="/images/lab-equipment.jpg"
                  alt="Laboratory Equipment"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-sm font-medium opacity-90 mb-1">
                    Advanced Research Facility
                  </div>
                  <div className="text-xl font-bold">
                    State-of-the-art equipment for superior quality
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white/80 backdrop-filter backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/50 hidden md:block">
                <div className="flex items-center">
                  <div className="bg-green-500/20 rounded-full p-2 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">ISO Certified</div>
                    <div className="text-sm font-semibold text-gray-800">
                      Quality Assured
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-filter backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/50 hidden md:block">
                <div className="flex items-center">
                  <div className="bg-blue-500/20 rounded-full p-2 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Global Shipping</div>
                    <div className="text-sm font-semibold text-gray-800">
                      180+ Countries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white">
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

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-transparent bg-clip-text">
                Product Categories
              </span>
            </h2>
            <p className="text-gray-600">
              Explore our diverse range of high-quality chemical products
              tailored for various industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Pharmaceutical Intermediates",
                description:
                  "High-purity compounds for pharmaceutical manufacturing and drug development processes",
                icon: "🧪",
                link: "/products?category=Pharmaceutical%20Intermediates",
                color: "from-blue-400/20 to-blue-500/20",
                count: "9 Products",
              },
              {
                title: "Specialty Chemicals",
                description:
                  "Custom synthesized chemicals for specific applications and research needs",
                icon: "⚗️",
                link: "/products?category=Specialty%20Chemicals",
                color: "from-purple-400/20 to-purple-500/20",
                count: "15+ Products",
              },
              {
                title: "Active Pharmaceutical Ingredients",
                description:
                  "GMP-certified APIs for pharmaceutical production and clinical trials",
                icon: "💊",
                link: "/products?category=APIs",
                color: "from-green-400/20 to-green-500/20",
                count: "10+ Products",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="relative group bg-white backdrop-filter backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-5 p-3 inline-block bg-white rounded-lg shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>

                  {/* Product count */}
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                      {category.count}
                    </span>
                  </div>

                  <Link
                    href={category.link}
                    className="inline-flex items-center text-[#3E64FF] font-medium hover:text-[#536DFE] group-hover:translate-x-1 transition-all"
                  >
                    View Category
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose ChemoGlobal</h2>
            <p className="text-gray-600">
              We combine scientific expertise with exceptional service to
              provide the highest quality chemical solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality Certified",
                description:
                  "ISO 9001 and GMP certified manufacturing facilities ensuring the highest standards",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Global Shipping",
                description:
                  "Fast and reliable worldwide delivery network reaching over 180 countries",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Competitive Pricing",
                description:
                  "Transparent pricing structure with volume discounts for bulk orders",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Expert Support",
                description:
                  "Technical experts available for consultation on complex chemical needs",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-filter backdrop-blur-sm p-8 rounded-2xl border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-4 rounded-xl inline-block mb-5 text-[#3E64FF] group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600">
              Discover our most popular high-quality chemical intermediates used
              by leading research facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToQuote={handleAddToQuote}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#3E64FF] text-[#3E64FF] hover:bg-[#3E64FF]/5 rounded-full font-medium transition-colors"
            >
              View All Products
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
      </section>

      {/* New Products Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4 bg-green-500/10 backdrop-filter backdrop-blur-sm rounded-full px-4 py-1 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Recently Added</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                New Products
              </span>
            </h2>
            <p className="text-gray-600">
              Discover our latest additions to the product catalog, featuring
              cutting-edge chemical intermediates and specialty compounds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Ethyl Acetimidate Hydrochloride",
                category: "Pharmaceutical Intermediates",
                image: "/images/products/ethyl-acetimidate-hydrochloride.png",
                casNumber: "22007-91-6",
                purity: "≥98%",
              },
              {
                name: "4-Chloro-3-Nitro Benzoic Acid Methyl Ester",
                category: "Pharmaceutical Intermediates",
                image:
                  "/images/products/4-chloro-3-nitro-benzoic-acid-methyl-ester.png",
                casNumber: "14719-83-6",
                purity: "≥98%",
              },
              {
                name: "γ-Butyrolactone",
                category: "Specialty Chemicals",
                image: "/images/products/gamma-butyrolactone.png",
                casNumber: "96-48-0",
                purity: "≥99%",
              },
              {
                name: "Tetrabenazine",
                category: "APIs",
                image: "/images/products/tetrabenazine.png",
                casNumber: "58-46-8",
                purity: "≥98%",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-32 bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={120}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    {product.category}
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    {product.casNumber}
                  </p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {product.purity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              Explore All New Products
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">
              Trusted by leading research institutions and pharmaceutical
              companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white backdrop-filter backdrop-blur-sm p-8 rounded-2xl border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <svg
                    className="absolute -top-4 -left-4 h-8 w-8 text-[#3E64FF]/20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to transform your chemical supply chain?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with ChemoGlobal for reliable, high-quality chemical
              intermediates and exceptional service tailored to your needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote"
                className="bg-white text-[#3E64FF] px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-colors"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Section - NEW */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Leading Companies Choose{" "}
              <span className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-transparent bg-clip-text">
                ChemoGlobal
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, innovation, and customer satisfaction
              sets us apart in the chemical industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description:
                  "All products undergo rigorous quality control with comprehensive analytical documentation provided for every batch.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Custom Synthesis",
                description:
                  "Specialized synthesis capabilities and process development for unique chemical requirements and scale-up solutions.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
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
                ),
              },
              {
                title: "Global Logistics",
                description:
                  "Reliable worldwide shipping with temperature-controlled options and customs documentation handling for seamless delivery.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform"
              >
                <div className="bg-blue-50 h-16 w-16 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Metrics Section - NEW */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="metricPattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="#3E64FF" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#metricPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1200+", label: "Products" },
              { value: "95%", label: "Customer Retention" },
              { value: "180+", label: "Countries Served" },
              { value: "25+", label: "Years Experience" },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="bg-white/80 backdrop-filter backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
                  <div className="text-4xl md:text-5xl font-bold text-[#3E64FF] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications - NEW */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4 bg-blue-500/10 backdrop-filter backdrop-blur-sm rounded-full px-4 py-1 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="font-medium">Industry Solutions</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Chemical Solutions for{" "}
              <span className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-transparent bg-clip-text">
                Every Industry
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized products serve diverse applications across
              multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pharmaceutical",
                description:
                  "High-purity intermediates and building blocks for API synthesis and drug discovery research.",
                image: "/images/industry/pharma.jpg",
              },
              {
                title: "Agrochemical",
                description:
                  "Specialized intermediates for the development of crop protection and enhancement products.",
                image: "/images/industry/agro.jpg",
              },
              {
                title: "Electronics",
                description:
                  "Ultra-pure materials for semiconductor manufacturing and electronic components.",
                image: "/images/industry/electronics.jpg",
              },
              {
                title: "Materials Science",
                description:
                  "Advanced compounds for polymer development and material enhancement applications.",
                image: "/images/industry/materials.jpg",
              },
              {
                title: "Biotechnology",
                description:
                  "Reagents and building blocks for biomolecule research and development.",
                image: "/images/industry/biotech.jpg",
              },
              {
                title: "Cosmetics",
                description:
                  "Specialty ingredients for personal care and cosmetic formulations.",
                image: "/images/industry/cosmetics.jpg",
              },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  {industry.image && (
                    <>
                      <Image
                        src={industry.image}
                        alt={`${industry.title} industry`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    </>
                  )}
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <h3 className="text-xl font-bold text-white">
                      {industry.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{industry.description}</p>
                  <Link
                    href={`/products?industry=${encodeURIComponent(
                      industry.title
                    )}`}
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <span>Explore {industry.title} Products</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business CTA Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-[#3E64FF]/90 to-[#536DFE]/90 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          {/* Molecular Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="ctaMolecularPattern"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="30" cy="30" r="2" fill="white" />
                  <path d="M30,30 L50,50" stroke="white" strokeWidth="1" />
                  <path d="M30,30 L10,50" stroke="white" strokeWidth="1" />
                  <path d="M30,30 L30,10" stroke="white" strokeWidth="1" />
                  <path d="M30,30 L50,10" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#ctaMolecularPattern)"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Advance Your Chemical Projects?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Partner with ChemoGlobal for high-quality chemical intermediates,
              custom synthesis solutions, and expert technical support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="bg-white text-[#3E64FF] px-8 py-4 rounded-xl font-medium transition-all hover:-translate-y-1 hover:shadow-lg duration-300 shadow-md flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <span>Browse Product Catalog</span>
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Contact Our Experts</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600">
              Discover our most popular high-quality chemical intermediates used
              by leading research facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToQuote={handleAddToQuote}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#3E64FF] text-[#3E64FF] hover:bg-[#3E64FF]/5 rounded-full font-medium transition-colors"
            >
              View All Products
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
      </section>
    </div>
  );
}
