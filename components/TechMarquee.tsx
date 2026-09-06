import Image from "next/image";

const stack = [
  { name: "Next.js", src: "/tech/nextdotjs.svg" },
  { name: "React", src: "/tech/react.svg" },
  { name: "Node.js", src: "/tech/nodedotjs.svg" },
  { name: "PHP", src: "/tech/php.svg" },
  { name: "Laravel", src: "/tech/laravel.svg" },
  { name: "Python", src: "/tech/python.svg" },
  { name: "Docker", src: "/tech/docker.svg" },
  { name: "Tailwind CSS", src: "/tech/tailwindcss.svg" },
  { name: "Flutter", src: "/tech/flutter.svg" },
];

function TechGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-16 pr-16"
    >
      {stack.map((t) => (
        <span
          key={t.name}
          className="flex shrink-0 items-center gap-3 whitespace-nowrap grayscale transition-all duration-300 hover:grayscale-0"
        >
          <Image
            src={t.src}
            alt={t.name}
            width={28}
            height={28}
            loading="eager"
            className="h-7 w-7 shrink-0 object-contain"
          />
          <span className="text-lg font-black tracking-tight text-charcoal/70">
            {t.name}
          </span>
        </span>
      ))}
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="border-y border-border-teal bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-teal">
          Our Tech Stack
        </p>
      </div>
      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="marquee-track flex w-max">
          <TechGroup />
          <TechGroup ariaHidden />
        </div>
      </div>
    </section>
  );
}
