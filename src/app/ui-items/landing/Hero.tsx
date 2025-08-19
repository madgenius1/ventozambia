"use client";

import Link from "next/link";
import { ShuffleGrid } from "../design/ShuffleGrid";


export default function Hero() {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-6 max-w-screen-2xl mx-auto min-h-screen">
      <div className="flex items-center">
        <div className="space-y-6 flex flex-col gap-y-2">
          <h1 className="text-4xl lg:text-5xl md:text-4xl font-bold text-neutral-950">
            Vento Zambia Limited
          </h1>
          <p className="text-md lg:text-xl leading-relaxed font-medium text-neutral-800 my-4 md:my-6">
            Vento Zambia Limited is a leading specialized supplier of hydraulic lifting equipment, pumps, hydraulic maintenance tools, and flange management for the heavy industry sectors.
          </p>
          <div className="flex flex-row items-center pt-4 gap-4">
            <Link
              href="/products"
              className="bg-neutral-800 dark:bg-neutral-200 text-neutral-50 lg:text-xl text-md font-medium lg:px-8 lg:py-6 py-2 px-4 lg:rounded-xl rounded transition-all hover:scale-95"
            >
              Browse Our Products
            </Link>
          </div>
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
}

