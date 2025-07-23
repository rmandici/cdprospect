import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActivitySection from "@/components/ActivitySection";

export default function Activity() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
      <ActivitySection />
      <Footer />
    </>
  );
}
