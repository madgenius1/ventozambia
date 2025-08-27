


import Link from "next/link";
import { productItems } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Vento Zambia",
  description: "Industrial Equipment Supplier in Zambia",
  keywords:
    "Vento Zambia Products, Hiforce tools Zambia, Hifi filters Zambia, Alkatronic tools Zambia, Interbolt tools Zambia ",
};

export default function ProductsPage() {
  return (
    <main className="bg-[url('/background.png')] bg-center bg-no-repeat bg-contain min-h-screen">
      {/* Header Section */}
      <div className="lg:p-8 md:p-6 p-4 bg-[#C90A10]">
        <div className="my-6 flex justify-center flex-col items-center text-center space-y-4 gap-y-2">
          <h2 className="text-[#FEFEFF] font-bold lg:text-5xl md:text-3xl sm:text-3xl text-2xl">
            Vento Zambia Products
          </h2>
          <p className="text-white lg:text-lg text-md font-medium lg:leading-relaxed leading-snug max-w-3xl">
            Vento Zambia offers a comprehensive product portfolio that meets the
            demands of industries and sectors. We supply Hiforce Tools, Hifi
            Filters, Alkitronic Tools, Sygma Instruments, Metabo Power tools,
            and many more.
          </p>
        </div>
      </div>

      {/* Body Section */}
      <div className="lg:p-8 md:p-6 p-4 max-w-screen-xl mx-auto space-y-16">
        {productItems.map((product) => (
          <section key={product.id} className="space-y-6">
            {/* Header Content */}
            {product.headerContent.map((head, i) => (
              <div
                key={i}
                className="flex flex-col items-start space-y-2 px-4 max-w-4xl"
              >
                <h2 className="font-semibold text-start text-xl lg:text-3xl md:text-2xl leading-relaxed text-neutral-950">
                  {head.name}
                </h2>
                <p className="font-medium text-start lg:text-md text-sm leading-relaxed text-neutral-800">
                  {head.statement}
                </p>
              </div>
            ))}

            {/* Body Array */}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 lg:gap-8 md:gap-6 p-4">
              {product.bodyArray.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg group px-4 h-56"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight pr-4">
                      {item.imageName}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Catalogue Link */}
            <div className="flex justify-center items-center my-6">
              {product.linkContent.map((link, index) => (
                <Link
                  key={index}
                  href={`/products/${product.id}`}
                  className="bg-neutral-800 dark:bg-neutral-200 text-neutral-50 lg:text-xl text-md font-medium lg:px-8 lg:py-6 py-2 px-4 lg:rounded-xl rounded transition-all hover:scale-95"
                >
                  {link.hrefItem}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
