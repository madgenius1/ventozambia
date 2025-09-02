import Hero from "./ui-items/landing/Hero";
import Solutions from "./ui-items/landing/Solutions";
import Services from "./ui-items/landing/Services";
import Statistics from "./ui-items/landing/Statistics";
import ContactSection from "./ui-items/landing/ContactSection";
import Partners from "./ui-items/landing/Partners";
import Sectors from "./ui-items/landing/Sectors";
import Affiliations from "./ui-items/landing/Affiliations";
import CallToAction from "./ui-items/landing/CallToAction";
import MainProduct from "./ui-items/landing/MainProduct";


export default function Page() {
  return (
    <main>
      <Hero />
      <MainProduct />
      <Solutions />
      <Sectors />
      <CallToAction />
      <Services />
      <Statistics />
      <Partners />
      <Affiliations />
      <ContactSection />
    </main>
  );
}
