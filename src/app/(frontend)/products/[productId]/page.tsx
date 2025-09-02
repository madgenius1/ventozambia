

import { notFound } from "next/navigation";
import { productList } from "@/lib/products";
import { productMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { productId } = await params;
  const metadata =
    productMetadata[productId as keyof typeof productMetadata];

  if (!metadata) {
    return {
      title: "Product Not Found | Vento Zambia",
      description: "This product does not exist in our catalogue.",
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
}

export default async function Page({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = productList.find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <main className="min-h-screen">
      {/* Header Component */}
      {product.headerContent.map((head, i) => (
        <div key={i} className="relative lg:h-72 h-auto overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
            style={{ backgroundImage: `url(${head.url})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex h-full items-center justify-start text-start px-4 mx-auto max-w-screen-xl">
            <div className="max-w-3xl space-y-4 p-6">
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold text-white">
                {head.title}
              </h1>
              <p className="text-white md:text-md sm:text-lg font-medium leading-relaxed">
                {head.statement}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Body Component */}
      {product.bodyContent.map((body, j) => (
        <div key={j}>
          <div className="lg:p-8 md:p-6 p-4 max-w-screen-xl mx-auto mb-6">
            <div className="flex items-center justify-center py-4 my-6">
              <h2 className="text-lg lg:text-2xl font-bold leading-relaxed text-center">
                Vento Zambia&apos;s {body.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:gap-10 md:gap-8 sm:gap-6 gap-4">
              {body.productArray.map((item, k) => (
                <div key={k} className="flex flex-col space-y-2 gap-4 p-2">
                  <Image
                    src={item.imageUrl}
                    alt={item.itemName}
                    width={360}
                    height={240}
                    className="rounded-lg object-center"
                  />
                  <h3 className="text-md font-semibold text-gray-950 lg:text-xl">
                    {item.itemName}
                  </h3>
                  <p className="leading-relaxed text-md text-gray-800">
                    {item.itemDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Component */}
          <div className="bg-neutral-950 bg-no-repeat">
            <div className="lg:p-8 md:p-6 p-4 space-y-4">
              <div className="max-w-screen-xl mx-auto p-4 flex flex-col items-center justify-center my-6 gap-y-4">
                <h3 className="text-center text-neutral-100 font-bold lg:text-4xl text-2xl pb-4">
                  Contact us for a Quote on {body.title}.
                </h3>
                <Link
                  href="/quotation"
                  className="bg-neutral-200 text-neutral-950 text-md font-medium py-2 px-4 rounded transition-all hover:scale-95"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
