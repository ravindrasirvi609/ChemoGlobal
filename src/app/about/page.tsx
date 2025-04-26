import Navbar from "../components/Navbar";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About ChemoGlobal
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in pharmaceutical and specialty chemicals with
            a global footprint
          </p>
        </div>
      </div>

      <main className="flex-grow">
        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2005, ChemoGlobal began as a specialized chemical
                  supplier for pharmaceutical companies in Asia. Over the years,
                  we've expanded our operations to serve clients across the
                  globe, establishing manufacturing facilities in key markets.
                </p>
                <p className="text-gray-700 mb-4">
                  Our growth has been driven by our unwavering commitment to
                  quality, regulatory compliance, and customer satisfaction.
                  Today, ChemoGlobal is recognized as a leading supplier of
                  pharmaceutical intermediates, specialty chemicals, and active
                  pharmaceutical ingredients.
                </p>
                <p className="text-gray-700">
                  With a global team of expert chemists, quality assurance
                  specialists, and business professionals, we continue to
                  innovate and expand our product portfolio to meet the evolving
                  needs of our clients.
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">
                  Company History Timeline
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mission & Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide high-quality, competitively priced chemical
                  products that meet the stringent requirements of the
                  pharmaceutical and chemical industries, while ensuring timely
                  delivery and excellent customer service.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                  👁️
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the global partner of choice for pharmaceutical and
                  specialty chemicals, recognized for our product quality,
                  technical expertise, and commitment to regulatory compliance
                  and sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "ISO 9001:2015",
                  description: "Quality Management System",
                  icon: "🏅",
                  year: "Certified since 2010",
                },
                {
                  name: "GMP Certified",
                  description: "Good Manufacturing Practices",
                  icon: "🏅",
                  year: "Certified since 2012",
                },
                {
                  name: "ISO 14001:2015",
                  description: "Environmental Management System",
                  icon: "🏅",
                  year: "Certified since 2015",
                },
                {
                  name: "FDA Approved",
                  description: "Facilities and Processes",
                  icon: "🏅",
                  year: "Approved since 2014",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-4xl mb-4 text-blue-600">{cert.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 mb-2">{cert.description}</p>
                  <p className="text-sm text-gray-500">{cert.year}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/certifications"
                className="text-blue-600 font-medium hover:underline"
              >
                View All Certifications →
              </Link>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Research & Development Center",
                  location: "Boston, USA",
                  description:
                    "State-of-the-art labs focused on new molecule development and process optimization",
                },
                {
                  name: "Manufacturing Plant",
                  location: "Mumbai, India",
                  description:
                    "GMP-certified manufacturing facility with 25,000 sq. ft. production area",
                },
                {
                  name: "Quality Control Lab",
                  location: "Frankfurt, Germany",
                  description:
                    "Advanced analytical instruments for rigorous quality testing and assurance",
                },
              ].map((facility, index) => (
                <div key={index} className="mb-8">
                  <div className="bg-gray-300 h-56 rounded-t-lg flex items-center justify-center">
                    <span className="text-gray-600">Facility Image</span>
                  </div>
                  <div className="bg-white p-6 rounded-b-lg shadow-md">
                    <h3 className="text-xl font-bold mb-1">{facility.name}</h3>
                    <p className="text-blue-600 text-sm mb-3">
                      {facility.location}
                    </p>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our experienced management team brings decades of expertise in the
              chemical and pharmaceutical industries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Michael Chen",
                  position: "CEO & Founder",
                  bio: "Ph.D. in Organic Chemistry with 20+ years of experience in the pharmaceutical industry",
                },
                {
                  name: "Dr. Sarah Johnson",
                  position: "Chief Scientific Officer",
                  bio: "Former research director at a major pharmaceutical company with expertise in API development",
                },
                {
                  name: "Robert Patel",
                  position: "VP of Global Operations",
                  bio: "25 years of experience in chemical manufacturing and supply chain management",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-gray-200 h-64 flex items-center justify-center">
                    <span className="text-gray-500">Team Member Photo</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Partner with ChemoGlobal?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our chemical expertise and global capabilities
              can support your business needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
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
