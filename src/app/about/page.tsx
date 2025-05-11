import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-64 h-64 bg-gradient-to-br from-green-400/10 to-green-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/60 text-[#3E64FF] text-sm font-medium backdrop-filter backdrop-blur-sm">
            Established 2005
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">ChemoGlobal</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Your trusted partner in pharmaceutical and specialty chemicals with
            a global footprint and commitment to innovation
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

      <main className="flex-grow">
        {/* Company Story */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#3E64FF] text-sm font-medium">
                  Our Journey
                </div>
                <h2 className="text-4xl font-bold mb-8">Our Story</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Founded in 2005, ChemoGlobal began as a specialized chemical
                    supplier for pharmaceutical companies in Asia. Over the
                    years, we&apos;ve expanded our operations to serve clients
                    across the globe, establishing manufacturing facilities in
                    key markets.
                  </p>
                  <p>
                    Our growth has been driven by our unwavering commitment to
                    quality, regulatory compliance, and customer satisfaction.
                    Today, ChemoGlobal is recognized as a leading supplier of
                    pharmaceutical intermediates, specialty chemicals, and
                    active pharmaceutical ingredients.
                  </p>
                  <p>
                    With a global team of expert chemists, quality assurance
                    specialists, and business professionals, we continue to
                    innovate and expand our product portfolio to meet the
                    evolving needs of our clients.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-50 rounded-full z-0"></div>
                  <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-green-50 rounded-full z-0"></div>
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                    <Image
                      src="/images/lab-equipment.jpg"
                      alt="ChemoGlobal Labs"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <div className="text-sm font-medium opacity-90 mb-1">
                        Our History
                      </div>
                      <div className="text-xl font-bold">
                        From local supplier to global leader
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#3E64FF] text-sm font-medium">
                Our Milestones
              </div>
              <h2 className="text-4xl font-bold mb-4">Our Growth Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The evolution of ChemoGlobal from a specialized supplier to an
                industry leader
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

              {/* Timeline Items */}
              {[
                {
                  year: "2005",
                  title: "Company Founded",
                  description:
                    "ChemoGlobal started operations in Boston with a focus on providing specialized chemical intermediates",
                },
                {
                  year: "2010",
                  title: "ISO 9001 Certification",
                  description:
                    "Achieved ISO 9001 certification, marking our commitment to quality management systems",
                },
                {
                  year: "2014",
                  title: "Global Expansion",
                  description:
                    "Opened manufacturing facilities in Asia and Europe, with FDA approval for pharmaceutical production",
                },
                {
                  year: "2018",
                  title: "R&D Advancement",
                  description:
                    "Established a state-of-the-art research and development center focused on novel chemical synthesis",
                },
                {
                  year: "2022",
                  title: "Sustainability Initiative",
                  description:
                    "Launched green chemistry program to reduce environmental impact and develop sustainable processes",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 1 ? "order-1" : "order-2"
                    }`}
                  >
                    {index % 2 === 0 ? (
                      <div className="bg-white card p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="text-[#3E64FF] font-bold text-2xl mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ) : (
                      <div className="bg-white card p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="text-[#3E64FF] font-bold text-2xl mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-8 w-8 bg-gradient-to-r from-[#3E64FF] to-[#536DFE] rounded-full z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#3E64FF] text-sm font-medium">
                Our Purpose
              </div>
              <h2 className="text-4xl font-bold mb-4">Mission & Vision</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guided by our core values to deliver excellence in chemical
                solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-effect p-10 rounded-2xl card-hover">
                <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-4 rounded-full inline-block mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#3E64FF]"
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
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  To provide high-quality, competitively priced chemical
                  products that meet the stringent requirements of the
                  pharmaceutical and chemical industries, while ensuring timely
                  delivery and excellent customer service.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-[#3E64FF]">✓</span>{" "}
                    Quality-focused products
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-[#3E64FF]">✓</span> Competitive
                    pricing
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-[#3E64FF]">✓</span> Reliable
                    global delivery
                  </li>
                </ul>
              </div>

              <div className="glass-effect p-10 rounded-2xl card-hover">
                <div className="bg-gradient-to-br from-[#3E64FF]/10 to-[#536DFE]/20 p-4 rounded-full inline-block mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#3E64FF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  To be the global partner of choice for pharmaceutical and
                  specialty chemicals, recognized for our product quality,
                  technical expertise, and commitment to regulatory compliance
                  and sustainability.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-[#3E64FF]">✓</span> Global
                    industry leadership
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-[#3E64FF]">✓</span> Technical
                    excellence
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-[#3E64FF]">✓</span> Sustainable
                    practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#3E64FF] text-sm font-medium">
                Quality Assured
              </div>
              <h2 className="text-4xl font-bold mb-4">Our Certifications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rigorous quality standards and compliance with international
                regulations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "ISO 9001:2015",
                  description: "Quality Management System",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
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
                  year: "Certified since 2010",
                },
                {
                  name: "GMP Certified",
                  description: "Good Manufacturing Practices",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
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
                  year: "Certified since 2012",
                },
                {
                  name: "ISO 14001:2015",
                  description: "Environmental Management System",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
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
                  year: "Certified since 2015",
                },
                {
                  name: "FDA Approved",
                  description: "Facilities and Processes",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
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
                  ),
                  year: "Approved since 2014",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
                >
                  <div className="text-[#3E64FF] mb-6 flex justify-center">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 mb-2">{cert.description}</p>
                  <p className="text-sm text-[#3E64FF] font-medium">
                    {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#3E64FF] text-sm font-medium">
                Global Presence
              </div>
              <h2 className="text-4xl font-bold mb-4">Our Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art research and manufacturing locations across the
                globe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Research & Development Center",
                  location: "Boston, USA",
                  image: "/images/lab-equipment.jpg",
                  description:
                    "State-of-the-art labs focused on new molecule development and process optimization",
                },
                {
                  name: "Manufacturing Plant",
                  location: "Mumbai, India",
                  image: "/images/lab-equipment.jpg",
                  description:
                    "GMP-certified manufacturing facility with 25,000 sq. ft. production area",
                },
                {
                  name: "Quality Control Lab",
                  location: "Frankfurt, Germany",
                  image: "/images/lab-equipment.jpg",
                  description:
                    "Advanced analytical instruments for rigorous quality testing and assurance",
                },
              ].map((facility, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      width={400}
                      height={250}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">
                        {facility.name}
                      </h3>
                      <div className="flex items-center text-white/90">
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{facility.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <p className="text-gray-600">{facility.description}</p>
                    <button className="mt-4 text-[#3E64FF] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                      Learn more
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#3E64FF] text-sm font-medium">
                Industry Experts
              </div>
              <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals driving innovation and excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Michael Chen",
                  position: "CEO & Founder",
                  image: "/images/team/ceo.jpg",
                  bio: "Ph.D. in Organic Chemistry with 20+ years of experience in the pharmaceutical industry",
                },
                {
                  name: "Dr. Sarah Johnson",
                  position: "Chief Scientific Officer",
                  image: "/images/team/cso.jpg",
                  bio: "Former research director at a major pharmaceutical company with expertise in API development",
                },
                {
                  name: "Robert Patel",
                  position: "VP of Global Operations",
                  image: "/images/team/vp.jpg",
                  bio: "25 years of experience in chemical manufacturing and supply chain management",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative h-80 bg-blue-50">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                      Team Member Photo
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-white/90">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{member.bio}</p>
                    <div className="mt-4 flex space-x-3">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-[#3E64FF]"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-[#3E64FF]"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
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
                Ready to Partner with ChemoGlobal?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how our chemical expertise and global
                capabilities can support your business needs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#3E64FF] px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Contact Our Team
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
      </main>
    </div>
  );
}
