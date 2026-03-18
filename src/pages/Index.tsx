import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import BiometricSection from "@/components/BiometricSection";
import SustainableSection from "@/components/SustainableSection";
import CollaborativeSection from "@/components/CollaborativeSection";
import WorkspaceSection from "@/components/WorkspaceSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <BiometricSection />
      <SustainableSection />
      <CollaborativeSection />
      <WorkspaceSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
