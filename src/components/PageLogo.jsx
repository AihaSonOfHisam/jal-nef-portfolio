import { Link } from "react-router-dom";

export default function PageLogo() {
  return (
    <div className="pointer-events-none fixed right-6 top-5 z-40">
      <Link to="/" className="pointer-events-auto block">
        <img
          src="/images/jalnef.png"
          alt="jal.nef logo"
          className="h-12 w-auto opacity-85 transition hover:opacity-100 md:h-14"
        />
      </Link>
    </div>
  );
}