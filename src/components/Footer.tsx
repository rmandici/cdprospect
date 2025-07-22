import { Phone, Mail } from "lucide-react";
import Player from "lottie-react";
import creditCardAnimation from "@/assets/credit-card.json";

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-[hsl(var(--link-hover))] shadow-inner"
      style={{ backgroundColor: "hsl(var(--navbar))" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Info firmă + iconițe */}
        <div className="flex-1 text-center md:text-left text-[hsl(var(--nav-text))] text-sm md:text-base font-medium">
          <div>
            <span className="font-semibold">CD-Prospect</span> – Siège social :
            8, rue Lemercier – 75017 PARIS
            <br />
            Siret : 495 366 163 00022 – TVA : FR10495366163
            <br />
            <span className="font-semibold">CD-Prospect – Logistique :</span> La
            Butte – 61350 SAINT MARS D’EGRENNE
            <br />
            <span className="inline-flex items-center gap-1 mt-2">
              <Phone className="w-4 h-4 inline mb-0.5" />
              <a
                href="tel:0175434312"
                className="underline hover:text-[hsl(var(--primary))] transition-colors"
              >
                01 75 43 43 12
              </a>
            </span>
            <br />
            <span className="inline-flex items-center gap-1 mt-1">
              <Mail className="w-4 h-4 inline mb-0.5" />
              <a
                href="mailto:info@cdprospect.fr"
                className="underline hover:text-[hsl(var(--primary))] transition-colors"
              >
                info@cdprospect.fr
              </a>
            </span>
          </div>
          <div className="mt-3 text-xs md:text-sm opacity-80">
            Ce site est destiné aux entreprises, artisans, commerçants,
            professions libérales, associations, collectivités, dans le cadre de
            leurs activités professionnelles.
          </div>
        </div>

        {/* Dreapta: animație minimalistă de plată */}
        <div className="flex flex-col items-center gap-2">
          <Player
            autoplay
            loop
            animationData={creditCardAnimation} // <-- CORECT!
            style={{ width: 150, height: 150 }}
          />
        </div>
      </div>
    </footer>
  );
}
