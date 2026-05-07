import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PageLogo from "../components/PageLogo";
import PageLoader from "../components/PageLoader";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meengwgp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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

      <main className="px-5 pt-24 pb-20 md:px-14 md:pt-28 md:pb-24">
        <section className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Let’s work together.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
            For photography, videography, collaborations, or creative projects,
            send me a message directly through this form.
          </p>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/40">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-white/10 bg-transparent px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/40"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/40">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-white/10 bg-transparent px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/40"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/40">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="7"
                className="w-full resize-none border border-white/10 bg-transparent px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/40"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="border border-white px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-white/60">
                Message sent successfully. Thank you.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-300">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>

          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">
              Social
            </p>

            <div className="mt-5 flex flex-wrap gap-6 text-sm uppercase tracking-[0.2em] text-white/50">
              <a
                href="https://instagram.com/jal.nef"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://tiktok.com/@jal.nef"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                TikTok
              </a>

              <a
                href="https://youtube.com/@aiha7331"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                YouTube
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
    </PageLoader>
  );
}