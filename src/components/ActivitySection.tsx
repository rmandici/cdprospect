import { useState, useMemo } from "react";
import activityCategories from "@/lib/activityCategories";
import medicalData from "@/assets/activity/professions-medicales.json";
import paramedicalData from "@/assets/activity/professions-paramedicales.json";
import { ChevronDown, Mail, Send, MailPlus } from "lucide-react";
import { Listbox } from "@headlessui/react";

type Profession = {
  label: string;
  total: number;
  fax: number;
  email: number;
  emailPlus: number;
};

const dataPerCategory: Record<string, Profession[]> = {
  "PROFESSIONS MEDICALES": medicalData,
  "PROFESSIONS PARAMEDICALES ET AUTRES": paramedicalData,
};

export default function ActivitySection() {
  const [selectedCategory, setSelectedCategory] = useState(
    "PROFESSIONS MEDICALES"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const results = useMemo(() => {
    if (!searchTerm) {
      return {
        [selectedCategory]: dataPerCategory[selectedCategory] ?? [],
      };
    }

    const lower = searchTerm.toLowerCase();
    const filtered: Record<string, Profession[]> = {};

    for (const [category, professions] of Object.entries(dataPerCategory)) {
      const matched = professions.filter((item) =>
        item.label.toLowerCase().includes(lower)
      );
      if (matched.length > 0) {
        filtered[category] = matched;
      }
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  return (
    <section className="max-w-3xl mx-auto px-4 md:mt-26 mt-18 ">
      {/* Select categorie */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 ">
        {/* Dropdown custom */}
        <div className="w-full sm:w-auto">
          <label className="block  mb-1 ml-1 text-sm font-medium">
            Activité : Les Thèmes généraux
          </label>
          <div className="relative w-full sm:w-80">
            <Listbox value={selectedCategory} onChange={setSelectedCategory}>
              <Listbox.Button className="w-full px-3 py-2 bg-[hsl(var(--navbar))] text-[hsl(var(--foreground))] rounded-md flex justify-between items-center text-sm">
                {selectedCategory}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto bg-[hsl(var(--card-bg))] text-sm rounded-md shadow-even border border-[hsl(var(--navbar))]">
                {activityCategories.map((category) => (
                  <Listbox.Option
                    key={category}
                    value={category}
                    className={({ active }) =>
                      `px-3 py-2 cursor-pointer ${
                        active ? "bg-[hsl(var(--primary)/0.1)]" : ""
                      }`
                    }
                  >
                    {category}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
        </div>

        {/* Căutare */}
        <div className="w-full sm:w-auto flex-1">
          <label className="block mb-1 text-sm font-medium">
            Filtrează după cuvânt cheie:
          </label>
          <input
            type="text"
            placeholder="ex: cardiologue, nutritionniste..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gradient-to-r from-[hsl(var(--navbar))] to-[hsl(var(--navbar)/0.7)] text-[hsl(var(--foreground))] text-sm"
          />
        </div>
      </div>

      {/* Rezultate */}
      <div className="max-h-[500px] overflow-y-auto pr-2 space-y-6 rounded-xl bg-[hsl(var(--card-bg))] p-4 shadow-even mb-20">
        {Object.entries(results).map(([category, items]) => (
          <div key={category}>
            {searchTerm && (
              <h2 className="text-base font-semibold mb-2 text-[hsl(var(--foreground))]">
                {category}
              </h2>
            )}
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="p-4 rounded-xl border border-[hsl(var(--navbar))] bg-[hsl(var(--card-bg))] shadow-even transition hover:shadow-md"
                >
                  <h3 className="text-base font-semibold mb-2 text-[hsl(var(--foreground))]">
                    {item.label}
                  </h3>

                  <p className="text-sm mb-3 text-[hsl(var(--foreground))]">
                    <span className="font-medium">{item.total}</span>{" "}
                    entreprises répertoriées
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2 text-sm text-[hsl(var(--foreground))]">
                    <div className="flex items-center gap-2 w-[220px]">
                      <Send className="w-4 h-4 text-[hsl(var(--primary))]" />
                      {item.fax} avec numéro de fax
                    </div>
                    <div className="flex items-center gap-2 w-[220px]">
                      <Mail className="w-4 h-4 text-[hsl(var(--primary))]" />
                      {item.email} avec e-mail
                    </div>
                    <div className="flex items-center gap-2 w-[220px]">
                      <MailPlus className="w-4 h-4 text-[hsl(var(--primary))]" />
                      {item.emailPlus} version e-mail Plus
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {Object.keys(results).length === 0 && (
          <p className="text-sm text-gray-500 mt-4">
            Aucune profession trouvée.
          </p>
        )}
      </div>
    </section>
  );
}
