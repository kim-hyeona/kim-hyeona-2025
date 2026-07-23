import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import QuickNav from "@/components/QuickNav";
import SkillDetail from "@/components/SkillDetail";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative flex-1">
      <QuickNav />
      <Hero />
      <Projects />
      <SkillDetail />
      <TechStack />
      <Footer />
    </main>
  );
}
