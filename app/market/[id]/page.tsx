import { notFound } from "next/navigation";
import MarketDetail from "@/components/market/MarketDetail";
import { SAMPLE_MARKET_ITEMS } from "@/lib/market-items";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function MarketDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = SAMPLE_MARKET_ITEMS.find((i) => i.id === id);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <MarketDetail item={item} />
    </div>
  );
}
