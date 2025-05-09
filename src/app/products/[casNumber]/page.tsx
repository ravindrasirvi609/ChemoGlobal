"use client";

import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import {
  getProductByCasNumber,
  PRODUCTS,
  Product,
  makeUrlSafe,
} from "../../data/products";

export default function ProductDetail() {
  const params = useParams();
  // Debug params
  console.log("Params received:", params);

  const casNumber = Array.isArray(params.casNumber)
    ? params.casNumber[0]
    : params.casNumber || "";

  // Debug casNumber
  console.log("CAS Number extracted:", casNumber);
  console.log(
    "Product IDs available:",
    PRODUCTS.map((p) => p.casNumber)
  );

  const product = getProductByCasNumber(casNumber);
  console.log("Product found:", product ? "Yes" : "No");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
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
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              Browse All Products
            </Link>
            <p className="text-sm text-gray-600 mt-4">
              Try searching for a different product or contact us for
              assistance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">

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

                {/* Add Key Features Section */}
                {product.keyFeatures && product.keyFeatures.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3">Key Features</h3>
                    <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                      {product.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

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
                          <td className="py-2 font-medium text-right">
                            {product.purity}
                          </td>
                        </tr>
                        {product.molecularFormula && (
                          <tr className="border-b border-gray-200">
                            <td className="py-2 text-gray-600">
                              Molecular Formula
                            </td>
                            <td className="py-2 font-medium text-right">
                              {product.molecularFormula}
                            </td>
                          </tr>
                        )}
                        {product.molecularWeight && (
                          <tr className="border-b border-gray-200">
                            <td className="py-2 text-gray-600">
                              Molecular Weight
                            </td>
                            <td className="py-2 font-medium text-right">
                              {product.molecularWeight}
                            </td>
                          </tr>
                        )}
                        {product.appearance && (
                          <tr className="border-b border-gray-200">
                            <td className="py-2 text-gray-600">Appearance</td>
                            <td className="py-2 font-medium text-right">
                              {product.appearance}
                            </td>
                          </tr>
                        )}
                        {product.shelfLife && (
                          <tr className="border-b border-gray-200">
                            <td className="py-2 text-gray-600">Shelf Life</td>
                            <td className="py-2 font-medium text-right">
                              {product.shelfLife}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">
                      Packaging & Storage
                    </h3>
                    {product.packaging && product.packaging.length > 0 && (
                      <div className="mb-4">
                        <p className="text-gray-600 mb-2">
                          Available Packaging:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {product.packaging.map((pack, index) => (
                            <li key={index}>{pack}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {product.storage && (
                      <div>
                        <p className="text-gray-600 mb-2">
                          Storage Conditions:
                        </p>
                        <p className="text-gray-700">{product.storage}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PRODUCTS.filter(
                    (p: Product) =>
                      p.category === product.category && p.id !== product.id
                  )
                    .slice(0, 2)
                    .map((relatedProduct: Product) => (
                      <div
                        key={relatedProduct.id}
                        className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="font-semibold mb-2">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">
                          {relatedProduct.casNumber}
                        </p>
                        <Link
                          href={`/products/${makeUrlSafe(
                            relatedProduct.casNumber
                          )}`}
                          className="text-blue-600 hover:underline text-sm"
                        >
                          View Details →
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
