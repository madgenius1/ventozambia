

import Link from "next/link"

export default function CallToAction() {
    return (
        <main className=" bg-neutral-100 bg-cover bg-center bg-no-repeat">
            <div className="lg:p-8 md:p-6 p-4 ">
                <div className="max-w-screen-xl mx-auto p-4 flex flex-col items-center justify-center my-6">
                    <h3 className="text-center text-neutral-800 dark:text-neutral-200 font-bold lg:text-4xl text-2xl">
                        Get Full Access to Vento Zambia
                    </h3>
                    <p className="lg:text-xl text-sm pt-4 text-neutral-700 font-medium leading-relaxed max-w-3xl mb-4">
                        We look forward to working with you.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-neutral-800 dark:bg-neutral-200 text-neutral-50 text-md font-medium py-2 px-4 rounded transition-all hover:scale-95"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    )
}