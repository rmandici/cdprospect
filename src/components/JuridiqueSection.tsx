import { motion } from "framer-motion";

const sections = [
  {
    title: "Conditions d’utilisation de l’annuaire CD‑PROSPECT",
    content: `La société **CD‑PROSPECT** (SIREN 495 366 163 – TVA intracommunautaire FR10495366163), dont le siège social est situé au 8 rue Lemercier, 75017 PARIS, est propriétaire de l’annuaire CD‑PROSPECT. Ce fichier est protégé par la législation française sur la propriété intellectuelle et la base de données. Toute reproduction totale ou partielle est strictement interdite sans l’autorisation expresse de l’éditeur.`,
  },
  {
    title: "Utilisation du fichier",
    content: `Le fichier CD‑PROSPECT est exclusivement destiné à un usage interne de l’acheteur ou de son entreprise. Il est interdit de le revendre, louer ou partager. L’utilisateur s’engage à ne pas effectuer d’extractions massives qui pourraient permettre la reconstitution d’une base équivalente.`,
  },
  {
    title: "Exclusions d’usage",
    content: `Il est interdit d’utiliser ce fichier pour :
- des messages illégaux, diffamatoires ou injurieux,
- des campagnes politiques, syndicales ou religieuses,
- des envois commerciaux non sollicités (spams).

Toute infraction expose l’utilisateur à des poursuites civiles et pénales.`,
  },
  {
    title: "Mises à jour & exactitude",
    content: `La base CD‑PROSPECT est actualisée trois fois par an (janvier, mai, septembre), mais **aucune garantie d’exactitude complète** n’est fournie. Des erreurs ou omissions peuvent subsister malgré les mises à jour régulières.`,
  },
  {
    title: "Protection des données (RGPD)",
    content: `CD‑PROSPECT respecte la réglementation RGPD. Les données incluses sont uniquement professionnelles. Les destinataires peuvent s’opposer à tout moment à la réception de messages.`,
  },
  {
    title: "Responsabilité",
    content: `CD‑PROSPECT décline toute responsabilité en cas de mauvaise utilisation par l’utilisateur. En commandant l’annuaire, vous acceptez l’ensemble de ces conditions.`,
  },
];

export default function JuridiqueSection() {
  return (
    <section className="max-w-4xl mx-auto p-6 mt-20 space-y-10">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-[hsl(var(--primary))] mb-2">
            {section.title}
          </h2>
          <p className="text-sm leading-relaxed whitespace-pre-line text-[hsl(var(--foreground))]">
            {section.content}
          </p>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: sections.length * 0.1 }}
        viewport={{ once: true }}
      >
        <p className="text-center italic text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] px-4 py-2 rounded-md">
          Merci de respecter ces conditions d’utilisation.
        </p>
      </motion.div>
    </section>
  );
}
