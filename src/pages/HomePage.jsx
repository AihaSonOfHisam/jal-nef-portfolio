import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/galleryData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      <Navbar />

      <main className="mx-auto max-w-[1400px] px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </main>

      <footer
        id="contact"
        className="mx-auto max-w-[1400px] px-6 py-16 text-center text-white/70"
      >
        <p className="text-lg font-medium">Contact</p>
        <p className="mt-3">aizalhaziq003@gmail.com</p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="https://instagram.com/jal.nef" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com/@jal.nef" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://youtube.com/@aiha7331" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </footer>
    </div>
  );
}