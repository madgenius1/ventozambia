
import { notFound } from "next/navigation";
import { sectorList } from "@/lib/sectors";
import { sectorMetadata } from "@/lib/metadata";

interface SectorPageProps {
    params: Promise<{
        sectorId: string;
    }>;
}

export async function generateMetadata({ params }: SectorPageProps) {
    const { sectorId } = await params;
    const metadata =
        sectorMetadata[sectorId as keyof typeof sectorMetadata];

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
    const { sectorId } = await params;
    const sector = sectorList.find((s) => s.id === sectorId);

    if (!sector) return notFound();

    return (
        <main className="min-h-screen">
            {/* Header Component */}
            {sector.headerContent.map((head, i) => (
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

        </main>
    )
}