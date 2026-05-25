import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section-padding section-shell pt-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="heading">Page not found</h1>
      <Link to="/" className="mt-8 inline-flex rounded-md bg-sky px-6 py-4 font-black text-white">
        Return Home
      </Link>
    </section>
  );
}
