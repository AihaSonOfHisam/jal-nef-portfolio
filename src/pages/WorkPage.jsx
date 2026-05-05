import Sidebar from "../components/Sidebar";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/galleryData";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      <Sidebar />

      <main className="px-3 py-24 md:px-6">
        <div className="mx-auto mb-10 max-w-[1400px] px-1 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            Work
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Selected Categories
          </h1>
        </div>

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
}