
import { servicesList } from "@/lib/services"
import Link from "next/link"

export default function Services() {
    return (
        <main className="bg-white min-h-screen font-sans">
            <div className="lg:p-8 md:p-6 p-4">
                <div className="max-w-screen-xl mx-auto p-4">
                    <h3 className="text-start text-neutral-800 dark:text-neutral-200 font-bold lg:text-4xl text-2xl">
                        Core Services
                    </h3>
                    <p className="lg:text-xl text-sm pt-4 text-neutral-700 font-medium leading-relaxed max-w-3xl">
                        We don&apos;t just supply products—we keep industries and businesses moving. <br />
                        With decades of expertise, a vast product range, and a commitment to quality, we provide reliable services that keep your machinery running smoothly and efficiently.
                    </p>
                    <hr className="my-10 border-gray-400" />
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {servicesList.map((area, index) => (
                            <Link
                                href={`/services/${area.serviceId}`}
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg group px-4 h-64"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${area.image})` }}
                                ></div>

                                <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-60 transition-opacity duration-300"></div>

                                <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl sm:text-2xl font-semibold leading-tight pr-4">
                                            {area.title}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}