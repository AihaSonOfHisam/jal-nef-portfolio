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

      {/* <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#1f1f1f]/95 px-5 py-4 backdrop-blur md:hidden">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          jal.nef
        </Link>

        <div className="flex gap-4 text-xs uppercase tracking-[0.18em] text-white/60">
          <Link to="/">Work</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div> */}

      <main className="px-5 py-10 md:ml-[220px] md:px-14 md:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            Journal
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            {/* Blog */}
            On the way gaiss
          </h1>

          {/* <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
            Notes, behind-the-scenes stories, photography thoughts, editing process,
            shoot logs, and cinematic experiments.
          </p>

          <div className="mt-12 space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block border-b border-white/10 pb-8 transition hover:border-white/30"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                  {post.date}
                </p>

                <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                  {post.title}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div> */}
        </div>
      </main>
    </div>
    </PageLoader>
  );
}