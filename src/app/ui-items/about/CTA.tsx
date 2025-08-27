'use client'
import { MapPin } from 'lucide-react';
import { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@radix-ui/react-popover";
export default function CTA() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <section className="bg-neutral-200 py-16 lg:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">Ready to Get Started?</h2>
                <p className="max-w-3xl mx-auto text-lg sm:text-xl text-neutral-600 mb-10 leading-relaxed">
                    Contact us today to discuss your industrial equipment needs and find out how we can help you achieve your goals.
                </p>
                <Popover open={showPopup} onOpenChange={setShowPopup}>
                    <PopoverTrigger asChild>
                        <button className="px-10 py-4 rounded-xl bg-neutral-800 text-neutral-50 font-semibold text-lg transition-all duration-300 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2">
                            Contact Us Today
                        </button>
                    </PopoverTrigger>
                    <PopoverContent side="bottom" align="center" className="w-64 bg-neutral-800 text-neutral-50 text-center rounded-lg p-3 shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
                        <div className="flex flex-col items-center">
                            <MapPin size={24} className="mb-2" />
                            <p className="text-sm font-semibold">Our Location</p>
                            <a href="https://www.google.com/maps/place/1539+Kafulafuta+Rd,+Kitwe,+Zambia" className="text-xs text-neutral-300 underline">Get Directions</a>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </section>
    );
}
