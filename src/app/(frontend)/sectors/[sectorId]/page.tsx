import { notFound } from "next/navigation";
import Link from "next/link";
import { sectorList } from "@/lib/sectors";
import { sectorMetadata } from "@/lib/metadata";

interface SectorPageProps {
    params: Promise<{
        sectorId: string;
    }>;
}

export async function generateMetadata({ params }: SectorPageProps) {
    const { sectorId } = await params; // ✅ await params
    const metadata = sectorMetadata[sectorId as keyof typeof sectorMetadata];

    if (!metadata) {
        return {
            title: "Sector Not Found | Vento Zambia",
            description: "This sector does not exist in our catalogue.",
        };
    }

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
    };
}

export default async function Page({ params }: SectorPageProps) {
    const { sectorId } = await params; // ✅ await params
    const sector = sectorList.find((s) => s.id === sectorId);

    if (!sector) return notFound();

    return (
        <main className="min-h-screen">
            {/* Hero / Header */}
            {sector.headerContent.map((head, i) => (
                <div key={i} className="relative lg:h-72 h-auto overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                        style={{ backgroundImage: `url(${head.url})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative z-10 flex h-full items-center justify-start text-start px-4 mx-auto max-w-screen-xl">
                        <div className="max-w-3xl space-y-4 p-6">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                                {head.title}
                            </h1>
                            <p className="text-white md:text-md sm:text-lg font-medium leading-relaxed">
                                {head.statement}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Body Content - Responsive Grid */}
            <section className="px-4 py-12 mx-auto max-w-screen-xl">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">
                    Brands & Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sector.bodyContent?.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="h-24 object-contain mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            {sector.cta && (
                <section className="bg-gray-100 py-12">
                    <div className="mx-auto max-w-screen-xl px-4 text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Ready to explore more?
                        </h3>
                        <Link
                            href={sector.cta.link}
                            className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#000EEE] transition"
                        >
                            {sector.cta.text}
                        </Link>
                    </div>
                </section>
            )}
        </main>
    );
}
