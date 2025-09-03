
import Link from "next/link"


export default function Sectors() {
    return (
        <main className=" bg-white bg-cover bg-center bg-no-repeat min-h-screen">
            <div className="lg:p-8 md:p-6 p-4">
                <div className="max-w-screen-xl mx-auto p-4">
                    <h3 className="text-start text-neutral-800 dark:text-neutral-200 font-bold lg:text-4xl text-2xl">
                        Sectors Served
                    </h3>
                    <p className="lg:text-xl text-sm pt-4 text-neutral-700 font-medium leading-relaxed max-w-3xl">
                        Vento Zambia offers a comprehensive list of products and services for different sectors.
                        We ensure that all your supply needs are met.
                    </p>
                    <hr className="my-10 border-gray-400" />
                    <div className="relative grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 gap-4 py-4 ">
                        <Link href="/sectors/mining" className="relative bg-[url(/mining.png)] flex flex-col justify-end lg:h-full lg:row-span-2 h-72 bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                            <div className="relative z-10 flex flex-col items-start justify-end p-6 h-full">
                                <h2 className="text-5xl font-semibold uppercase text-white pb-2">
                                    Mining
                                </h2>
                                <p className="text-sm font-medium leading-relaxed text-white max-w-lg">
                                    Explore our robust solutions and high-quality supplies tailored for the mining industry.
                                </p>
                            </div>
                        </Link>
                        <Link href="/sectors/manufacturing" className="relative bg-[url(/manufacturing.png)] flex flex-col justify-end h-64 lg:h-72 bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                            <div className="relative z-10 flex flex-col items-start justify-end p-6 h-full">
                                <h2 className="text-5xl font-semibold uppercase text-white pb-2">
                                    Manufacturing
                                </h2>
                                <p className="text-sm font-medium leading-relaxed text-white max-w-lg">
                                    Providing essential products and services to keep your manufacturing operations running smoothly and efficiently.
                                </p>
                            </div>
                        </Link>
                        <Link href="/sectors/food-processing" className="relative bg-[url(/processing.png)] flex flex-col justify-end h-72 lg:h-full bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                            <div className="relative z-10 flex flex-col items-start justify-end p-6 h-full">
                                <h2 className="text-5xl font-semibold uppercase text-white pb-2">
                                    Food Processing
                                </h2>
                                <p className="text-sm font-medium leading-relaxed text-white max-w-lg">
                                    Supplying hygienic and durable equipment, and consumables for the food processing sector.
                                </p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    )
}