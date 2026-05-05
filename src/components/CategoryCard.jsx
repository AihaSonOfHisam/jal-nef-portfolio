import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative block overflow-hidden bg-neutral-900"
    >
      <div className="aspect-[4/3] md:aspect-[5/4]">
        <img
          src={category.cover}
          alt={category.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 transition duration-300 md:bg-black/10 md:group-hover:bg-black/45" />

      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <h2 className="text-xl font-semibold uppercase tracking-[0.18em] text-white opacity-100 transition duration-300 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:text-2xl">
          {category.name}
        </h2>
      </div>
    </Link>
  );
}