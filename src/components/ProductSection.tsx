import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "cd-prospect",
    title: (
      <span>
        CD‑PROSPECT –{" "}
        <span className="text-[hsl(var(--primary))] font-bold">169 €</span> HT
      </span>
    ),
    image: "/Media/product1.png",
    short: "Le CD de base CD-PROSPECT",
    details: [
      "3 millions d'entreprises françaises",
      "250 000 numéros de fax",
      "1650 activités professionnelles",
      "Annuaire inverse sur téléphone & fax",
      "Sélection par activité, zone géographique et tranches d'effectif",
      "Exportation aux formats: Dbase, Excel, Lotus, Texte",
      "Extraction illimitée pendant un an (de la date d'édition)",
      "Impression d’étiquettes",
    ],
  },
  {
    id: "cd-prospect-sub",
    title: (
      <span className="flex flex-col">
        Abonnement 1 an (3 éditions) – <br />
        <span className="mx-auto text-[hsl(var(--primary))] font-bold">
          338 € <span className="text-[hsl(var(--foreground))]">HT</span>
        </span>
      </span>
    ),
    image: "/Media/product2.png",
    short:
      "Pour deux éditions achetées, la troisième vous sera adressée gratuitement.",
    details: [],
  },
  {
    id: "cd-prospect-email",
    title: (
      <span>
        CD‑PROSPECT EMAIL –{" "}
        <span className="text-[hsl(var(--primary))] font-bold">309 €</span> HT
      </span>
    ),
    image: "/Media/product1_email.png",
    short: "Le E-Mail de base CD-PROSPECT",
    details: [
      "3 millions d'entreprises françaises",
      "250 000 numéros de fax",
      "400 000 adresses E-mail",
      "1650 activités professionnelles",
      "Annuaire inverse sur téléphone & fax",
      "Sélection par activité, zone géographique et tranches d'effectif",
      "Exportation aux formats: Dbase, Excel, Lotus, Texte",
      "Extraction illimitée pendant un an (de la date d'édition)",
      "Impression d’étiquettes",
    ],
  },
  {
    id: "cd-prospect-email-sub",
    title: (
      <span className="flex flex-col text-center max-w-55">
        Abonnement Email 1 an (3 éditions) –{" "}
        <span className="mx-auto text-[hsl(var(--primary))] font-bold">
          618 € <span className="text-[hsl(var(--foreground))]">HT</span>
        </span>
      </span>
    ),
    image: "/Media/product2.png",
    short: "Pour deux éditions achetées, la troisième est offerte.",
    details: [],
  },
  {
    id: "cd-prospect-email-plus",
    title: (
      <span className="flex flex-col text-center max-w-55">
        CD‑PROSPECT EMAIL‑PLUS –{" "}
        <span className="text-[hsl(var(--primary))] font-bold">
          489 € <span className="text-[hsl(var(--foreground))]">HT</span>
        </span>
      </span>
    ),
    image: "/Media/product1_email.png",
    short: "Version enrichie avec 1 million d'adresses e-mail.",
    details: [
      "3 millions d'entreprises françaises",
      "250 000 numéros de fax",
      "1 million d'adresses e-mail",
      "1650 activités professionnelles",
      "Annuaire inverse sur téléphone & fax",
      "Sélection par activité, zone géographique et tranches d'effectif",
      "Exportation aux formats: Dbase, Excel, Lotus, Texte",
      "Extraction illimitée pendant un an (de la date d'édition)",
      "Impression d’étiquettes",
    ],
  },
  {
    id: "cd-prospect-email-plus-sub",
    title: (
      <span className="flex flex-col text-center max-w-55">
        ABONNEMENT EMAIL‑PLUS 1 AN – 3 ÉDITIONS –{" "}
        <span className="text-[hsl(var(--primary))] font-bold">
          978 € <span className="text-[hsl(var(--foreground))]">HT</span>
        </span>
      </span>
    ),
    image: "/Media/product2.png",
    short:
      "Pour deux éditions achetées, la troisième vous sera adressée gratuitement.",
    details: [],
  },
];

export default function ProductSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 mt-30 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            id={product.id}
            title={product.title}
            image={product.image}
            short={product.short}
            details={product.details}
          />
        ))}
      </div>
    </section>
  );
}

function Card({
  id,
  title,
  image,
  short,
  details,
}: {
  id: string;
  title: React.ReactNode;
  image: string;
  short: string;
  details: string[];
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

  // rotirea automată a detaliilor
  useEffect(() => {
    if (showDetails || details.length === 0) return;

    const interval = setInterval(() => {
      setCurrentDetailIndex((prev) => (prev + 1) % details.length);
    }, 2500); // schimbă la fiecare 2.5 secunde

    return () => clearInterval(interval);
  }, [showDetails, details.length]);

  return (
    <div className="flex flex-col items-center rounded-2xl shadow-even p-6 transition hover:scale-105 bg-[hsl(var(--card-bg))]">
      <img
        src={image}
        alt="Produit"
        className="w-full h-28 object-contain mb-2 rounded"
      />

      <h2 className="text-lg font-bold mb-2 text-[hsl(var(--foreground))]">
        {title}
      </h2>

      <p className="text-sm text-[hsl(var(--nav-text))] opacity-70 mb-2 text-center">
        {short}
      </p>

      {details.length > 0 && !showDetails && (
        <div className="relative w-full h-[50px] mb-4 bg-gradient-to-r from-[hsl(var(--navbar))] to-[hsl(var(--navbar)/0.7)] text-[hsl(var(--foreground))] text-sm font-semibold rounded-md px-4 py-2 shadow-sm overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDetailIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="flex items-center gap-2">
                <ArrowRight className="min-w-4 min-h-4 w-4 h-4 text-[hsl(var(--primary))]" />
                <span className="leading-tight">
                  {details[currentDetailIndex]}
                </span>
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {details.length > 0 && (
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-1 text-sm font-semibold text-[hsl(var(--primary))] mb-4 hover:opacity-80 cursor-pointer transition-all duration-900"
        >
          {showDetails ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Masquer les détails
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Afficher les détails
            </>
          )}
        </button>
      )}

      <AnimatePresence initial={false}>
        {showDetails && (
          <motion.div
            className="w-full grid grid-cols-1 gap-2 mb-3 origin-top"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
          >
            {details.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[hsl(var(--navbar))] text-[hsl(var(--foreground))] text-sm rounded-md px-3 py-2 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ delay: 0.05 * index }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        to={`/acheter?product=${id}`}
        className="mt-auto mx-auto flex items-center gap-2 cursor-pointer bg-[hsl(357,68%,37%)] text-white font-bold rounded-lg px-5 py-1.5 hover:bg-[hsl(357,68%,45%)] transition text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2 7h20M2 11h20M7 15h.01M11 15h2M17 15h.01"
          />
        </svg>
        Acheter maintenant
      </Link>
    </div>
  );
}
