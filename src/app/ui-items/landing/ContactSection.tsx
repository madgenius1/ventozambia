import Image from "next/image"
import Link from "next/link"

const ContactInfoBlock = ({ title, children }) => (
    <div className="flex flex-col gap-2 pb-6 border-b border-neutral-600">
        <h3 className="text-lg font-semibold text-blue-700">
            {title}
        </h3>
        <div className="flex flex-col text-sm font-medium text-neutral-900 lg:text-base">
            {children}
        </div>
    </div>
)

export default function ContactSection() {
    return (
        <main className="bg-white">
            <div className="p-4 md:p-6 lg:p-8">
                <div className="max-w-screen-xl mx-auto p-4">
                    {/* Header Section */}
                    <div className="text-start">
                        <h2 className="text-2xl font-bold text-neutral-800 lg:text-4xl">
                            Contact Us
                        </h2>
                        <p className="lg:text-xl text-sm pt-4 text-neutral-700 font-medium leading-relaxed max-w-3xl">
                            We&apos;d love to hear from you and are ready to work with you. <br />
                            Reach out to us to get started.
                        </p>
                    </div>

                    <hr className="my-10 border-gray-400" />

                    {/* Contact Details and Image Section */}
                    <div className="my-10 flex flex-col items-center gap-4 lg:flex-row">
                        {/* Contact Details Grid */}
                        <div className="w-full md:w-1/2 lg:w-2/3">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <ContactInfoBlock title="Office Hours">
                                    <span>Mon - Fri: 8 AM to 5 PM</span>
                                    <span>Sat: 9 AM to 3 PM</span>
                                </ContactInfoBlock>

                                <ContactInfoBlock title="Call Us">
                                    <Link
                                        href="tel:+260968539232"
                                        className="text-neutral-900 transition-colors hover:text-blue-600"
                                        aria-label="Call +260 968 539 232"
                                    >
                                        +260 968 539 232
                                    </Link>
                                    <Link
                                        href="tel:+260968539232"
                                        className="text-neutral-900 transition-colors hover:text-blue-600"
                                        aria-label="Call +260 968 539 232"
                                    >
                                        +260 968 539 232
                                    </Link>
                                </ContactInfoBlock>

                                <ContactInfoBlock title="Email Us">
                                    <Link
                                        href="mailto:info@ventozambia.com"
                                        className="text-neutral-900 transition-colors hover:text-blue-600"
                                        aria-label="Email info@ventozambia.com"
                                    >
                                        info@ventozambia.com
                                    </Link>
                                    <Link
                                        href="mailto:sales@ventozambia.com"
                                        className="text-neutral-900 transition-colors hover:text-blue-600"
                                        aria-label="Email sales@ventozambia.com"
                                    >
                                        sales@ventozambia.com
                                    </Link>
                                </ContactInfoBlock>

                                <ContactInfoBlock title="Our Location">
                                    <span>Unit Plot, Heavy Industrial Area,</span>
                                    <span>1539 Kafulafuta Rd, Kitwe</span>
                                    <span>Copperbelt Province, 10101, Zambia</span>
                                </ContactInfoBlock>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <Image
                                src="/contactus.png"
                                alt="A person working on a laptop, representing contact and support."
                                width={600}
                                height={420}
                                className="rounded-md object-contain shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}