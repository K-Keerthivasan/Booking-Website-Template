type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-plum-700)]">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl leading-none text-[var(--color-plum-900)] md:text-6xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-plum-700)] md:text-lg">
        {description}
      </p>
    </div>
  );
}
