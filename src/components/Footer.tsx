export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-white/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-6 py-10 text-center text-sm sm:px-10">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="sketch-btn"
        >
          GitHub
        </a>
        <p className="text-gray-600">© 2026 김현아. All rights reserved.</p>
      </div>
    </footer>
  );
}
