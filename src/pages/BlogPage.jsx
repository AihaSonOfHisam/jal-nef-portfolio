import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { blogPosts } from "../data/blogData";
import PageLogo from "../components/PageLogo";
import PageLoader from "../components/PageLoader";

export default function BlogPage() {
  return (
    <PageLoader delay={600} fadeDuration={500}>
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      <Sidebar />
      <PageLogo />

      <main className="px-5 pt-28 pb-16 md:px-14 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            Journal
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Blog
            {/* On the way gaiss */}
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
            Notes, behind-the-scenes stories, photography thoughts, editing process,
            shoot logs, and cinematic experiments.
          </p>

          <div className="mt-12 space-y-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group grid gap-5 border-b border-white/10 pb-8 transition hover:border-white/30 md:grid-cols-[220px_1fr]"
          >
            {post.image && (
              <div className="aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                  loading="lazy"
                />
              </div>
            )}

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-white/35">
          {post.date}
        </p>

        <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
          {post.title}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
          {post.excerpt}
        </p>
      </div>
    </Link>
  ))}
</div>
        </div>
      </main>
    </div>
    </PageLoader>
  );
}