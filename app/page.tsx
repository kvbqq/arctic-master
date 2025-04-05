import { Landing } from "./landing/Landing";
import { About } from "./about/About";
import { Offer } from "./offer/Offer";
import { Area } from "./area/Area";
import Realizations from "./realizations/Realizations";
import { FaqSection } from "./faqSection/FaqSection";

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Offer />
      <Area />
      <Realizations />
      <FaqSection />
    </main>
  );
}
