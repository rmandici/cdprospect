import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "../components/Navbar";
import BodySection from "../components/BodySection";
import Footer from "@/components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle*/}
      <ThemeToggle />

      {/*Navbar */}
      <Navbar />
      {/*Maine Content*/}
      <main>
        <BodySection />
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};
