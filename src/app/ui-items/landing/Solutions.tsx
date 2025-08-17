import Image from "next/image";
import Link from "next/link";

// --- Data Structure Improvement ---
// The solutions array has been redesigned for easier mapping.
// Each item now has a title and an array of strings for its features.
const solutions = [
    {
        id: "hiforce",
        imageLink: "/hiforce.png",
        imageAlt: "Hi-Force tools",
        items: [
            "Hydraulic Cylinders",
            "Hydraulic Pumps",
            "Hydraulic Jacks and Toughlifts",
            "Torque Tools",
            "Accessories"
        ],
    },
    {
        id: "hififilter",
        imageLink: "/hififilter.png",
        imageAlt: "Hifi-Filter tools",
        items: [
            "Engine Filters",
            "Peripheral Filters",
            "Industrial Process Filters",
            "Tools and Gaskets",
            "Accessories"
        ],
    },
    {
        id: "egamaster",
        imageLink: "/egamaster.png",
        imageAlt: "Egamaster tools",
        items: [
            "Hand Tools",
            "Pipe Tools",
            "Safety Tools",
            "Tools Control Systems",
            "Accessories"
        ],
    },
    {
        id: "alkitronic",
        imageLink: "/alkitronic.png",
        imageAlt: "Alkitronic tools",
        items: [
            "Electronic Torque Tools",
            "Pneumatic Torque Tools",
            "Manual Torque Tools",
            "Accessories",
            "Calibration Services"
        ],
    },
];

export default function Solutions() {
    return (
        <main className="bg-neutral-100 min-h-screen font-sans">
            <div className="lg:p-8 md:p-6 p-4">
                <div className="max-w-screen-xl mx-auto py-6">
                    <h3 className="text-start text-neutral-800 dark:text-neutral-200 font-bold lg:text-4xl text-2xl">
                        Our Solutions
                    </h3>
                    <p className="text-base pt-4 text-neutral-700 font-medium leading-relaxed max-w-3xl">
                        At Vento Zambia, we offer a comprehensive range of industrial solutions tailored to meet the specific needs of various industries.
                        From local supply to international sourcing, we&apos;ve got you covered with our extensive product range and expert guidance.
                    </p>
                    <hr className="my-10 border-gray-400" />

                    {/* --- Dynamic Grid of Solution Cards --- */}
                    <div className="py-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4">
                        {solutions.map((solution) => (
                            <div
                                key={solution.id}
                                className="flex flex-col p-6 rounded-xl bg-white"
                            >
                                {/* The Image and its container */}
                                <div className="flex justify-center items-center mb-4">
                                    <Image
                                        src={solution.imageLink}
                                        alt={solution.imageAlt}
                                        width={150}
                                        height={100}
                                        className=" object-contain"
                                    />
                                </div>

                                {/* List of Features */}
                                <ul className="flex flex-col space-y-2 text-center text-sm font-medium text-neutral-900 list-none">
                                    {solution.items.map((item, index) => (
                                        <li key={index} className="p-2 border-b">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {/* Link to More Info */}
                                <div className="mt-6 flex justify-center">
                                    <Link
                                        href={`/products/${solution.id}`}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                    >
                                        More Information
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
