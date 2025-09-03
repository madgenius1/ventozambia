

import Link from "next/link"

const hiforceTools = [
    {
        url: "/hiforcehydrauliccylinder.png",
        name: "Hydraulic Cylinders"
    },
    {
        url: "/hiforcehydraulicjack.png",
        name: "Hydraulic Jacks"
    },
    {
        url: "/hiforcehydraulicpump.png",
        name: "Hydraulic Pumps"
    },
    {
        url: "/hiforcehydrotestpump.png",
        name: "Hydrotest Pumps"
    },
    {
        url: "/hiforcetorquesystem.png",
        name: "Torque Systems"
    },
    {
        url: "/hiforcesystemcomponent.png",
        name: "System Components"
    },
    {
        url: "/hiforcenutsplitterspreader.png",
        name: "Nut Splitter and Flange Spreader"
    },
    {
        url: "/hiforcebolttensioner.png",
        name: "Bolt Tensioner Cylinders"
    },
]

export default function MainProduct() {
    return (
        <main className="bg-neutral-50">
            <div className="lg:p-8 md:p-6 p-4">
                <div className="max-w-screen-xl mx-auto p-4">
                    <h3 className="text-start text-neutral-800 dark:text-neutral-200 font-bold lg:text-4xl text-2xl">
                        Hi-Force Hydraulic Tools
                    </h3>
                    <p className="lg:text-xl text-sm pt-4 text-neutral-700 font-medium leading-relaxed max-w-3xl">
                        We primarily supply and maintain <span className="font-semibold">Hi-Force Hydraulic Products</span> in Zambia.<br />
                    </p>
                    <hr className="my-10 border-gray-400" />
                    {/* <div className="my-10 space-y-4 flex flex-col items-center">
                        <h3 className="text-lg font-semibold text-neutral-950 text-center">
                            Hi-Force Hydraulic Products
                        </h3>
                    </div> */}
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3 my-10">
                        {hiforceTools.map((tool, index) => (
                            <div
                                key={index}
                                className="relative group rounded-lg overflow-hidden h-48"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${tool.url})` }}
                                ></div>
                                <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-60 transition-opacity duration-300"></div>
                                <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                                    <div className="flex justify-center items-center mb-2">
                                        <h3 className="text-lg font-semibold text-center leading-tight pr-4">
                                            {tool.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="py-6 flex items-center justify-center">
                        <Link
                            href="/products/hiforce"
                            className="bg-neutral-800 dark:bg-neutral-200 text-neutral-50 text-md font-medium py-4 px-6 rounded-md transition-all hover:scale-95"
                        >
                            Hi-Force Catalogue
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
