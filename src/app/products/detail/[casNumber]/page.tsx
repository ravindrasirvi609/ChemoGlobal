"use client";

import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

// Mock product data (same as in the products page)
const PRODUCTS = [
  // Pharmaceutical Intermediates
  {
    id: 1,
    name: "Methyl 4-aminobenzoate",
    casNumber: "619-45-4",
    category: "Pharmaceutical Intermediates",
    description: "High-purity intermediate used in pharmaceutical synthesis",
    purity: "99.5% min",
    molecularFormula: "C8H9NO2",
    molecularWeight: "151.16 g/mol",
    appearance: "White or slightly yellow crystalline powder",
    applications: ["API synthesis", "Research & Development"],
    packaging: ["25kg fiber drums", "5kg aluminum foil bags"],
    storage: "Store in a cool, dry place away from direct sunlight",
    shelfLife: "24 months when properly stored",
    regulatoryStatus: "For research and manufacturing use only",
    technicalDetails:
      "Melting Point: 113-116°C\nBoiling Point: 256-257°C\nSolubility: Soluble in ethanol, acetone, and chloroform",
  },
  {
    id: 13,
    name: "2-Amino-5-chloropyridine",
    casNumber: "1072-98-6",
    category: "Pharmaceutical Intermediates",
    description:
      "High-purity pharmaceutical intermediate valued in organic synthesis and drug discovery",
    purity: "99% min",
    molecularFormula: "C5H5ClN2",
    molecularWeight: "128.56 g/mol",
    appearance: "Beige to beige-brown crystalline powder",
    applications: [
      "Synthesis of sedative APIs like zopiclone",
      "Drug discovery",
      "CNS drug candidates",
    ],
    packaging: ["25kg fiber drums", "5kg aluminum foil bags", "1kg bottles"],
    storage: "Store in a cool, dry place at 2-8°C",
    shelfLife: "24 months when properly stored",
    regulatoryStatus: "For research and manufacturing use only",
    technicalDetails:
      "Melting Point: 135-138°C\nBoiling Point: 127-128°C/11 mmHg\nDensity: 1.2417 (rough estimate)\nSolubility: 1.0g/l in water at 20°C\npKa: 4.67±0.13 (Predicted)\nFlash Point: 160°C",
  },
  // Specialty Chemicals
  {
    id: 5,
    name: "4-Methylbenzaldehyde",
    casNumber: "104-87-0",
    category: "Specialty Chemicals",
    description: "Used in fragrance and flavor compositions",
    purity: "99% min",
    molecularFormula: "C8H8O",
    molecularWeight: "120.15 g/mol",
    appearance: "Clear to pale yellow liquid",
    applications: ["Fragrances", "Flavor compounds", "Chemical synthesis"],
    packaging: ["25kg drums", "200kg drums"],
    storage: "Store in a cool, dry place away from direct sunlight",
    shelfLife: "24 months when properly stored",
    regulatoryStatus: "For industrial use only",
    technicalDetails:
      "Density: 1.019 g/cm³\nBoiling Point: 204°C\nFlash Point: 85°C\nRefractive Index: 1.545-1.547",
  },
  // APIs
  {
    id: 9,
    name: "Paracetamol",
    casNumber: "103-90-2",
    category: "APIs",
    description: "Active pharmaceutical ingredient with analgesic properties",
    purity: "99.5% min",
    molecularFormula: "C8H9NO2",
    molecularWeight: "151.16 g/mol",
    appearance: "White crystalline powder",
    applications: ["Pain management", "Fever reduction"],
    packaging: ["25kg fiber drums with double polyethylene liner"],
    storage: "Store in a cool, dry place away from direct sunlight",
    shelfLife: "36 months when properly stored",
    regulatoryStatus: "GMP certified, DMF available",
    technicalDetails:
      "Melting Point: 168-172°C\nLoss on Drying: ≤0.5%\nHeavy Metals: ≤10 ppm\nResidual Solvents: Meets ICH Guidelines",
  },
];

// This function would typically fetch data from a database
const getProductByCasNumber = (casNumber: string) => {
  return PRODUCTS.find((product) => product.casNumber === casNumber) || null;
};

export default function ProductDetail() {
  const params = useParams();
  const casNumber = Array.isArray(params.casNumber)
    ? params.casNumber[0]
    : params.casNumber || "";
  const product = getProductByCasNumber(casNumber);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-red-700 mb-4">
              Product Not Found
            </h1>
            <p className="text-gray-700 mb-6">
              The product with CAS number {casNumber} could not be found in our
              database.
            </p>
            <Link
              href="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Product Header */}
        <div className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-blue-100 mb-4">
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
              <span>›</span>
              <Link
                href={`/products?category=${encodeURIComponent(
                  product.category
                )}`}
                className="hover:text-white"
              >
                {product.category}
              </Link>
              <span>›</span>
              <span className="text-white">{product.name}</span>
            </div>
            <div className="md:flex justify-between items-end">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {product.name}
                </h1>
                <p className="text-xl mb-1">CAS: {product.casNumber}</p>
                <p className="text-blue-100">{product.molecularFormula}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href={`/request-quote?product=${encodeURIComponent(
                    product.name
                  )}`}
                  className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Product Image and Actions */}
            <div>
              <div className="bg-blue-50 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-8xl">
                  {product.category === "Pharmaceutical Intermediates" && "🧪"}
                  {product.category === "Specialty Chemicals" && "⚗️"}
                  {product.category === "APIs" && "💊"}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Documents</h2>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Certificate of Analysis would be downloaded here");
                    }}
                  >
                    <div className="flex items-center">
                      <span className="text-red-500 mr-3">📄</span>
                      <span>Certificate of Analysis (COA)</span>
                    </div>
                    <span className="text-blue-600">↓</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Safety Data Sheet would be downloaded here");
                    }}
                  >
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-3">📄</span>
                      <span>Safety Data Sheet (SDS)</span>
                    </div>
                    <span className="text-blue-600">↓</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Product Brochure would be downloaded here");
                    }}
                  >
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-3">📄</span>
                      <span>Product Brochure</span>
                    </div>
                    <span className="text-blue-600">↓</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Need Assistance?</h2>
                <p className="text-gray-600 mb-4">
                  Our technical team is available to answer any questions about
                  this product.
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:info@chemoglobal.com"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <span className="mr-2">📧</span> Email Technical Support
                  </a>
                  <a
                    href="https://wa.me/15551234567"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <span className="mr-2">💬</span> WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Product Overview</h2>
                <p className="text-gray-700 mb-6">{product.description}</p>

                <h3 className="font-bold text-lg mb-3">Key Applications</h3>
                <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-700">
                  {product.applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3">Specifications</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">Purity</td>
                          <td className="py-2 font-medium">{product.purity}</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">CAS Number</td>
                          <td className="py-2 font-medium">
                            {product.casNumber}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">
                            Molecular Formula
                          </td>
                          <td className="py-2 font-medium">
                            {product.molecularFormula}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">
                            Molecular Weight
                          </td>
                          <td className="py-2 font-medium">
                            {product.molecularWeight}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">Appearance</td>
                          <td className="py-2 font-medium">
                            {product.appearance}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3">
                      Packaging & Storage
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="text-gray-600 mb-1">
                          Available Packaging:
                        </div>
                        <ul className="list-disc pl-5 space-y-1">
                          {product.packaging.map((pkg, index) => (
                            <li key={index}>{pkg}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">
                          Storage Conditions:
                        </div>
                        <p>{product.storage}</p>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Shelf Life:</div>
                        <p>{product.shelfLife}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">
                  Technical Information
                </h2>
                <div className="whitespace-pre-line text-gray-700">
                  {product.technicalDetails}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">
                  Regulatory Information
                </h2>
                <p className="text-gray-700 mb-4">{product.regulatoryStatus}</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="text-yellow-400">⚠️</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        For complete regulatory information, please refer to the
                        Safety Data Sheet (SDS).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <Link
                  href="/products"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span>← Back to Products</span>
                </Link>
                <Link
                  href={`/request-quote?product=${encodeURIComponent(
                    product.name
                  )}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter(
              (p) =>
                p.category === product.category &&
                p.casNumber !== product.casNumber
            )
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-50 h-36 flex items-center justify-center">
                    <div className="text-5xl">
                      {relatedProduct.category ===
                        "Pharmaceutical Intermediates" && "🧪"}
                      {relatedProduct.category === "Specialty Chemicals" &&
                        "⚗️"}
                      {relatedProduct.category === "APIs" && "💊"}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-md mb-1">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-500 text-xs mb-2">
                      CAS: {relatedProduct.casNumber}
                    </p>
                    <Link
                      href={`/products/detail/${relatedProduct.casNumber}`}
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

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
