import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center space-y-6">
      <div className="space-y-3">
        <p className="text-6xl font-bold text-text-muted">404</p>
        <h1 className="text-2xl font-bold">الصفحة غير موجودة</h1>
        <p className="text-text-muted leading-relaxed">
          الرابط الذي طلبته غير متوفر أو تم حذفه.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center justify-center min-h-[44px] rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}
