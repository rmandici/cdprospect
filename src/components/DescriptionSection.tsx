import {
  CheckCircle,
  Search,
  FileText,
  Download,
  Globe,
  Building2,
  Laptop,
  Database,
  HardDrive,
  Info,
} from "lucide-react";

export default function DescriptionSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 space-y-16">
      {/* Hero */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--foreground))]">
          CD‑Prospect — L’annuaire professionnel de référence
        </h1>
        <p className="text-lg text-[hsl(var(--foreground))]">
          Une solution complète pour vos besoins de prospection B2B en France
        </p>
      </div>

      {/* Prezentare companie */}
      <div className="relative p-6 md:p-10 rounded-xl bg-[hsl(var(--card-bg))] shadow-even border border-[hsl(var(--navbar))]">
        {/* Icon decorativ în colț */}
        <div className="absolute top-4 right-4 opacity-10 text-[hsl(var(--foreground))] hidden md:block">
          <Info className="w-16 h-16" />
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[hsl(var(--foreground))]">
          Qui sommes-nous ?
        </h2>

        <p className="text-base text-[hsl(var(--foreground))] leading-relaxed">
          <strong>CD‑Prospect</strong> est un outil développé en France, dédié
          aux professionnels de la vente, du marketing et de la communication
          directe.
        </p>
        <p className="text-base text-[hsl(var(--foreground))] leading-relaxed mt-3">
          Grâce à sa base de données riche et mise à jour trois fois par an,
          l’annuaire permet un{" "}
          <span className="text-[hsl(var(--primary))] font-medium">
            ciblage rapide, précis et performant
          </span>
          .
        </p>
      </div>

      {/* Fonctionnalités */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))]">
          Fonctionnalités principales
        </h2>
        <ul className="grid sm:grid-cols-2 gap-6 text-[hsl(var(--foreground))]">
          <FeatureItem
            icon={Search}
            text="Recherche par activité, région ou code postal"
          />
          <FeatureItem
            icon={FileText}
            text="Export des fichiers en formats TXT, DBF, XLS"
          />
          <FeatureItem
            icon={Download}
            text="Accès illimité aux données pendant 12 mois"
          />
          <FeatureItem
            icon={Globe}
            text="Plus de 3 millions d’entreprises répertoriées"
          />
          <FeatureItem
            icon={CheckCircle}
            text="Interface simple, rapide, intuitive"
          />
          <FeatureItem
            icon={Building2}
            text="Données disponibles : adresse, email, téléphone, SIRET, effectif..."
          />
        </ul>
      </div>

      {/* Informations techniques */}
      <div className="space-y-6 text-[hsl(var(--foreground))]">
        <h2 className="text-xl font-semibold">Informations techniques</h2>
        <ul className="grid sm:grid-cols-2 gap-6">
          <FeatureItem
            icon={Laptop}
            text="Compatible avec Windows 7, 8, 10, 11"
          />
          <FeatureItem
            icon={HardDrive}
            text="Installation locale, sans connexion permanente requise"
          />
          <FeatureItem
            icon={Database}
            text="Formats de sortie : TXT, DBF, XLS — importables dans Excel, Access, etc."
          />
          <FeatureItem
            icon={Info}
            text="Guide d'utilisation inclus pour une prise en main rapide"
          />
        </ul>
      </div>

      {/* Concluzie */}
      <div className="space-y-4 text-[hsl(var(--foreground))]">
        <h2 className="text-xl font-semibold">
          Pourquoi choisir CD‑Prospect ?
        </h2>
        <p>
          CD‑Prospect se distingue par la richesse de ses données, sa rapidité
          de recherche, et la simplicité de son interface.
        </p>
        <p>
          Il s’adresse aux professionnels exigeants souhaitant une base fiable
          et exploitable immédiatement, pour des campagnes de prospection ou des
          actions marketing efficaces.
        </p>
      </div>
    </section>
  );
}

function FeatureItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="w-5 h-5 mt-1 text-[hsl(var(--primary))]" />
      <span>{text}</span>
    </li>
  );
}
