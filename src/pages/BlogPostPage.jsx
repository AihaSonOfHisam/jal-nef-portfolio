import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { blogPosts } from "../data/blogData";
import PageLogo from "../components/PageLogo";
import PageLoader from "../components/PageLoader";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <PageLoader delay={500} fadeDuration={500}>
        <div className="min-h-screen bg-[#1f1f1f] text-white">
          <Sidebar />
          <PageLogo />

          <main className="px-5 pt-28 pb-16 md:px-14 md:pt-32 md:pb-20">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-semibold">Post not found</h1>

              <Link
                to="/blog"
                className="mt-6 inline-block text-white/60 underline"
              >
                Back to blog
              </Link>
            </div>
          </main>
        </div>
      </PageLoader>
    );
  }

  return (
    <PageLoader delay={600} fadeDuration={500}>
      <div className="min-h-screen bg-[#1f1f1f] text-white">
        <Sidebar />
        <PageLogo />

        <main className="px-5 pt-28 pb-16 md:px-14 md:pt-32 md:pb-20">
          <article className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="text-sm text-white/45 transition hover:text-white"
            >
              ← Back to Blog
            </Link>

            <p className="mt-10 text-xs uppercase tracking-[0.25em] text-white/35">
              {post.date}
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {post.title}
            </h1>

            {post.image && (
  post.tiktokUrl ? (
    <a
      href={post.tiktokUrl}
      target="_blank"
      rel="noreferrer"
      className="group mt-10 block overflow-hidden border border-white/10 bg-black"
    >
      <div className="relative aspect-video">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-50"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border border-white/30 bg-black/60 px-6 py-3 text-xs uppercase tracking-[0.25em] text-white transition group-hover:bg-white group-hover:text-black">
            Watch on TikTok
          </div>
        </div>
      </div>
    </a>
  ) : (
    <div className="mt-10 overflow-hidden border border-white/10 bg-black">
      <img
        src={post.image}
        alt={post.title}
        className="h-auto w-full object-cover"
      />
    </div>
  )
)}

            {/* {post.tiktokUrl && (
              <div className="mt-8">
                <a
                  href={post.tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.22em] text-white/60 transition hover:border-white hover:bg-white hover:text-black"
                >
                  Watch on TikTok
                </a>
              </div>
            )} */}

            <div className="mt-12 space-y-7 text-base leading-8 text-white/65">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        </main>
      </div>
    </PageLoader>
  );
}