import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  "Accueil",
  "Descriptif",
  "Produits",
  "Liste des Activités",
  "Acheter",
  "Juridique",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          className="lg:hidden text-[hsl(var(--nav-text))] mt-12 bg-transparent/55"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Meniu desktop */}
        <nav className="hidden lg:flex gap-2 flex-wrap justify-end">
          {links.map((link) => (
            <a key={link} href="#" className="nav-button text-base">
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Meniu mobil */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 flex items-center justify-center">
          <div className="flex flex-col gap-2 mt-2">
            {links.map((link) => (
              <a key={link} href="#" className="nav-button">
                {link}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
