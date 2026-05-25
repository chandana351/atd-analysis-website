import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { services } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="section-padding section-shell pt-32">
        <h1 className="heading">Service not found</h1>
        <Link to="/" className="mt-6 inline-flex font-black text-sky">
          Back to home
        </Link>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <section className="bg-white pt-28">
      <div className="section-shell section-padding grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 font-black text-sky">
            <FaArrowLeft /> Back to services
          </Link>
          <Icon className="mt-10 text-5xl text-amber" />
          <p className="eyebrow mt-6">Service Detail</p>
          <h1 className="heading">{service.title}</h1>
          <p className="body-copy mt-6">{service.details}</p>
          <div className="mt-8 grid gap-3">
            {[
              "Client-defined vehicle classes and intervals",
              "Two-level QA review before delivery",
              "Excel, CSV, PDF, or template-based reporting",
              "Scalable support for pilot and bulk projects"
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 font-bold text-slate-700">
                <FaCheckCircle className="text-sky" /> {item}
              </p>
            ))}
          </div>
          <a
            href="/#contact"
            className="mt-9 inline-flex rounded-md bg-amber px-6 py-4 font-black text-white transition hover:bg-orange-600"
          >
            Request This Service
          </a>
        </div>
        <img src={service.image} alt={service.title} className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft" />
      </div>
    </section>
  );
}
