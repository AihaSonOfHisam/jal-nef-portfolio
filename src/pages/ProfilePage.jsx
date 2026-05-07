import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PageLogo from "../components/PageLogo";
import PageLoader from "../components/PageLoader";

export default function ProfilePage() {
  return (
    <PageLoader delay={600} fadeDuration={500}>
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      <Sidebar />
      <PageLogo />

      <main className="px-5 py-24 md:px-14">
        <section className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            {/* Profile Image */}
            <div>
              <div className="overflow-hidden bg-neutral-900">
                <img
                  src="/images/profile/profile.jpg"
                  alt="Jal.nef profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-white/45">
                <a
                  href="https://instagram.com/jal.nef"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Instagram
                </a>

                <a
                  href="https://tiktok.com/@jal.nef"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  TikTok
                </a>

                <a
                  href="https://youtube.com/@aiha7331"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  YouTube
                </a>
              </div>
            </div>

            {/* Profile Info */}
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                Profile
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Behind jal.nef
              </h1>

              <p className="mt-8 text-base leading-8 text-white/65">
                Hi, my name is Aizal, and I am the person behind jal.nef. This is a visual portfolio focused
                on photography and videography. My work explores motorsports,
                wildlife, the moon, night sky, and cinematic mini
                vlog moments.
              </p>

              <p className="mt-5 text-base leading-8 text-white/65">
                I enjoy capturing scenes that feel atmospheric, emotional, and
                cinematic. Whether it is the speed of motorsports, the quiet
                detail of wildlife, or the calm beauty of the night sky, I want
                my visuals to feel clean, intentional, and memorable.
              </p>

              {/* Details */}
              <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Focus
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-white/60">
                    <li>Motorsports Photography</li>
                    <li>Wildlife Photography</li>
                    <li>Moon & Astro Photography</li>
                    <li>Cinematic Mini Vlogs</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Style
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-white/60">
                    <li>Dark & cinematic</li>
                    <li>Clean composition</li>
                    <li>Minimal storytelling</li>
                    <li>Atmospheric visuals</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Location
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Malaysia
                  </p>
                </div>

                {/* <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Contact
                  </p>
                  <a
                    href="mailto:yourname@email.com"
                    className="mt-4 block text-sm leading-7 text-white/60 transition hover:text-white"
                  >
                    yourname@email.com
                  </a>
                </div> */}
              </div>

              <div className="mt-12">
                <Link
                  to="/contact"
                  className="inline-flex border border-white/25 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white/70 transition hover:border-white hover:bg-white hover:text-black"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-5xl border-t border-white/10 pt-16">
            <div className="mb-12">
                <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                Gear
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                What I use.
                </h2>

                <p className="mt-5 max-w-4xl text-sm leading-7 text-white/50">
                A simple look at the camera gear, lenses, accessories, and editing tools
                I use for my work.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                {
                    category: "Camera Body",
                    items: ["Nikon Z30", "Nikon D7000", "Nikon D90"],
                },
                {
                    category: "Lens",
                    items: ["Nikon Z 16-50mm f/3.5-6.3", "Nikon AF-S 17-55mm f/2.8", "Nikon AF-S 18-105mm f/3.5-5.6", "Nikon AF 50mm f/1.8D"],
                },
                {
                    category: "Telephoto Lens",
                    items: ["Sigma 150-500mm f/5-6.3", "Nikon AF 70-300mm f/4-5.6G"],
                },
                {
                    category: "Support",
                    items: ["Tripod", "Ulanzi TB12 Monopod", "DJI RS3 Mini Gimbal"],
                },
                {
                    category: "Accessories",
                    items: ["2 camera bag", "2 memory cards", "1 extra battery", "Godox TT520 ii"],
                },
                {
                    category: "Software",
                    items: ["Adobe Lightroom", "CapCut", "Snapseed", "DaVinci Resolve"],
                },
                ].map((gear) => (
                <div
                    key={gear.category}
                    className="border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    {gear.category}
                    </p>

                    <div className="mt-5 space-y-3">
                    {gear.items.map((item) => (
                        <p key={item} className="text-sm leading-7 text-white/65">
                        {item}
                        </p>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            </section>
      </main>
    </div>
    </PageLoader>
  );
}