import React, { useState } from "react";
import { Camera, Mail, Menu, X } from "lucide-react";

const categories = [
  {
    title: "Motorsports",
    subtitle: "Speed / Track / Motion",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Wildlife",
    subtitle: "Nature / Animals / Stillness",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Moon",
    subtitle: "Lunar / Minimal / Detail",
    image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Night Sky",
    subtitle: "Stars / Darkness / Atmosphere",
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Milky Way",
    subtitle: "Astro / Galaxy / Long Exposure",
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Video",
    subtitle: "Cinematic / Mini Vlog / Motion",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function PhotographyPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <header className="fixed left-0 top-0 z-50 w-full bg-[#070707]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-10">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition group-hover:border-white/60">
              <Camera size={16} />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.32em]">JAL.NEF</p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">Photography / Film</p>
            </div>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.24em] text-white/55 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white/15 p-2 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#070707] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.24em] text-white/60"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="mx-auto max-w-[1500px] px-6 pb-10 pt-32 md:px-10 md:pt-36">
        <div className="mb-12 max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/35">Personal Portfolio</p>
          <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
            Visual stories in motion, silence, and light.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
            A clean collection of photography and cinematic mini vlogs, focused on motorsports, wildlife, moon, night sky, and Milky Way visuals.
          </p>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1500px] px-6 pb-24 md:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <a
              key={item.title}
              href={`#${item.title.toLowerCase().replaceAll(" ", "-")}`}
              className="group relative block aspect-[4/3] overflow-hidden bg-neutral-900 md:aspect-[5/4]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover opacity-75 grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:opacity-45 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/15 transition duration-500 group-hover:bg-black/45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h2 className="text-2xl font-medium uppercase tracking-[0.22em] text-white md:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 translate-y-2 text-xs uppercase tracking-[0.2em] text-white/0 transition duration-500 group-hover:translate-y-0 group-hover:text-white/65">
                  {item.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1500px] gap-10 border-t border-white/10 px-6 py-24 md:grid-cols-[0.6fr_1.4fr] md:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">About</p>
        </div>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">Behind the lens.</h2>
          <div className="mt-8 grid gap-6 text-sm leading-7 text-white/55 md:grid-cols-2 md:text-base">
            <p>
              I focus on visual stories that feel cinematic, clean, and atmospheric. My work explores motorsports, wildlife, moon photography, night skies, the Milky Way, and short cinematic video moments.
            </p>
            <p>
              This site is intentionally simple: dark background, minimal typography, large image tiles, and clean spacing so the work becomes the main focus.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1500px] border-t border-white/10 px-6 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/35">Contact</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">Let’s connect.</h2>
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            <a
              href="mailto:yourname@email.com"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/65 transition hover:text-white"
            >
              <Mail size={16} /> yourname@email.com
            </a>
            <div className="flex flex-wrap gap-5 text-sm uppercase tracking-[0.2em] text-white/45">
              <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a>
              <a href="https://tiktok.com/@yourusername" target="_blank" rel="noreferrer" className="transition hover:text-white">TikTok</a>
              <a href="https://youtube.com/@yourusername" target="_blank" rel="noreferrer" className="transition hover:text-white">YouTube</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-white/30 md:flex-row">
          <p>© {new Date().getFullYear()} JAL.NEF</p>
          <p>Photography / Videography Portfolio</p>
        </div>
      </footer>
    </main>
  );
}
