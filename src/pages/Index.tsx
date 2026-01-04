import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RunningStripe } from "@/components/RunningStripe";
import { Services } from "@/components/Services";
import { AdminPortals } from "@/components/AdminPortals";
import { WhyAverix } from "@/components/WhyAverix";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <RunningStripe />
        <Services />
        <AdminPortals />
        <WhyAverix />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
