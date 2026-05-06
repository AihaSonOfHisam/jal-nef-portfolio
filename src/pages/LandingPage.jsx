import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111] text-white">
      <Sidebar />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
  src="/images/landing/cover.png"
  alt="jal.nef landing"
  className="h-full w-full object-cover object-[42%_center] opacity-80 md:object-center"
/>
        {/* <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-black/20" /> */}
      </div>

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center md:px-16 lg:px-24">
        <section className="max-w-4xl pt-16">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/45">
            Photography / Videography Portfolio
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.07em] md:text-7xl lg:text-8xl">
            jal.nef
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Visual stories in motion, silence, and light. A personal collection
            of motorsports, wildlife, moon, night sky, Milky Way photography,
            and cinematic mini vlogs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/work"
              className="inline-flex w-fit items-center justify-center border border-white bg-white px-8 py-4 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-white"
            >
              View Work
            </Link>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center justify-center border border-white/25 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white/70 transition hover:border-white hover:text-white"
            >
              Contact
            </Link>
          </div>
        </section>
      </main>

      {/* Bottom note */}
      <div className="absolute bottom-6 right-6 z-10 hidden text-right text-xs uppercase tracking-[0.22em] text-white/35 md:block">
        <p>Motorsports / Wildlife / Astro / Film</p>
      </div>
    </div>
  );
}