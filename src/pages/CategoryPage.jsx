import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CollageGrid from "../components/CollageGrid";
import { categories } from "../data/galleryData";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#1f1f1f] text-white">
        <Navbar />
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <h1 className="text-3xl font-bold">Category not found</h1>
          <Link to="/" className="mt-6 inline-block text-white/70 underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      <Navbar />

      <main className="mx-auto max-w-[1400px] px-4 py-10 md:px-6">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-4xl">
            {category.name}
          </h1>
        </div>

        <CollageGrid images={category.images} />
      </main>
    </div>
  );
}   