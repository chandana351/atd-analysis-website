import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClipboardCheck,
  FaClock,
  FaDatabase,
  FaEnvelope,
  FaFileAlt,
  FaGlobeAmericas,
  FaHeadset,
  FaLock,
  FaPaperPlane,
  FaPhoneAlt,
  FaStar,
  FaUsers,
  FaVideo
} from "react-icons/fa";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import ContactForm from "../components/ContactForm.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TestimonialSlider from "../components/TestimonialSlider.jsx";
import { images } from "../data/images";
import { services } from "../data/services";

const stats = [
  [180, "+", "Staff Members"],
  [24, "/7", "Project Support"],
  [98, "%", "Accuracy Guaranteed"],
  [7, "+", "Years Experience"]
];

const whyCards = [
  ["98% Accuracy Guarantee", "Two levels of quality review, junction tie-in checks, and rework support when standards are not met.", FaCheckCircle],
  ["180+ Trained Staff", "A large dedicated team helps you take on high-volume traffic video processing without hiring internally.", FaUsers],
  ["Flexible Turnaround", "Need a rapid 24-hour delivery or a longer phased project? We align with your timeline.", FaClock],
  ["Customisable Deliverables", "Excel, PDF, CSV, and proprietary client templates prepared ready for final handover.", FaFileAlt],
  ["Cost-Effective Offshore Model", "Reduce processing costs while maintaining the quality expected by traffic-data clients.", FaHeadset],
  ["Global Coverage", "Support for companies across the USA, Canada, UK, Ireland, Europe, Australia, and New Zealand.", FaGlobeAmericas]
];

const uniqueCards = [
  ["Experienced analysts", FaUsers],
  ["Manual + quality checked extraction", FaClipboardCheck],
  ["Flexible reporting formats", FaFileAlt],
  ["Multi-country survey standards", FaGlobeAmericas],
  ["Secure data handling", FaLock],
  ["Scalable project capacity", FaDatabase]
];

const steps = [
  ["Send Your Video", "Upload traffic survey footage through secure file transfer and share requirements, templates, and deadlines."],
  ["We Process & Analyse", "Analysts extract, classify, and count traffic movements while QA teams check accuracy and completeness."],
  ["Receive Your Data", "Completed datasets are delivered in the format you need, ready to review and pass to your client."]
];

const overviewServices = [
  "Turning Movement Counts (TMC)",
  "Queue Length Studies",
  "Pedestrian & Cyclist Counts",
  "Speed & Volume Studies",
  "Gap & Headway Analysis",
  "Origin-Destination Studies"
];

const tickerServices = [
  "Gap & Headway Analysis",
  "Origin-Destination Studies",
  "Turning Movement Counts (TMC)",
  "Queue Length Studies",
  "Pedestrian & Cyclist Counts",
  "Speed & Volume Studies",
  "ANPR / Number Plate Surveys",
  "Parking Studies"
];

const testimonials = [
  [
    "ATD has been our offshore data processing partner for years. Their accuracy and turnaround times are consistently strong.",
    "Traffic Data Company",
    "United Kingdom"
  ],
  [
    "We increased project capacity without building a large internal processing team. ATD works like an extension of our operation.",
    "Transportation Consultancy",
    "Australia"
  ],
  [
    "Reliable, accurate, and flexible with our templates. They adapt quickly to each survey format we send.",
    "Data Collection Firm",
    "United States"
  ]
];

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const section = location.state?.scrollTo;
    if (!section) return;
    setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 50);
  }, [location.state]);

  return (
    <>
      <section id="hero" className="relative isolate overflow-hidden bg-navy pt-28 text-white">
        <div className="absolute inset-0 -z-10">
          <img src={images.hero} alt="City highway traffic at dusk" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
        </div>
        <div className="section-shell grid min-h-[760px] items-center gap-10 pb-20 lg:grid-cols-[1fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="eyebrow text-sky-200">Accurate Traffic Data</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Precision Traffic Data. Delivered Globally.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              ATD Analysis is your trusted offshore partner for video-based traffic data extraction, helping traffic-data
              companies deliver projects faster and at a lower operating cost.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="focus-ring rounded-md bg-amber px-7 py-4 text-center font-black text-white shadow-soft transition hover:bg-orange-600"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="focus-ring rounded-md border border-white/40 px-7 py-4 text-center font-black text-white transition hover:bg-white hover:text-navy"
              >
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg border-8 border-white/10 shadow-2xl">
              <img
                src={images.hero}
                alt="Aerial city intersection traffic analytics"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -left-3 top-8 rounded-lg bg-white p-4 text-navy shadow-soft sm:-left-7">
              <p className="text-3xl font-black">98%</p>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">QA Accuracy</p>
            </div>
            <div className="absolute -bottom-5 right-3 rounded-lg bg-sky p-4 text-white shadow-soft sm:right-8">
              <p className="text-3xl font-black">24/7</p>
              <p className="text-xs font-bold uppercase tracking-[0.16em]">Delivery Teams</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell -mt-10 relative z-10 grid gap-4 md:grid-cols-4">
        {stats.map(([value, suffix, label]) => (
          <AnimatedCounter key={label} value={value} suffix={suffix} label={label} />
        ))}
      </section>

      <section id="about" className="grid items-stretch bg-white lg:grid-cols-2">
        <div>
          <img src={images.about} alt="Traffic highway light trails" className="h-full min-h-[520px] w-full object-cover" />
        </div>
        <div className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <SectionHeading
            align="left"
            eyebrow="What We Do - Overview"
            title="Your offshore traffic data partner."
            text="At Accurate Traffic Data, we specialise in offshore traffic video data extraction and processing for survey and transport-data companies. We help teams across North America, the UK, Europe, Australia, and New Zealand process footage with precision, speed, and consistency."
          />
          <p className="body-copy mt-8">
            From turning movement counts to ANPR surveys, our team of 180+ experienced staff processes your
            traffic video footage with precision, speed, and consistency you can count on.
          </p>
        </div>
      </section>

      <section className="overflow-hidden bg-[#183467] py-5 text-white">
        <div className="ticker-track flex w-max items-center gap-12">
          {[...tickerServices, ...tickerServices].map((item, index) => (
            <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-4 text-sm font-black uppercase tracking-wide text-slate-200 sm:text-base">
              <span className="text-3xl leading-none text-sky">⌐</span>
              <span className="whitespace-nowrap">{item}</span>
              <span className="text-3xl leading-none text-sky">¬</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section-padding bg-white">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Services We Provide"
            title="Core Services"
            text="From intersection turning counts to number plate surveys, we process complex video studies in your required interval, class, and reporting format."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.slug}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-3 hover:border-amber hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <img src={service.image} alt={service.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-navy/0 transition duration-300 group-hover:bg-navy/20" />
                    <div className="absolute -bottom-6 left-5 grid h-12 w-12 place-items-center rounded bg-amber text-xl text-white shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-sky">
                      <Icon />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mt-7 text-xl font-black text-navy transition duration-300 group-hover:text-sky">{service.title}</h3>
                    <p className="mt-3 min-h-20 leading-7 text-slate-600">{service.summary}</p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-5 inline-flex rounded-md bg-navy px-4 py-3 text-sm font-black text-white transition hover:bg-sky"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why" className="section-padding section-shell">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why companies choose ATD."
          text="Built for traffic-data companies that need dependable processing capacity, accurate outputs, and scalable delivery."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map(([title, text, Icon]) => (
            <div key={title} className="group rounded-lg bg-white p-6 text-center shadow-soft transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mist text-2xl text-sky transition duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-amber group-hover:text-white">
                <Icon />
              </div>
              <h3 className="mt-4 text-xl font-black text-navy transition duration-300 group-hover:text-sky">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="unique" className="section-padding bg-navy text-white">
        <div className="section-shell">
          <SectionHeading
            eyebrow="What Makes Us Unique"
            title="Built around repeatable quality and flexible delivery."
            text="Our workflow is practical: clear instructions, careful manual extraction, documented checks, and outputs that fit your client handover."
            tone="dark"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {uniqueCards.map(([title, Icon]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <Icon className="text-3xl text-sky-200" />
                <h3 className="mt-4 text-xl font-black">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-padding section-shell">
        <SectionHeading eyebrow="Simple. Reliable. Scalable." title="How It Works" />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <img
            src={images.camera}
            alt="Traffic survey video processing"
            className="h-full min-h-80 rounded-lg object-cover shadow-soft"
          />
          <div className="grid gap-5">
            {steps.map(([title, text], index) => (
              <div key={title} className="rounded-lg bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-amber">Step {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-2xl font-black text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg bg-sky p-8 text-white shadow-soft">
            <FaStar className="text-4xl text-amber" />
            <h2 className="mt-5 text-3xl font-black">Quality data. Clear reports. Trusted delivery.</h2>
            <p className="mt-4 leading-8 text-sky-50">
              Our analysts work as an extension of your survey operation so your team can focus on clients,
              modelling, planning, and project delivery.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Video Review", FaVideo],
              ["QA Validation", FaClipboardCheck],
              ["Report Delivery", FaFileAlt]
            ].map(([label, Icon]) => (
              <div key={label} className="rounded-lg border border-slate-200 p-6 text-center">
                <Icon className="mx-auto text-3xl text-amber" />
                <p className="mt-4 font-black text-navy">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-slate-50 pt-16 pb-10 sm:pt-20 lg:pt-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Client Feedback" title="What Our Clients Say" />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#163d8f] py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.55)_1px,transparent_0)] [background-size:28px_28px]" />
        </div>
        <div className="pointer-events-none absolute -left-28 bottom-[-160px] h-80 w-80 rounded-full border border-white/15" />
        <div className="pointer-events-none absolute -right-24 top-[-150px] h-96 w-96 rounded-full border border-white/15" />

        <div className="section-shell text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/70 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em]">
            <FaStar className="text-amber" /> Work With Us
          </span>
          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Ready to Scale Your Data Processing?
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-blue-100">
            Partner with ATD Analysis and deliver more projects, faster - without compromising on quality.
          </p>

          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-5 text-lg font-black sm:flex-row">
            <span className="inline-flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
                <FaEnvelope />
              </span>
              praveena@accuratetrafficdata.com
            </span>
            <span className="hidden h-10 w-px bg-white/20 sm:block" />
            <span className="inline-flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
                <FaPhoneAlt />
              </span>
              +91 94937 57230
            </span>
          </div>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-3 rounded-md bg-white px-8 py-4 font-black text-navy shadow-soft transition hover:bg-amber hover:text-white"
            >
              <FaFileAlt /> Get a Free Quote
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-3 rounded-md border border-white/30 px-8 py-4 font-black text-white transition hover:bg-white hover:text-navy"
            >
              <FaPaperPlane /> Send Us a Test Project
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-mist">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact Us"
              title="Request a quote for your next traffic data project."
              text="Share your service type, timeline, country, and output format. Our team will review the details and respond with the next steps."
            />
            <div className="mt-8 grid gap-3 text-lg font-bold text-navy">
              <p>praveena@accuratetrafficdata.com</p>
              <p>+91 94937 57230</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section id="faq" className="section-padding section-shell">
        <SectionHeading eyebrow="FAQ" title="Common questions from survey and data teams." />
        <FAQAccordion />
      </section>
    </>
  );
}

