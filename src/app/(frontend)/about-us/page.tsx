
import CTA from "@/app/ui-items/about/CTA";
import Mission from "@/app/ui-items/about/Mission";
import OurServices from "@/app/ui-items/about/OurServices";
import Team from "@/app/ui-items/about/Team";
import Values from "@/app/ui-items/about/Values";
import WhyUs from "@/app/ui-items/about/WhyUs";
import Header from "@/app/ui-items/design/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vento Zambia",
  description: "Industrial Equipment Supplier in Zambia",
  keywords: "Vento Zambia Limited, Hiforce tools Zambia, Hifi filters Zambia, Alkatronic tools Zambia, Interbolt tools Zambia "
};


export default function Page() {
  return (
    <div>
      <Header
        title="About Vento Zambia Limited"
        statement="Vento Zambia Limited is a proudly Zambian, high-growth solutions provider that connects premium global brands to Africa&apos;s leading industries. Founded in 2018 by Paul Nsongo, our company has quickly become a go-to name in the industrial tools and supplies sector in Zambia and beyond.
        We specialise in sourcing and supplying hydraulic and pneumatic tooling, filtration solutions, torque tools, lifting equipment, gaskets, and more. With a reputation for service excellence, speed, and technical expertise, we proudly serve clients in mining, oil and gas, energy, power generation, and other heavy industrial markets across the country and continent."
      />
      <Mission />
      <Values />
      <Team />
      <OurServices />
      <WhyUs />
      <CTA />
    </div>
  );
}
