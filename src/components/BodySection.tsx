// src/components/BodySection.tsx
import { Mail, PhoneCall, Printer, Phone, Send } from "lucide-react";
import ThemedImage from "@/components/ThemedImage";
import { Link } from "react-router-dom";

export default function BodySection() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 mt-45">
        {/* TITLU */}
        <h2 className="text-center uppercase text-[hsl(var(--primary))] font-extrabold text-xl md:text-2xl tracking-tight mb-6">
          L'OUTIL IDÉAL POUR TOUTES VOS OPÉRATIONS DE PROSPECTION
          <br />
          DANS VOTRE RÉGION ET DANS TOUTE LA FRANCE
        </h2>
        <p className="text-center text-base md:text-lg text-[hsl(var(--nav-text))] opacity-70 mt-2 mb-8 max-w-2xl mx-auto">
          Plus de 3&nbsp;000&nbsp;000 d'entreprises. 1&nbsp;650 activités.
          Données constamment mises à jour.
        </p>

        {/* CARD avantaje + preț */}
        <div className="mx-auto max-w-5xl bg-[hsl(var(--navbar))] rounded-2xl shadow-xl border border-[hsl(var(--navbar))] p-6 md:p-10 flex flex-col gap-8">
          {/* Avantaje */}
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
            {[Mail, Send, Printer, PhoneCall].map((Icon, index) => (
              <li
                key={index}
                className="flex items-center gap-3 justify-center sm:justify-start text-[hsl(var(--nav-text))] text-base font-semibold hover:bg-[hsl(var(--primary)/0.05)] px-2 py-2 rounded-lg"
              >
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow">
                  <Icon className="w-4 h-4" />
                </span>
                Pour vos{" "}
                <span className="font-bold text-[hsl(var(--primary))] ml-1">
                  {
                    ["MAILING", "E-MAILING", "FAX MAILING", "TELEMARKETING"][
                      index
                    ]
                  }
                </span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-full border-t border-dashed border-[hsl(var(--primary))] opacity-30" />

          {/* Preț + Buton + Info + Harta */}
          <div className="flex flex-col  lg:flex-row items-center justify-between gap-6">
            {/* Preț + Buton + Info */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-baseline justify-center lg:justify-start ">
                <span className="text-sm font-semibold mr-1">
                  A partir de :
                </span>
                <span className="text-2xl font-extrabold text-[hsl(var(--primary))] mr-1">
                  169 €
                </span>
                <span className="text-xs font-bold mb-2 relative -top-2">
                  HT
                </span>
              </div>

              <Link
                to="/Produits"
                className="mt-4 flex items-center gap-2 bg-[hsl(357,68%,37%)] text-white 
                          font-bold rounded-lg px-6 py-2 hover:bg-[hsl(357,68%,45%)] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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

              <div className="text-xs text-muted-foreground mt-2 opacity-70">
                Mise à jour 3 fois par an. Sans engagement.
              </div>

              {/* Info */}
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 min-w-80">
                <span className="font-bold text-[hsl(var(--primary))] uppercase text-sm tracking-wide">
                  Informations
                </span>
                <span className="text-[hsl(var(--primary))] text-base font-bold flex items-center gap-1">
                  au <Phone className="w-4 h-4" />{" "}
                  <a
                    href="tel:0175434312"
                    className="underline hover:text-[hsl(var(--primary))]"
                  >
                    01 75 43 43 12
                  </a>
                </span>
              </div>
            </div>

            {/* Harta */}
            <div className="flex justify-center items-center">
              <div
                className="w-full max-w-[400px] xl:max-w-[450px] 
              transition duration-500 hover:scale-105 hover:shadow-2xl rounded-xl overflow-hidden"
              >
                <ThemedImage />
              </div>
            </div>
          </div>
        </div>

        {/* HARTA dedesubt */}
        {/* <div className="mt-2 flex justify-center">
          <div className="hover:scale-105 hover:shadow-2xl duration-1000 rounded-2xl overflow-hidden">
            <ThemedImage />
          </div>
        </div>  */}
      </section>

      <section className="max-w-3xl mx-auto px-4 py-25 space-y-8">
        <p className="text-lg">
          <span className="font-bold">Notre base de données CD-PROSPECT</span>{" "}
          contient toutes les informations essentielles pour vos campagnes de
          marketing direct en France.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
          <div className="flex items-center bg-[hsl(var(--navbar))] rounded-xl p-4 gap-4 shadow-lg">
            <span className="text-3xl min-w-40 font-extrabold text-[hsl(var(--primary))] ">
              3 000 000
            </span>
            <div>
              <span className="font-semibold">entreprises</span>
              <div className="text-xs">
                réparties en 1 650 activités professionnelles
              </div>
            </div>
          </div>
          <div className="flex items-center bg-[hsl(var(--navbar))] rounded-xl p-4 shadow-lg gap-4">
            <span className="text-3xl min-w-40 font-extrabold text-[hsl(var(--primary))]">
              3 000 000
            </span>
            <div>
              <span className="font-semibold">numéros de téléphone</span>
            </div>
          </div>
          <div className="flex items-center bg-[hsl(var(--navbar))] rounded-xl p-4 shadow-lg gap-4">
            <span className="text-3xl min-w-40 font-extrabold text-[hsl(var(--primary))]">
              250 000
            </span>
            <div>
              <span className="font-semibold">numéros de fax</span>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[hsl(var(--navbar))] rounded-xl p-4 shadow-lg">
            <span className="font-semibold mb-1">
              400 000 adresses E-mail{" "}
              <span className="font-normal">
                (version <b>CD-Prospect E-mail</b> à 309&nbsp;€ HT)
              </span>
            </span>
            <span className="font-semibold">
              1 000 000 adresses E-mail{" "}
              <span className="font-normal">
                (version <b>CD-Prospect E-mail plus</b> à 489&nbsp;€ HT)
              </span>
            </span>
          </div>
          <div className="md:col-span-2 col-span-1">
            <div
              className=" bg-[hsl(var(--navbar))]
                        rounded-xl p-4 shadow-lg 
                        flex flex-col md:flex-row items-stretch"
            >
              {[
                "SIRET",
                "Code NAF",
                "Tranches d’EFFECTIF",
                "Nom du responsable",
              ].map((label, i, arr) => (
                <div
                  key={label}
                  className={`
          flex-1 py-2 px-4 flex items-center justify-center text-center
          font-semibold text-[hsl(var(--nav-text))]
          ${
            i !== arr.length - 1
              ? "border-b md:border-b-0 md:border-r border-[hsl(var(--primary))]"
              : ""
          }
        `}
                >
                  <span className="block">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info-boxes / avantaje */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-[hsl(var(--navbar))] bg-opacity-10 p-4 rounded-lg">
            <span className="font-bold text-[hsl(var(--nav-text))]">
              Exportation illimitée des données
            </span>
            <p className="text-sm mt-1">
              (pendant un an à partir de la date d’édition). Sélection par zone
              géographique (Villes, Départements, France entière), par activités
              et par tranches d'effectif.
            </p>
          </div>
          <div className="bg-[hsl(var(--navbar))] bg-opacity-10 p-4 rounded-lg">
            <span className="font-bold text-[hsl(var(--nav-text))]">
              Disponible immédiatement
            </span>
            <p className="text-sm mt-1">
              en téléchargement après votre{" "}
              <a href="#" className="underline">
                commande
              </a>
              .
            </p>
          </div>
        </div>

        {/* Marketing direct */}
        <div className="mt-8 p-4 rounded-xl bg-[hsl(var(--navbar))] bg-opacity-10">
          <span className="font-bold text-lg text-[hsl(var(--nav-text))] block mb-2">
            CD-Prospect, c’est le marketing direct à la portée de tous !
          </span>
          <p>
            CD-Prospect est à la fois une base de donnée accompagnée d’un
            programme permettant de consulter les données et d’extraire celles
            qui vous sont nécessaires pour vos opérations de marketing direct.
            Pour plus de détails, consultez notre page{" "}
            <a href="#" className="underline">
              descriptif
            </a>
            . Nous vous conseillons avant de commander de consulter notre
            comparatif des différentes{" "}
            <a href="#" className="underline">
              versions de CD-Prospect
            </a>
            .
          </p>
        </div>

        <div className="mt-4 text-xs text-muted-foreground italic">
          La base de donnée CD-PROSPECT est mise à jour trois fois par an.
        </div>
      </section>
    </>
  );
}
