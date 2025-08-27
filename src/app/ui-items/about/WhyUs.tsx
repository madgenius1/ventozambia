
import { CheckCircle2, Factory, Handshake, Lightbulb, MapPin, Wrench } from 'lucide-react';



export default function WhyUs() {
    return (
        <section className="bg-neutral-100 py-16 lg:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="lg:w-1/2">
                        <img
                            src="https://placehold.co/800x600/D4D4D8/52525B?text=Industrial+Equipment"
                            alt="Industrial equipment and machinery"
                            className="w-full h-auto rounded-3xl shadow-2xl"
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">Why Partner With Us?</h2>
                        <ul className="text-lg text-neutral-700 space-y-4 leading-relaxed">
                            <li className="flex items-start">
                                <CheckCircle2 size={24} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <span>
                                    **Comprehensive Solutions:** We are a one-stop-shop for all your industrial needs, from procurement to service.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 size={24} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <span>
                                    **Unmatched Expertise:** Our team possesses deep technical knowledge to help you solve complex problems.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 size={24} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <span>
                                    **Rapid Response:** We are committed to quick turnarounds and minimizing your operational downtime.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 size={24} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <span>
                                    **Global Sourcing:** Our extensive network allows us to procure specialized components from around the world.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
