"use client";

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
                  id="serviceGrid"
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
              <rect width="100%" height="100%" fill="url(#serviceGrid)" />
            </svg>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/60 text-[#3E64FF] text-sm font-medium backdrop-filter backdrop-blur-sm">
            Professional Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-transparent bg-clip-text">
              Services
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            ChemoGlobal offers a comprehensive range of chemical services
            tailored to meet the needs of pharmaceutical, agrochemical, and
            research industries worldwide.
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#3E64FF] text-sm font-medium">
              What We Offer
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Specialized Chemical Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our range of services designed to meet your specific chemical
              requirements with precision and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white/60 backdrop-filter backdrop-blur-lg border border-white/40 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="flex flex-col md:flex-row md:items-start mb-6">
                  <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-4 rounded-full mb-4 md:mb-0 md:mr-4 text-[#3E64FF] self-center md:self-start">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-[#3E64FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50/80 to-blue-50/50 rounded-xl p-5 mt-4">
                  <h4 className="font-medium text-gray-800 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600"
                      >
                        <span className="bg-[#7ED957]/20 p-1 rounded-full mr-3 mt-0.5">
                          <svg
                            className="h-4 w-4 text-[#7ED957]"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-right">
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center text-[#3E64FF] font-medium hover:text-[#536DFE] group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span>Learn more</span>
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

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#3E64FF] text-sm font-medium">
              Our Approach
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Service Process
            </h2>
            <p className="text-gray-600">
              We follow a structured approach to deliver high-quality chemical
              services that meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Consultation",
                description:
                  "Initial discussion to understand your requirements and project scope",
              },
              {
                step: 2,
                title: "Proposal",
                description:
                  "Detailed proposal including timeline, specifications, and pricing",
              },
              {
                step: 3,
                title: "Execution",
                description:
                  "Implementation of the project with regular progress updates",
              },
              {
                step: 4,
                title: "Delivery",
                description:
                  "Final quality check, documentation, and timely product delivery",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-filter backdrop-blur-lg rounded-2xl p-8 text-center shadow-lg border border-white/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="hidden md:block w-full max-w-2xl mx-auto mt-8 h-1 bg-gradient-to-r from-white via-blue-200 to-white rounded-full"></div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#3E64FF] text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Expertise & Capabilities
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-2 rounded-full mr-4 text-[#3E64FF]">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      All our services adhere to strict quality control
                      procedures and regulatory compliance standards, ensuring
                      reliable and consistent results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-2 rounded-full mr-4 text-[#3E64FF]">
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
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Technical Expertise
                    </h3>
                    <p className="text-gray-600">
                      Our team consists of highly qualified chemists and
                      engineers with extensive experience in various chemical
                      disciplines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-2 rounded-full mr-4 text-[#3E64FF]">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Cutting-Edge Technology
                    </h3>
                    <p className="text-gray-600">
                      We utilize state-of-the-art equipment and innovative
                      methodologies to deliver superior results for every
                      project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/40">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Industry Applications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    industry: "Pharmaceutical",
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
                  },
                  {
                    industry: "Agrochemical",
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
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    industry: "Materials Science",
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
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    ),
                  },
                  {
                    industry: "Research Institutions",
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
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 backdrop-filter backdrop-blur-sm border border-white/60 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md"
                  >
                    <div className="text-[#3E64FF] mb-3">{item.icon}</div>
                    <p className="font-medium text-gray-800">{item.industry}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl">
                <p className="text-gray-700 text-sm mb-3">
                  Our services cater to diverse industries with specific
                  chemical requirements and regulatory needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#3E64FF] font-medium hover:text-[#536DFE] transition-colors"
                >
                  <span>Discuss your industry requirements</span>
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your chemical service needs and
              discover how ChemoGlobal can help you achieve your project goals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#3E64FF] px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/request-quote"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
