import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { blogPosts } from "../data/blogData";
import PageLogo from "../components/PageLogo";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#1f1f1f] text-white">
        <Sidebar />
        <PageLogo />

        <main className="px-5 py-10 md:ml-[220px] md:px-14 md:py-16">
          <h1 className="text-3xl font-semibold">Post not found</h1>
          <Link to="/blog" className="mt-6 inline-block text-white/60 underline">
            Back to blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      <Sidebar />

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
        <article className="mx-auto max-w-3xl">
          <Link to="/blog" className="text-sm text-white/45 hover:text-white">
            ← Back to Blog
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.25em] text-white/35">
            {post.date}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {post.title}
          </h1>

          <div className="mt-12 space-y-7 text-base leading-8 text-white/65">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}