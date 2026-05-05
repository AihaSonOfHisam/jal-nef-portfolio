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
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="translate-y-3 text-xl font-semibold tracking-wide text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-2xl">
          {category.name}
        </h2>
      </div>
    </Link>
  );
}