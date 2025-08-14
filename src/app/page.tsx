import Hero from "./ui-items/landing/Hero";
import Products from "./ui-items/landing/Products";
import Services from "./ui-items/landing/Services";
import Statistics from "./ui-items/landing/Statistics";
import CallToAction from "./ui-items/landing/CallToAction";
import Partners from "./ui-items/landing/Partners";




export default function Page() {
  return (
    <main>
      <Hero />
      <Products />
      <Statistics />
      <Services />
      <Partners />
      <CallToAction />


    </main>
  );
}
