import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductSection from "../components/ProductSection";

export default function Products() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
      <ProductSection />
      <Footer />
    </>
  );
}
