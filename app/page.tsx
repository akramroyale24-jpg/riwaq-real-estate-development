import Card from "@/components/ui/Card";
import TestJavaScript from "@/components/TestJavaScript";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">رواق الترقية العقارية</h1>
        <p className="text-text-muted">
          صفحة اختبار تقنية للمرحلة الأولى — تختبر البنية، RTL، الخط، الثيم،
          والاستجابة. هذه ليست الواجهة النهائية.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">الألوان الدلالية للمسارات</h2>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-realestate px-3 py-1 text-sm font-medium text-white">
            العروض العقارية
          </span>

          <span className="rounded-full bg-professionals px-3 py-1 text-sm font-medium text-white">
            المهنيون والشركاء
          </span>

          <span className="rounded-full bg-market px-3 py-1 text-sm font-medium text-white">
            سوق البناء والتجهيزات
          </span>

          <span className="rounded-full bg-encyclopedia px-3 py-1 text-sm font-medium text-white">
            الموسوعة العقارية والعمرانية
          </span>

          <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
            اللون العام
          </span>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">بطاقة تجريبية</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="mb-2 text-lg font-bold">عنوان تجريبي</h3>
            <p className="text-sm text-text-muted">
              نص تجريبي لاختبار البطاقة والحدود والظل والتباين مع الخلفية.
            </p>
          </Card>

          <Card>
            <h3 className="mb-2 text-lg font-bold">عنوان تجريبي</h3>
            <p className="text-sm text-text-muted">
              بطاقة ثانية للتأكد من ثبات التصميم عند التكرار.
            </p>
          </Card>

          <Card>
            <h3 className="mb-2 text-lg font-bold">عنوان تجريبي</h3>
            <p className="text-sm text-text-muted">
              بطاقة ثالثة لاختبار الشبكة على الحاسوب واللوحي والهاتف.
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">
          اختبار الخط (IBM Plex Sans Arabic)
        </h2>

        <p className="font-bold">
          Bold — عريض للعناوين الرئيسية والأسعار.
        </p>

        <p className="font-medium">
          Medium — متوسط للبادجات والعناوين الثانوية.
        </p>

        <p>Regular — عادي للنصوص والوصف.</p>

        <p className="text-text-muted">
          نص ثانوي بلون muted لاختبار التباين.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">اختبار الاتجاه RTL</h2>

        <div className="flex items-center gap-2 border rounded-md p-3 bg-surface-elevated">
          <span className="rounded bg-primary px-2 py-1 text-xs text-primary-foreground">
            البداية
          </span>

          <span className="text-text-muted">←</span>

          <span>عنصر في المنتصف</span>

          <span className="text-text-muted">←</span>

          <span className="rounded bg-market px-2 py-1 text-xs text-white">
            النهاية
          </span>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">اختبار JavaScript التفاعلي</h2>

        <TestJavaScript />
      </section>
    </div>
  );
}
