import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <span className="text-lg font-bold">رواق الترقية العقارية</span>
        <ThemeToggle />
      </div>
    </header>
  );
}
