
import Image from "next/image"

const sources = [
    { src: "/hififilter.png", alt: "itemone" },
    { src: "/alkitronic.png", alt: "itemtwo" },
    { src: "/hiforce.png", alt: "itemthree" },
    { src: "/egamaster.png", alt: "itemfour" },
]

export default function Partners() {
    return (
        <main className="bg-neutral-50">
            <div className="lg:p-8 md:p-6 p-4">
                <div className="max-w-screen-xl mx-auto p-4">
                    <h3 className="text-start text-neutral-800 dark:text-neutral-200 font-bold lg:text-4xl text-2xl">
                        Partner Brands
                    </h3>
                    <p className="lg:text-xl text-sm pt-4 text-neutral-700 font-medium leading-relaxed max-w-3xl">
                        Vento Zambia collaborates with the world&apos;s leading industrial brands to bring a comprehensive portfolio of products designed to make you more competitive, productive, and profitable.
                    </p>
                    <hr className="my-10 border-gray-400" />
                    <div className="flex items-center justify-between lg:flex-row flex-col lg:gap-8 gap-4 p-4">
                        {sources.map((source, index) => (
                            <Image
                                src={source.src}
                                alt={source.alt}
                                width={200}
                                height={200}
                                className="object-contain shadow-md"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}