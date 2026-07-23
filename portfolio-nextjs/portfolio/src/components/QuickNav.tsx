export default function QuickNav() {
  const items = [
    { emoji: "🐰", label: "skill", href: "#skill" },
    { emoji: "🎧", label: "project", href: "#project" },
    { emoji: "☕", label: "work", href: "#work" },
  ];

  return (
    <div className="sketch-box fixed top-6 right-4 z-30 w-[110px] px-3 py-3 shadow-[3px_3px_0_0_#111] sm:right-8">
      <div className="flex items-center justify-between text-sm font-semibold">
        <span>remote</span>
        <span aria-hidden>♡</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-2 text-center text-[11px]">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-1 rounded-lg p-1 transition hover:bg-sky/40"
          >
            <span className="text-xl leading-none">{item.emoji}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
