import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DescriptionSection from "../components/DescriptionSection";

export default function Description() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
      <DescriptionSection />
      <Footer />
    </>
  );
}
