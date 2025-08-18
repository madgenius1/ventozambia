
import Image from "next/image"


export default function Brands() {
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
                    {/* Make this component more dynamic and responsive */}
                    <div className="relative flex flex-col lg:gap-y-6 gap-4 py-4 ">
                        <div className="relative bg-[url(/mining.png)] flex flex-col justify-end lg:h-80 h-72 bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-4 h-full">
                                <div className="flex items-start justify-start flex-1 p-4">
                                    <h2 className="text-4xl font-semibold uppercase text-white">
                                        Mining
                                    </h2>
                                </div>
                                {/* <div className="flex items-end justify-end px-4">
                                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-center justify-center ">
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="relative bg-[url(/manufacturing.png)] flex flex-col justify-end lg:h-80 h-72 bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-4 h-full">
                                <div className="flex items-start justify-start flex-1 p-4">
                                    <h2 className="text-4xl font-semibold uppercase text-white">
                                        Manufacturing
                                    </h2>
                                </div>
                                {/* <div className="flex items-end justify-end px-4">
                                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-center justify-center ">
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="relative bg-[url(/processing.png)] flex flex-col justify-end lg:h-80 h-72 bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-4 h-full">
                                <div className="flex items-start justify-start flex-1 p-4">
                                    <h2 className="text-4xl font-semibold uppercase text-white">
                                        Food Processing
                                    </h2>
                                </div>
                                {/* <div className="flex items-end justify-end px-4">
                                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-center justify-center ">
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                        <div className="h-48 w-48 rounded-md shadow-md bg-white"></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}