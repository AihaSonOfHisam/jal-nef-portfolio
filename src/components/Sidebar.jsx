import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-5 top-5 z-[70] flex h-11 w-11 items-center justify-center border border-white/20 bg-[#1f1f1f]/80 text-white backdrop-blur transition hover:bg-white hover:text-black"
        aria-label="Toggle sidebar"
      >
        <span className="relative h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-[1px] w-5 bg-current transition ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-2 h-[1px] w-5 bg-current transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-4 h-[1px] w-5 bg-current transition ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Dark overlay for mobile */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
          aria-label="Close sidebar overlay"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-[60] flex h-screen w-[260px] flex-col border-r border-white/10 bg-[#181818] px-8 py-24 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)} className="block">
          <h1 className="text-3xl font-semibold tracking-tight">jal.nef</h1>
          <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/35">
            Photography / Film
          </p>
        </Link>

        <nav className="mt-16 flex flex-col gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.25em] transition ${
                  isActive ? "text-white" : "text-white/45 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/30">
            Social
          </p>

          <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-white/40">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@yourusername"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              TikTok
            </a>
            <a
              href="https://youtube.com/@yourusername"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              YouTube
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}