export default function LoadingScreen({ fadeOut = false, fadeDuration = 500 }) {
  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#111] text-white transition-opacity ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${fadeDuration}ms` }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-red-500 border-r-white/80" />

          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black">
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/80" />
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-white/45">
          Loading
        </p>
      </div>
    </div>
  );
}