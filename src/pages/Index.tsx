
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProduceGallery } from "@/components/ProduceGallery";
import { WhyOrganic } from "@/components/WhyOrganic";
import { PhotoJournal } from "@/components/PhotoJournal";
import { BookingSection } from "@/components/BookingSection";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ProduceGallery />
      <WhyOrganic />
      <PhotoJournal />
      <BookingSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
