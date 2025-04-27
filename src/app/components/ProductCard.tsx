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
    <div className="bg-white/40 backdrop-filter backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="relative bg-gradient-to-br from-blue-50/50 to-blue-100/50 backdrop-filter backdrop-blur-sm h-48 flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-blue-500/10 backdrop-filter backdrop-blur-[2px]"></div>
        <Image
          src={product.image || defaultProductImage}
          alt={product.name}
          className="max-h-full max-w-full object-contain z-10 transition-transform duration-300 group-hover:scale-105"
          width={100}
          height={100}
        />
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-green-500/80 backdrop-filter backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
            NEW
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-3">{product.casNumber}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags &&
            product.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100/50 backdrop-filter backdrop-blur-sm text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/products/${makeUrlSafe(product.casNumber)}`}
            className="bg-blue-600/90 backdrop-filter backdrop-blur-sm hover:bg-blue-700/90 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
          >
            View Details
          </Link>
          {onAddToQuote && (
            <button
              onClick={() => onAddToQuote(product)}
              className="ml-2 text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50/60 hover:backdrop-blur-sm transition-all"
              title="Add to Quote"
            >
              <span className="sr-only">Add to Quote</span>
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
