import Link from "next/link";
import { Product, makeUrlSafe, defaultProductImage } from "../data/products";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onAddToQuote?: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToQuote,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col h-full bg-white/60 backdrop-filter backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Badge for new products */}
      {product.isNew && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-400 to-green-500 text-white shadow-sm">
            NEW
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative bg-gradient-to-br from-blue-50/30 to-blue-100/30 overflow-hidden h-56 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-blue-500/5 backdrop-filter backdrop-blur-[1px] group-hover:backdrop-blur-[2px] transition-all duration-300"></div>

        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <Image
            src={product.image || defaultProductImage}
            alt={product.name}
            className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-110"
            width={200}
            height={200}
            priority={product.isNew}
          />
        </div>

        {/* Image overlay with product info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Purity badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/90 text-white shadow-sm">
            {product.purity}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-grow flex flex-col p-5">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-1 text-gray-800 group-hover:text-[#3E64FF] transition-colors duration-300">
            {product.name}
          </h3>

          <p className="text-gray-500 text-sm mb-3 flex items-center">
            <span className="inline-block mr-1.5 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            {product.casNumber}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.tags &&
              product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full border border-blue-100"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            href={`/products/${makeUrlSafe(product.casNumber)}`}
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:from-[#3E64FF] hover:to-[#3E64FF] transform hover:-translate-y-0.5"
          >
            <span>View Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1.5"
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
          </Link>

          {onAddToQuote && (
            <button
              onClick={() => onAddToQuote(product)}
              className="relative group/btn ml-2 text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-all"
              title="Add to Quote"
            >
              <span className="sr-only">Add to Quote</span>
              <span className="absolute -top-1 -right-1 -translate-y-full opacity-0 transform group-hover/btn:opacity-100 bg-[#3E64FF] text-white text-xs py-0.5 px-2 rounded whitespace-nowrap transition-all duration-200">
                Add to Quote
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
