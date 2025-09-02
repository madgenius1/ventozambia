
import Header from "@/app/ui-items/design/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Vento Zambia",
  description: "Product resources for hiforce, hifi filters, and other Vento Zambia Products",
  keywords: "Vento Zambia Limited, Hiforce tools Zambia, Hifi filters Zambia, Alkatronic tools Zambia, Interbolt tools Zambia "
};


export default function Page() {
  return (
    <main className="bg-[url('/background.png')] bg-center bg-no-repeat bg-contain min-h-screen">
      <Header
        title="Resources"
        statement="Explore our resources. Download our products and services catalogue."
      />
    </main>
  );
}
