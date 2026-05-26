import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTimes } from "react-icons/fa";
import velofitechLogo from "../assets/velofitech-logo.jpg";

const navItems = [
  ["Home", "hero"],
  ["About Us", "about"],
  ["Services", "services"],
  ["Why Choose Us", "why"],
  ["What Makes Us Unique", "unique"],
  ["How It Works", "process"],
  ["Contact Us", "contact"],
  ["FAQ", "faq"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-white/95 shadow-lg backdrop-blur" : "bg-white/85 backdrop-blur"
      }`}
    >
      <div className="hidden border-b border-slate-200 bg-navy py-2 text-sm text-white md:block">
        <div className="section-shell flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href="mailto:praveena@accuratetrafficdata.com"
              className="inline-flex items-center gap-2 transition hover:text-amber"
              aria-label="Send email to Accurate Traffic Data"
            >
              <FaEnvelope className="text-amber" /> praveena@accuratetrafficdata.com
            </a>
            <a
              href="tel:+919493757230"
              className="inline-flex items-center gap-2 transition hover:text-amber"
              aria-label="Call Accurate Traffic Data"
            >
              <FaPhoneAlt className="text-amber" /> +91 94937 57230
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-300">Follow Us :</span>
            <a
              href="https://www.facebook.com/p/Accurate-Traffic-data-100077389365553/"
              target="_blank"
              rel="noreferrer"
              aria-label="Accurate Traffic Data Facebook page"
              className="grid h-7 w-7 place-items-center rounded bg-white/10 transition hover:bg-amber"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/accurate-traffic-counts-inc-/"
              target="_blank"
              rel="noreferrer"
              aria-label="Accurate Traffic Counts LinkedIn page"
              className="grid h-7 w-7 place-items-center rounded bg-white/10 transition hover:bg-amber"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <nav className="section-shell flex h-20 items-center justify-between gap-3">
        <Link to="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <img src={velofitechLogo} alt="VeloFiTech logo" className="h-16 w-auto object-contain" />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-2 md:flex xl:gap-5">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => goToSection(id)}
              className="whitespace-nowrap text-[10px] font-bold text-slate-700 transition hover:text-sky lg:text-xs xl:text-sm"
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToSection("contact")}
            className="focus-ring hidden rounded-md bg-amber px-4 py-3 text-xs font-black text-white shadow-soft transition hover:bg-orange-600 lg:inline-flex xl:px-5 xl:text-sm"
          >
            Get A Quote
          </button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-md bg-navy text-white md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => goToSection(id)}
                className="rounded-md px-3 py-3 text-left text-sm font-bold text-slate-700 hover:bg-mist hover:text-sky"
              >
                {label}
              </button>
            ))}
            <NavLink
              to="/"
              onClick={() => goToSection("contact")}
              className="rounded-md bg-amber px-3 py-3 text-center text-sm font-black text-white"
            >
              Get A Quote
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
