import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div id="skills">
        <SkillsSection />
      </div>
      <ExperienceSection />
      <div id="education">
        <EducationSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
        <p className="font-mono">© {new Date().getFullYear()} Chimi Thinley · Built with passion</p>
      </footer>
    </div>
  );
};

export default Index;
