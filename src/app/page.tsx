import { About } from "@/components/About";
import { AtmosphereStrip } from "@/components/AtmosphereStrip";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <Work />
      <AtmosphereStrip />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
