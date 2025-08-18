import Hero from "./ui-items/landing/Hero";
import Solutions from "./ui-items/landing/Solutions";
import Services from "./ui-items/landing/Services";
import Statistics from "./ui-items/landing/Statistics";
import CallToAction from "./ui-items/landing/CallToAction";
import Partners from "./ui-items/landing/Partners";
import Brands from "./ui-items/landing/Brands";
import Affiliations from "./ui-items/landing/Affiliations";





export default function Page() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Brands />
      <Services />
      <Statistics />
      <Partners />
      <Affiliations />
      <CallToAction />
    </main>
  );
}
