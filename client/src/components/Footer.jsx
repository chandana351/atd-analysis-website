import { Link } from "react-router-dom";
import { services } from "../data/services";
import velofitechLogo from "../assets/velofitech-logo.jpg";

const companyLinks = [
  ["About ATD", "/#about"],
  ["Why Choose Us", "/#why"],
  ["How It Works", "/#process"],
  ["Testimonials", "/#testimonials"],
  ["Contact", "/#contact"]
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={velofitechLogo} alt="VeloFiTech logo" className="h-20 w-auto rounded bg-white p-2" />
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Accurate, reliable traffic video data processing for consultancies and survey firms worldwide.
          </p>
        </div>

        <div>
          <h3 className="font-black">Company</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {companyLinks.map(([item, href]) => (
              <Link key={item} to={href} className="hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black">Services</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {services.slice(0, 5).map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm leading-7 text-slate-300">
            <p>praveena@accuratetrafficdata.com</p>
            <p>+91 94937 57230</p>
            <p>USA • UK • Australia • Ireland</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        Copyright © 2026 ATD Analysis. All Rights Reserved. Designed & Developed by Chandana
      </div>
    </footer>
  );
}
