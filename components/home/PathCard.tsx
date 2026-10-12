import Link from "next/link";

type PathVariant = "realestate" | "professionals" | "market" | "encyclopedia";

type PathCardProps = {
  title: string;
  description: string;
  variant: PathVariant;
  href: string;
};

const variantStrip: Record<PathVariant, string> = {
  realestate: "bg-realestate",
  professionals: "bg-professionals",
  market: "bg-market",
  encyclopedia: "bg-encyclopedia",
};

export default function PathCard({ title, description, variant, href }: PathCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-lg border bg-surface shadow-card overflow-hidden transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div className={`h-1 ${variantStrip[variant]}`} aria-hidden="true" />
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
