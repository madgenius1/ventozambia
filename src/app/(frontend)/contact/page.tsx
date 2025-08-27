
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Vento Zambia",
  description: "Industrial Equipment Supplier in Zambia",
  keywords: "Vento Zambia Limited, Hiforce tools Zambia, Hifi filters Zambia, Alkatronic tools Zambia, Interbolt tools Zambia "
};

export default function Page() {
  return (
    <main className="bg-neutral-50  min-h-screen">
      <div className="lg:p-8 md:p-6 p-4 flex items-center text-center">
        <h3 className="text-neutral-90 dark:text-neutral-100 font-medium lg:text-xl md:text-md text-sm">
            Contact Us
        </h3>
      </div>
    </main>
  );
}
