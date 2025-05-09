"use client";

import Link from "next/link";
import Image from "next/image";
import { featuredProducts, Product } from "./data/products";
import ProductCard from "./components/ProductCard";

// Define types
type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

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

  // Features data
  const features: Feature[] = [
    {
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
      title: "Quality Assured",
      description:
        "All products undergo rigorous testing to ensure the highest quality and purity standards.",
    },
    {
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Fast Delivery",
      description:
        "Our efficient logistics network ensures prompt delivery to research facilities worldwide.",
    },
    {
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Custom Synthesis",
      description:
        "Our expert chemists can develop and scale custom molecules to meet your specific requirements.",
    },
  ];

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
      <section className="bg-[#F3F8FA] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-[#3E64FF] mb-6">
                Premium Chemical Intermediates for Global Industries
              </h1>
              <p className="text-[#64748B] text-lg mb-8">
                ChemoGlobal delivers high-quality, specialized chemical
                intermediates for pharmaceutical, agrochemical, and research
                applications worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="bg-[#536DFE] hover:bg-[#3E64FF] text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#536DFE] text-[#536DFE] hover:bg-[#536DFE] hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/lab-equipment.jpg"
                alt="Laboratory Equipment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pharmaceutical Intermediates",
                description:
                  "High-purity compounds for pharmaceutical manufacturing",
                icon: "🧪",
                link: "/products?category=Pharmaceutical%20Intermediates",
              },
              {
                title: "Specialty Chemicals",
                description:
                  "Custom synthesized chemicals for specific applications",
                icon: "⚗️",
                link: "/products?category=Specialty%20Chemicals",
              },
              {
                title: "Active Pharmaceutical Ingredients",
                description: "GMP-certified APIs for pharmaceutical production",
                icon: "💊",
                link: "/products?category=APIs",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-filter backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  href={category.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Category →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose ChemoGlobal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Quality Certified",
                description:
                  "ISO 9001 and GMP certified manufacturing facilities",
                icon: "✓",
              },
              {
                title: "Global Shipping",
                description: "Fast and reliable worldwide delivery network",
                icon: "🌎",
              },
              {
                title: "Competitive Pricing",
                description: "Transparent pricing with volume discounts",
                icon: "💰",
              },
              {
                title: "Technical Support",
                description: "Expert chemists available for consultation",
                icon: "👨‍🔬",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-filter backdrop-blur-sm p-6 rounded-xl border border-white/80 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3E64FF] mb-12 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onAddToQuote={handleAddToQuote}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="bg-[#536DFE] hover:bg-[#3E64FF] text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ChemoGlobal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing high-quality chemical products and
              exceptional service to support your research and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100/60 backdrop-filter backdrop-blur-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50/70 backdrop-filter backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We pride ourselves on building long-term relationships with our
              clients based on quality, reliability, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="mb-4 text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#3E64FF] rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Enhance Your Chemical Capabilities?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Contact our team today to discuss your specific requirements and
                explore how our premium chemical intermediates can elevate your
                research or production processes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/request-quote"
                  className="bg-white text-[#3E64FF] hover:bg-[#F3F8FA] px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#3E64FF] px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="py-10 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { name: "ISO 9001", icon: "🏅" },
              { name: "GMP Certified", icon: "🏅" },
              { name: "FDA Approved", icon: "🏅" },
              { name: "ISO 14001", icon: "🏅" },
            ].map((cert, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
                  {cert.icon}
                </div>
                <div className="text-gray-700 font-medium">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
