import { Mail, Printer, Inbox } from "lucide-react";

type ProfessionCardProps = {
  label: string;
  total: number;
  fax: number;
  email: number;
  emailPlus: number;
};

export default function ProfessionCard({
  label,
  total,
  fax,
  email,
  emailPlus,
}: ProfessionCardProps) {
  return (
    <div className="bg-[hsl(var(--card-bg))] rounded-2xl shadow-even p-4 w-full max-w-sm transition hover:scale-[1.02] hover:shadow-lg duration-300">
      <h3 className="text-lg font-semibold text-[hsl(var(--primary))] mb-2">
        {label}
      </h3>
      <p className="text-sm text-[hsl(var(--foreground))] mb-3">
        Total: <span className="font-medium">{total}</span> entreprises
      </p>
      <div className="space-y-1 text-sm">
        <div className="flex items-center gap-2">
          <Printer className="w-4 h-4" />
          <span>{fax} avec numéro de fax</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{email} avec adresse e-mail</span>
        </div>
        <div className="flex items-center gap-2">
          <Inbox className="w-4 h-4" />
          <span>{emailPlus} avec e-mail Plus</span>
        </div>
      </div>
    </div>
  );
}
