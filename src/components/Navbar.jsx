import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1f1f1f]/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
        <nav className="flex items-center gap-8 text-sm font-medium text-white/90">
          <Link to="/" className="hover:text-white">Work</Link>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          jal.nef
        </Link>

        <div className="w-[90px]" />
      </div>
    </header>
  );
}