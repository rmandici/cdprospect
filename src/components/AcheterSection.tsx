import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Database, Mail, MailPlus, Repeat } from "lucide-react";

type Product = {
  id: string;
  label: string;
  description: string;
  price: number;
  icon: React.ReactElement;
};

const products: Product[] = [
  {
    id: "cd-prospect",
    label: "CD‑Prospect",
    description: "Version standard",
    price: 169,
    icon: (
      <Database className="absolute w-5 h-5 text-[hsl(var(--primary))] top-2 left-2" />
    ),
  },
  {
    id: "cd-prospect-sub",
    label: "Abonnement 1 an CD‑Prospect",
    description: "Mise à jour trimestrielle",
    price: 338,
    icon: (
      <div className="absolute top-2 left-2 flex items-center gap-1">
        <Database className="w-4 h-4 text-[hsl(var(--primary))]" />
        <Repeat className="w-4 h-4 text-[hsl(var(--primary))]" />
      </div>
    ),
  },
  {
    id: "cd-prospect-email",
    label: "CD‑Prospect E‑mail",
    description: "Avec adresses e‑mail incluses",
    price: 309,
    icon: (
      <Mail className="absolute w-5 h-5 text-[hsl(var(--primary))] top-2 left-2" />
    ),
  },
  {
    id: "cd-prospect-email-sub",
    label: "Abonnement 1 an CD‑Prospect E‑mail",
    description: "Avec mise à jour trimestrielle",
    price: 618,
    icon: (
      <div className="absolute top-2 left-2 flex items-center gap-1">
        <Mail className="w-4 h-4 text-[hsl(var(--primary))]" />
        <Repeat className="w-4 h-4 text-[hsl(var(--primary))]" />
      </div>
    ),
  },
  {
    id: "cd-prospect-email-plus",
    label: "CD‑Prospect E‑mail‑Plus",
    description: "Avec e‑mail validé + enrichi",
    price: 489,
    icon: (
      <MailPlus className="absolute w-5 h-5 text-[hsl(var(--primary))] top-2 left-2" />
    ),
  },
  {
    id: "cd-prospect-email-plus-sub",
    label: "Abonnement 1 an CD‑Prospect E‑mail‑Plus",
    description: "Avec mise à jour trimestrielle",
    price: 978,
    icon: (
      <div className="absolute top-2 left-2 flex items-center gap-1">
        <MailPlus className="w-4 h-4 text-[hsl(var(--primary))]" />
        <Repeat className="w-4 h-4 text-[hsl(var(--primary))]" />
      </div>
    ),
  },
];

function AnimatedCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="min-w-5 min-h-5 flex items-center justify-center border rounded-sm transition-all duration-300 bg-[hsl(var(--primary))] border-[hsl(var(--primary))]"
    >
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="text-white"
          >
            <Check className="w-4 h-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function AcheterSection() {
  const [selected, setSelected] = useState<Product>(products[0]);
  const query = useQuery();
  const productId = query.get("product");
  const [payment, setPayment] = useState("Carte bancaire");
  const [licenseChecked, setLicenseChecked] = useState(false);
  const [gdprChecked, setGdprChecked] = useState(false);

  useEffect(() => {
    if (productId) {
      const found = products.find((p) => p.id === productId);
      if (found) setSelected(found);
    }
  }, [productId]);

  return (
    <section className="max-w-4xl mx-auto p-6 sm:mt-25 mt-15">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Choisissez votre version
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 ">
        {products.map((product) => {
          const isSelected = selected.id === product.id;
          return (
            <button
              key={product.id}
              onClick={() => setSelected(product)}
              className={`relative p-6 border rounded-xl text-center transition cursor-pointer
                ${
                  isSelected
                    ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.05)] shadow-lg"
                    : "border-[hsl(var(--navbar))] hover:shadow-md"
                }`}
            >
              <h3 className="font-semibold">
                {product.icon}
                {product.label}
              </h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="mt-2 font-medium">{product.price} € HT</p>
              {isSelected && (
                <Check className="absolute top-2 right-2 w-5 h-5 text-[hsl(var(--primary))]" />
              )}
            </button>
          );
        })}
      </div>

      <p className="text-center text-sm">
        Produit sélectionné : <strong>{selected.label}</strong> –{" "}
        {selected.price} € HT
      </p>

      <form className="space-y-6 mt-20 rounded-2xl p-6 shadow-even">
        {/* Câmpuri facturare */}
        <h3 className="text-xl font-semibold mb-4 text-center ">
          Informations de facturation
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <input type="text" placeholder="Société" required className="input" />
          <input type="text" placeholder="Nom" required className="input" />
          <input type="text" placeholder="Prénom" required className="input" />
          <input
            type="text"
            placeholder="Adresse"
            required
            className="input sm:col-span-2"
          />
          <input
            type="text"
            placeholder="Code postal"
            required
            className="input"
          />
          <input type="text" placeholder="Ville" required className="input" />
          <input type="tel" placeholder="Téléphone" className="input" />
          <input type="email" placeholder="Email" required className="input" />
        </div>
        {/* Metoda de plata */}

        <h3 className="text-base font-medium mb-2 mt-15">
          Méthode de paiement
        </h3>
        {/* Container responsive */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 ">
          {/* Butoane centrate */}
          <div className="flex justify-center sm:justify-start">
            <div className="inline-flex rounded-md border border-[hsl(var(--navbar))] overflow-hidden">
              {["Carte bancaire", "Virement bancaire"].map((option, i) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPayment(option)}
                  className={`px-4 py-2 cursor-pointer text-sm transition-all duration-300 ${
                    payment === option
                      ? "bg-[hsl(var(--primary))] text-white"
                      : "bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.1)]"
                  } ${i === 0 ? "border-r border-[hsl(var(--navbar))]" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Link Voir le RIB */}
          {payment === "Virement bancaire" && (
            <a
              href="https://www.cdprospect.fr/images/rib.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-sm text-[hsl(var(--primary))] underline sm:ml-auto sm:justify-end"
            >
              <ExternalLink className="w-4 h-4" />
              Voir le RIB pour le virement
            </a>
          )}
        </div>
        {/* CONSIMTAMANT LICENȚĂ */}
        <div className="">
          <label className="flex items-start gap-3 text-sm">
            <AnimatedCheckbox
              checked={licenseChecked}
              onChange={() => setLicenseChecked(!licenseChecked)}
            />
            <span className="cursor-pointer flex items-center justify-center ">
              J’ai pris connaissance de la{" "}
              <a
                href="/Juridique"
                target="_blank"
                className="underline text-[hsl(var(--primary))] "
              >
                <span className="flex ml-2">
                  <ExternalLink className="w-4 h-4" /> licence d’utilisation
                </span>
              </a>
            </span>
          </label>
        </div>
        {/* CONSIMTAMANT RGPD */}
        <label className="flex items-start gap-3 text-sm">
          <AnimatedCheckbox
            checked={gdprChecked}
            onChange={() => setGdprChecked(!gdprChecked)}
          />
          <span className="cursor-pointer">
            J’autorise <strong>CD‑PROSPECT</strong> à utiliser mes données
            personnelles dans le cadre du traitement de cette commande,
            conformément à la réglementation en vigueur sur la protection des
            données (RGPD).
          </span>
        </label>
        {/* Buton submit */}
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-md bg-[hsl(var(--primary))] text-white font-semibold hover:bg-[hsl(var(--link-hover))] transition cursor-pointer"
        >
          Envoyer la commande – {selected.price} € HT
        </button>
        <p className="mt-4 text-center text-xs text-[hsl(var(--foreground)/0.6)] leading-relaxed">
          Les informations recueillies à partir de ce formulaire font l'objet
          d'un traitement déclaré à la CNIL sous le numéro{" "}
          <strong>2009214</strong>.<br />
          En aucun cas, les données ici collectées ne seront ajoutées à
          l'annuaire des entreprises CD‑PROSPECT.
          <br />
          Conformément à la loi « informatique et libertés » du 6 janvier 1978
          modifiée, vous disposez d’un droit d’accès et de rectification aux
          informations qui vous concernent.
        </p>
      </form>
    </section>
  );
}
