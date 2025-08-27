'use client'

import Link from 'next/link';

import { useState } from 'react';
import { Smartphone, MapPin, Mail, Loader2 } from 'lucide-react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@radix-ui/react-popover";

const contactItems = [
  { icon: <Smartphone size={30} color="#6B7280" />, data: "+260 968 539 232", href: "tel:+260968539232" },
  { icon: <Mail size={30} color="#6B7280" />, data: "info@ventozambia.com", href: "mailto:info@ventozambia.com" },
  { icon: <MapPin size={30} color="#6B7280" />, data: "Unit Plot, Heavy Industrial Area, 1539 Kafulafuta Rd, Kitwe", href: "https://www.google.com/maps/place/1539+Kafulafuta+Rd,+Kitwe,+Zambia" },
];

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Explicitly type the event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Explicitly type the event as React.FormEvent<HTMLFormElement>
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setPopupMessage('Thank you for your message! We will get back to you soon.');
    setShowPopup(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-neutral-100 min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-screen-xl mx-auto bg-neutral-50 shadow-2xl rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Get in Touch with Us
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              We look forward to hearing from you and are ready to assist with your industrial equipment needs.
            </p>
            <div className="flex flex-col gap-6 mt-4">
              {contactItems.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 bg-neutral-200 rounded-full shadow-inner">
                    {contact.icon}
                  </div>
                  {/* Changed to a standard <a> tag since next/link is not available in the sandbox */}
                  <Link href={contact.href} className="text-neutral-700 text-sm sm:text-base hover:text-neutral-900 transition-colors duration-300 font-medium">
                    {contact.data}
                  </Link>
                </div>
              ))}
            </div>
            {/* Map Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Find Us on the Map</h3>
              <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.621980838186!2d28.2513476148386!3d-12.836009990928225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1967232231268487%3A0x6d90d56b0d912959!2s1539%20Kafulafuta%20Rd%2C%20Kitwe%2C%20Zambia!5e0!3m2!1sen!2sus!4v1628173456789!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps location of Vento Zambia"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-shadow bg-neutral-100 text-neutral-800 placeholder-neutral-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-shadow bg-neutral-100 text-neutral-800 placeholder-neutral-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-neutral-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-shadow bg-neutral-100 text-neutral-800 placeholder-neutral-500"
                  placeholder="e.g., +260 9xx xxx xxx"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-shadow bg-neutral-100 text-neutral-800 placeholder-neutral-500"
                  placeholder="Your message to us..."
                />
              </div>
              <Popover open={showPopup} onOpenChange={setShowPopup}>
                <PopoverTrigger asChild>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-xl bg-neutral-800 text-neutral-50 font-semibold text-lg transition-all duration-300 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 flex items-center justify-center gap-2 disabled:bg-neutral-500 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent side="bottom" align="center" className="w-64 bg-neutral-800 text-neutral-50 text-center rounded-lg p-3 shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
                  {popupMessage}
                </PopoverContent>
              </Popover>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
