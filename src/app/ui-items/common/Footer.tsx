'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <Image
                            src="/simplelogo.svg"
                            alt="logo"
                            width={160}
                            height={80}
                        />

                        <p className="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <Link href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">

                                </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">

                                </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">

                                </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">

                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className=''>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <p className="text-sm text-center text-neutral-600">&copy; {new Date().getFullYear()} | <span className="font-semibold">Vento Zambia Limited</span> | All Rights Reserved </p>
            </div>
        </footer>

    )
}
