'use client'

import { useState } from 'react';
import { Smartphone, MapPin, Mail, Loader2 } from 'lucide-react';
import Link from 'next/link';
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

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
      <div className="w-full max-w-6xl bg-neutral-50 shadow-2xl rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16">
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
                  <Link href={contact.href} className="text-neutral-700 text-sm sm:text-base hover:text-neutral-900 transition-colors duration-300 font-medium">
                    {contact.data}
                  </Link>
                </div>
              ))}
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
