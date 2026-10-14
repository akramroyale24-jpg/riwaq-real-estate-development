import PageHeader from "@/components/layout/PageHeader";
import MarketBrowser from "@/components/market/MarketBrowser";
import { SAMPLE_MARKET_ITEMS } from "@/lib/market-items";

export default function MarketPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <PageHeader
        variant="market"
        title="سوق البناء والتجهيزات"
        description="مواد البناء، المعدات، والآليات الثقيلة للبيع والكراء."
      />
      <MarketBrowser items={SAMPLE_MARKET_ITEMS} />
    </div>
  );
}
