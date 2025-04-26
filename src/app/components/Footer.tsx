"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F3F8FA] border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-[#3E64FF] mb-4">
              Chemo<span className="text-[#7ED957]">Global</span>
            </h3>
            <p className="text-[#64748B] mb-4">
              Providing high-quality chemicals for pharmaceutical and research
              applications worldwide since 2005.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/chemoglobal"
                className="text-[#64748B] hover:text-[#3E64FF]"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/chemoglobal"
                className="text-[#64748B] hover:text-[#3E64FF]"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[#3E64FF] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#64748B] hover:text-[#3E64FF] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[#64748B] hover:text-[#3E64FF] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#64748B] hover:text-[#3E64FF] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#64748B] hover:text-[#3E64FF] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#64748B] hover:text-[#3E64FF] transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[#3E64FF] mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/custom-synthesis"
                  className="text-[#64748B] hover:text-[#3E64FF] transition-colors"
                >
                  Custom Synthesis
                </Link>
              </li>
              <li>
                <Link
                  href="/services/process-development"
                  className="text-[#64748B] hover:text-[#3E64FF] transition-colors"
                >
                  Process Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytical-services"
                  className="text-[#64748B] hover:text-[#3E64FF] transition-colors"
                >
                  Analytical Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bulk-manufacturing"
                  className="text-[#64748B] hover:text-[#3E64FF] transition-colors"
                >
                  Bulk Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consultation"
                  className="text-[#64748B] hover:text-[#3E64FF] transition-colors"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[#3E64FF] mb-4">
              Contact Us
            </h3>
            <address className="not-italic">
              <p className="text-[#64748B] mb-2">123 Chemical Lane</p>
              <p className="text-[#64748B] mb-2">Cambridge, MA 02142</p>
              <p className="text-[#64748B] mb-2">United States</p>
              <p className="text-[#64748B] mb-2">
                <a
                  href="mailto:info@chemoglobal.com"
                  className="hover:text-[#3E64FF] transition-colors"
                >
                  info@chemoglobal.com
                </a>
              </p>
              <p className="text-[#64748B]">
                <a
                  href="tel:+1-555-123-4567"
                  className="hover:text-[#3E64FF] transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <div className="flex items-center bg-white p-2 rounded-md">
              <span className="text-sm text-[#64748B] font-medium">
                ISO 9001:2015
              </span>
            </div>
            <div className="flex items-center bg-white p-2 rounded-md">
              <span className="text-sm text-[#64748B] font-medium">
                ISO 14001:2015
              </span>
            </div>
            <div className="flex items-center bg-white p-2 rounded-md">
              <span className="text-sm text-[#64748B] font-medium">
                GMP Certified
              </span>
            </div>
            <div className="flex items-center bg-white p-2 rounded-md">
              <span className="text-sm text-[#64748B] font-medium">
                FDA Approved
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-[#64748B] text-sm">
            &copy; {new Date().getFullYear()} ChemoGlobal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
