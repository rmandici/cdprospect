import { useRef, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Accueil", href: "/" },
  { name: "Descriptif", href: "/Descriptif" },
  { name: "Produits", href: "/Produits" },
  { name: "Liste des Activités", href: "/Activites" },
  { name: "Acheter", href: "/Acheter" },
  { name: "Juridique", href: "/Juridique" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const isActive = (href: string) => {
    const current = location.pathname.toLowerCase();
    const target = href.toLowerCase();

    if (target === "/") {
      return current === "/";
    }

    return current.startsWith(target);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className="shadow-inner transition-colors duration-300 fixed top-0 left-0 w-full z-40"
      style={{ backgroundColor: "hsl(var(--navbar))" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + titlu */}
        <a href="#">
          <div className="flex items-center gap-4 hover:scale-105 hover:shadow-2xl duration-1000">
            <img
              src="/Media/a4.jpg"
              alt="CD Prospect"
              className="sm:h-20 md:h-25 w-auto rounded object-contain h-15 "
            />
            <div className="flex flex-col items-start">
              <div className="relative inline-block">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight ">
                  CD-
                  <span className="text-[hsl(var(--primary))]">PROSPECT</span>
                </h1>
                {/* Linia roșie */}
                <span className="absolute left-0 right-0 -bottom-1 h-1 bg-[hsl(357,68%,37%)] rounded-full opacity-40"></span>
              </div>
              {/* Paragraful sub titlu și sub linie */}
              <p className="mt-3 w-full font-semibold text-center text-base text-[hsl(var(--nav-text))]">
                L'Annuaire des Entreprises
              </p>
            </div>
          </div>
        </a>
        {/* Meniu mobil: buton hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[hsl(var(--nav-text))] mt-12"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Meniu desktop */}
        <nav className="hidden lg:flex gap-2 flex-wrap justify-end">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`nav-button text-base ${
                isActive(link.href) ? "bg-[hsl(var(--primary))] text-white" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Meniu mobil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden px-4 pb-4 flex items-center justify-center"
          >
            <div ref={menuRef} className="flex flex-col gap-2 mt-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`nav-button text-base ${
                    isActive(link.href)
                      ? "bg-[hsl(var(--primary))] text-white"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
