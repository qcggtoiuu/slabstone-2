import HeroSection from "@/components/HeroSection";
import CollectionsGallery from "@/components/CollectionsGallery";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import AboutCompany from "@/components/AboutCompany";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import TechnologySection from "@/components/TechnologySection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainNav />
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Technology Section */}
      <section id="technology">
        <TechnologySection />
      </section>

      {/* Video Section */}
      <section id="video">
        <VideoSection />
      </section>

      {/* Collections Gallery */}
      <section id="collections">
        <CollectionsGallery />
      </section>

      {/* Manufacturing Process */}
      <section id="process">
        <ManufacturingProcess />
      </section>

      {/* About Company */}
      <section id="about">
        <AboutCompany />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
