import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JuridiqueSection from "@/components/JuridiqueSection";

export default function Juridique() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
      <JuridiqueSection />
      <Footer />
    </>
  );
}
