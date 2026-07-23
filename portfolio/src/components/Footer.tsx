export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-white/60 px-4 py-8 text-center text-sm sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3">
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
