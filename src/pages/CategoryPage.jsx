import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CollageGrid from "../components/CollageGrid";
import { categories } from "../data/galleryData";
import PageLogo from "../components/PageLogo";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#1f1f1f] text-white">
        <Sidebar />
        <PageLogo />

        <main className="px-5 py-24 md:px-14">
          <h1 className="text-3xl font-bold">Category not found</h1>
          <Link to="/work" className="mt-6 inline-block text-white/70 underline">
            Back to work
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      <Sidebar />

      <main className="px-3 py-24 md:px-6">
        <div className="mb-10 px-2 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            Gallery
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            {category.name}
          </h1>

          <Link
            to="/work"
            className="mt-6 inline-block text-xs uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
          >
            ← Back to Work
          </Link>
        </div>

        <div className="mx-auto max-w-[1400px]">
          <CollageGrid images={category.images} />
        </div>
      </main>
    </div>
  );
}