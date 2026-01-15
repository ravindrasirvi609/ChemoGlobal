"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-[#F3F8FA] border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Company Information */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-12 mr-3">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3E64FF] to-[#7ED957] rounded-lg transform -rotate-6"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                  CG
                </div>
              </div>
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-[#3E64FF] to-[#7ED957] text-transparent bg-clip-text">
                  ChemoGlobal
                </span>
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Pioneering chemical solutions with a commitment to quality,
              innovation, and sustainability. Serving the pharmaceutical,
              agrochemical and research industries globally since 2005.
            </p>

            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                <SocialLink
                  href="https://twitter.com/chemoglobal"
                  icon="twitter"
                />
                <SocialLink
                  href="https://linkedin.com/company/chemoglobal"
                  icon="linkedin"
                />
                <SocialLink
                  href="https://facebook.com/chemoglobal"
                  icon="facebook"
                />
                <SocialLink
                  href="https://instagram.com/chemoglobal"
                  icon="instagram"
                />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold text-[#3E64FF] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/products">Products</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold text-[#3E64FF] mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/services/custom-synthesis">
                Custom Synthesis
              </FooterLink>
              <FooterLink href="/services/process-development">
                Process Development
              </FooterLink>
              <FooterLink href="/services/analytical-services">
                Analytical Services
              </FooterLink>
              <FooterLink href="/services/bulk-manufacturing">
                Bulk Manufacturing
              </FooterLink>
              <FooterLink href="/services/consultation">
                Consultation
              </FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold text-[#3E64FF] mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/resources/technical-documents">
                Technical Documents
              </FooterLink>
              <FooterLink href="/resources/safety-data-sheets">
                Safety Data Sheets
              </FooterLink>
              <FooterLink href="/resources/case-studies">
                Case Studies
              </FooterLink>
              <FooterLink href="/resources/faqs">FAQs</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold text-[#3E64FF] mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <div className="text-[#3E64FF] mt-0.5 mr-2">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p>17, mayank Nagar naya gaon road</p>
                  <p>pali rajasthan 306401, india</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-[#3E64FF] mr-2">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:admin@operantworld.com"
                  className="hover:text-[#3E64FF] transition-colors"
                >
                  admin@operantworld.com
                </a>
              </div>

              <div className="flex items-center">
                <div className="text-[#3E64FF] mr-2">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+918107199052"
                  className="hover:text-[#3E64FF] transition-colors"
                >
                  +91 8107199052
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Middle Divider with Certifications */}
        <div className="py-8 border-t border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full p-3 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#3E64FF]"
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
              <span className="text-sm font-semibold text-gray-800">
                ISO 9001:2015
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full p-3 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#3E64FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-800">
                ISO 14001:2015
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full p-3 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#3E64FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-800">
                GMP Certified
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full p-3 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#3E64FF]"
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
              <span className="text-sm font-semibold text-gray-800">
                FDA Approved
              </span>
            </div>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Stay updated on new products, industry insights and special
                offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-[#3E64FF] focus:border-transparent outline-none"
                />
                <button className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white px-4 py-2 rounded-r-lg hover:shadow-md transition-all">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="md:text-right text-sm text-gray-600">
              <p className="mb-2">
                &copy; 2025 ChemoGlobal. All rights reserved.
              </p>
              <div className="flex md:justify-end space-x-4">
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#3E64FF] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="hover:text-[#3E64FF] transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookie-policy"
                  className="hover:text-[#3E64FF] transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer Link Component
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-sm text-gray-600 hover:text-[#3E64FF] transition-colors"
    >
      {children}
    </Link>
  </li>
);

// Social Media Link Component
const SocialLink = ({ href, icon }: { href: string; icon: string }) => {
  const icons = {
    twitter: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    linkedin: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    facebook: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    instagram: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-[#3E64FF] bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
      aria-label={`Follow us on ${icon}`}
    >
      {icons[icon as keyof typeof icons]}
    </a>
  );
};

export default Footer;
