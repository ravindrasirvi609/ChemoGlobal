"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
};

export default function Services() {
  const services: Service[] = [
    {
      id: "custom-synthesis",
      title: "Custom Synthesis",
      description:
        "Tailored synthesis solutions for your unique chemical needs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
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
      features: [
        "Custom molecule development",
        "Scale-up capabilities from grams to kilograms",
        "Optimization of synthetic routes",
        "Full analytical characterization",
        "Competitive pricing and fast turnaround",
      ],
    },
    {
      id: "contract-manufacturing",
      title: "Contract Manufacturing",
      description:
        "Reliable manufacturing services for your established chemical products",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
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
      ),
      features: [
        "GMP and non-GMP manufacturing capabilities",
        "Batch sizes from 1kg to 1000kg",
        "High-quality production standards",
        "Comprehensive quality control",
        "Secure supply chain management",
      ],
    },
    {
      id: "analytical-services",
      title: "Analytical Services",
      description: "Comprehensive analysis and testing for chemical compounds",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
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
      ),
      features: [
        "HPLC, GC, NMR, and MS analysis",
        "Purity determination",
        "Impurity profiling",
        "Method development and validation",
        "Detailed analytical reports",
      ],
    },
    {
      id: "process-development",
      title: "Process Development",
      description:
        "Optimization of chemical processes for efficiency and scalability",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      features: [
        "Route scouting and optimization",
        "Process safety assessment",
        "Cost-effective scale-up strategies",
        "Waste reduction techniques",
        "Green chemistry implementation",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F3F8FA] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#3E64FF] mb-6">
              Our Chemical Services
            </h1>
            <p className="text-[#64748B] text-lg mb-8">
              ChemoGlobal offers a comprehensive range of chemical services
              tailored to meet the needs of pharmaceutical, agrochemical, and
              research industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#F3F8FA] rounded-lg p-8 transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start mb-6">
                  <div className="text-[#536DFE] mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#3E64FF] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#64748B]">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-4">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#64748B]"
                    >
                      <svg
                        className="h-5 w-5 text-[#7ED957] mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#3E64FF] mb-4">
              Our Service Process
            </h2>
            <p className="text-[#64748B]">
              We follow a structured approach to deliver high-quality chemical
              services that meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="w-12 h-12 bg-[#536DFE] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#3E64FF] mb-2">
                Consultation
              </h3>
              <p className="text-[#64748B]">
                Initial discussion to understand your requirements and project
                scope
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="w-12 h-12 bg-[#536DFE] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#3E64FF] mb-2">
                Proposal
              </h3>
              <p className="text-[#64748B]">
                Detailed proposal including timeline, specifications, and
                pricing
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="w-12 h-12 bg-[#536DFE] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#3E64FF] mb-2">
                Execution
              </h3>
              <p className="text-[#64748B]">
                Implementation of the project with regular progress updates
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="w-12 h-12 bg-[#536DFE] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#3E64FF] mb-2">
                Delivery
              </h3>
              <p className="text-[#64748B]">
                Final product delivery with complete documentation and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3E64FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Discuss Your Chemical Service Needs?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact our expert team today to discuss how ChemoGlobal can support
            your chemical requirements with our comprehensive service offerings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/request-quote"
              className="bg-white hover:bg-gray-100 text-[#3E64FF] px-6 py-3 rounded-md font-medium transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#3E64FF] px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
