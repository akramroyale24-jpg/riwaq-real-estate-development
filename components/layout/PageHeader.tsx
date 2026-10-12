type PageVariant = "realestate" | "professionals" | "market" | "encyclopedia";

type PageHeaderProps = {
  title: string;
  description: string;
  variant: PageVariant;
};

const variantStrip: Record<PageVariant, string> = {
  realestate: "bg-realestate",
  professionals: "bg-professionals",
  market: "bg-market",
  encyclopedia: "bg-encyclopedia",
};

export default function PageHeader({ title, description, variant }: PageHeaderProps) {
  return (
    <div className="space-y-4">
      <div
        className={`h-1 w-16 rounded-full ${variantStrip[variant]}`}
        aria-hidden="true"
      />
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="max-w-2xl text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
