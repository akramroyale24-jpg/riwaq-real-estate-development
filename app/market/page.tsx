import PageHeader from "@/components/layout/PageHeader";
import MarketBrowser from "@/components/market/MarketBrowser";
import { SAMPLE_MARKET_ITEMS } from "@/lib/market-items";
import { PUBLISH_MARKET_FORM_URL } from "@/lib/external-links";

export default function MarketPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <PageHeader
        variant="market"
        title="سوق البناء والتجهيزات"
        description="مواد البناء، المعدات، والآليات الثقيلة للبيع والكراء."
      />

      <div className="flex justify-start">
        <a
          href={PUBLISH_MARKET_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 min-h-[44px] rounded-md bg-market px-5 py-2.5 text-sm font-medium text-white"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          أضف عرضًا
        </a>
      </div>

      <MarketBrowser items={SAMPLE_MARKET_ITEMS} />
    </div>
  );
}
