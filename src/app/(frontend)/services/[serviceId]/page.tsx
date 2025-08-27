
import Image from "next/image";

import { notFound } from "next/navigation";
import { serviceMetadata } from "@/lib/metadata";
import Link from "next/link";
import { servicesItems } from "@/lib/services";

interface ServicePageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const metadata =
    serviceMetadata[serviceId as keyof typeof serviceMetadata];

  if (!metadata) {
    return {
      title: "Service Not Found | Vento Zambia",
      description: "This service does not exist in our catalogue.",
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
}

export default async function Page({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const service = servicesItems.find((p) => p.id === serviceId);

  if (!service) return notFound();

  return (
    <main className="min-h-screen">
      {/* Service Header */}
      {service.headerContent.map((head, i) => (
        <div key={i} className="relative lg:h-72 h-auto overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
            style={{ backgroundImage: `url(${head.url})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex h-full items-center justify-start text-start px-4">
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

      {/* Service Body */}
      {service.bodyContent.map((body, j) => (
        <div key={j}>
          <div className="bg-gray-100">
            <div className="max-w-screen-xl mx-auto lg:p-8 md:p-6 p-4 ">
              <div>
                {body.serviceArray.map((item, k) =>
                  <div key={k} className="flex lg:flex-row md:flex-row lg:odd:flex-row-reverse space-y-6 my-6 lg:gap-8 md:gap-6 sm:gap-6 gap-4 flex-col justify-between p-4 border-b border-neutral-600">
                    <div className="flex items-center lg:justify-center justify-start">
                      <Image
                        src={item.imageUrl}
                        alt={item.itemName}
                        width={420}
                        height={360}
                        className="rounded-lg object-center"
                      />
                    </div>
                    <div className="max-w-2xl flex flex-col gap-4">
                      <h3 className="text-lg lg:text-xl font-semibold">{item.itemName}</h3>
                      <p className="text-md lg:text-lg leading-relaxed">
                        {item.itemDescription}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

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
