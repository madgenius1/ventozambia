'use client'

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Smartphone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-100 text-neutral-800 border-t border-gray-200 py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-10 px-4">

                    {/* Logo & Description */}
                    <div className="flex flex-col md:items-start text-left">
                        <Image
                            src="/simplelogo.svg"
                            alt="Vento Zambia Logo"
                            width={140}
                            height={40}
                            className="mb-4"
                        />
                        <p className="text-md font-medium text-neutral-600 max-w-xs">
                            Your trusted partner in industrial solutions. We provide high-quality equipment and expert service to power your business forward.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col md:items-start text-left">
                        <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col space-y-2 text-md text-neutral-600 ">
                            <Link href="/products" className="hover:text-blue-600 transition-colors font-medium">Products</Link>
                            <Link href="/services" className="hover:text-blue-600 transition-colors font-medium">Services</Link>
                            <Link href="/about-us" className="hover:text-blue-600 transition-colors font-medium">About Us</Link>
                            <Link href="/blog" className="hover:text-blue-600 transition-colors font-medium">Blog</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col md:items-start text-left">
                        <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                            Contact Info
                        </h3>
                        <div className="flex flex-col space-y-3 text-sm">
                            <div className="flex items-start">
                                <MapPin className="h-4 w-4 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                                <address className="not-italic text-neutral-600">
                                    Unit Plot, Heavy Industrial Area, <br />
                                    1539 Kafulafuta Rd, Kitwe, <br />
                                    Copperbelt Province, 10101, Zambia
                                </address>
                            </div>
                            <div className="flex items-center">
                                <Smartphone className="h-4 w-4 mr-2 text-blue-600" />
                                <Link href="tel:+260968539232" className="text-neutral-600 hover:text-blue-600 transition-colors">
                                    +260 968 539 232
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-2 text-blue-600" />
                                <Link href="mailto:info@ventozambia.com" className="text-neutral-600 hover:text-blue-600 transition-colors">
                                    info@ventozambia.com
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col md:items-start text-left">
                        <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                            Follow Us
                        </h3>
                        <div className="flex items-center space-x-4">
                            <Link href="#" aria-label="Facebook" className="text-neutral-600 hover:text-blue-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" aria-label="Twitter" className="text-neutral-600 hover:text-blue-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" aria-label="Instagram" className="text-neutral-600 hover:text-blue-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" aria-label="LinkedIn" className="text-neutral-600 hover:text-blue-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <hr className="my-8 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-neutral-600 space-y-4 md:space-y-0">
                    <p>
                        <span className="font-bold text-neutral-800">Vento Zambia</span> © {currentYear} All Rights Reserved
                    </p>
                    <nav className="flex space-x-6">
                        <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}