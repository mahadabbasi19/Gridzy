import Image from "next/image";
import { Database } from "lucide-react";

const logos: Record<string, string[]> = {
  "Next.js": ["nextdotjs"],
  React: ["react"],
  TypeScript: ["typescript"],
  "Tailwind CSS": ["tailwindcss"],
  Vercel: ["vercel"],
  "Sanity CMS": ["sanity"],
  "React Native": ["react"],
  Swift: ["swift"],
  Kotlin: ["kotlin"],
  Firebase: ["firebase"],
  GraphQL: ["graphql"],
  Electron: ["electron"],
  Tauri: ["tauri"],
  Rust: ["rust"],
  SQLite: ["sqlite"],
  "Node.js": ["nodedotjs"],
  PostgreSQL: ["postgresql"],
  Docker: ["docker"],
  "REST/GraphQL APIs": ["graphql"],
  Python: ["python"],
  n8n: ["n8n"],
  "Zapier/Make": ["zapier", "make"],
  LangChain: ["langchain"],
  "Claude & GPT APIs": ["anthropic", "openai"],
  "WhatsApp Business API": ["whatsapp"],
  Figma: ["figma"],
  "Adobe Illustrator": ["adobeillustrator"],
  "Adobe Photoshop": ["adobephotoshop"],
  "After Effects": ["adobeaftereffects"],
};

export function ServiceTechStack({ items }: { items: string[] }) {
  return (
    <ul aria-label="Technology stack" className="mt-6 flex flex-wrap gap-2 border-t border-border-teal pt-5">
      {items.map((name) => (
        <li key={name} className="inline-flex max-w-full items-center gap-2 rounded-lg border border-border-teal bg-off-white px-2.5 py-2 text-xs font-medium text-charcoal/80">
          <span aria-hidden="true" className="flex shrink-0 items-center gap-1.5">
            {logos[name] ? logos[name].map((logo) => (
              <Image
                key={logo}
                src={`/tech/${logo}.svg`}
                alt=""
                width={16}
                height={16}
                className={`h-4 w-4 object-contain${logo === "openai" || logo === "rust" ? " brightness-0" : ""}`}
              />
            )) : <Database size={16} className="text-primary-teal" />}
          </span>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}
