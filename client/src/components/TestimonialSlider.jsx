import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

export default function TestimonialSlider({ testimonials }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (index) => setActive((index + testimonials.length) % testimonials.length);
  const visible = [0, 1, 2].map((offset) => testimonials[(active + offset) % testimonials.length]);

  return (
    <div className="relative mt-12">
      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => goTo(active - 1)}
        className="focus-ring absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-navy text-white shadow-soft transition hover:bg-sky lg:grid"
      >
        <FaChevronLeft />
      </button>

      <div className="overflow-hidden px-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {visible.map(([quote, company, country]) => (
              <div key={`${company}-${country}`} className="rounded-lg bg-white p-7 shadow-soft">
                <div className="flex gap-1 text-amber">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <p className="mt-5 min-h-32 leading-8 text-slate-600">"{quote}"</p>
                <p className="mt-6 font-black text-navy">{company}</p>
                <p className="text-sm font-bold text-sky">{country}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => goTo(active + 1)}
        className="focus-ring absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-navy text-white shadow-soft transition hover:bg-sky lg:grid"
      >
        <FaChevronRight />
      </button>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => goTo(active - 1)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow-sm lg:hidden"
        >
          <FaChevronLeft />
        </button>
        {testimonials.map(([, company], index) => (
          <button
            key={company}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-3 rounded-full transition-all ${
              active === index ? "w-8 bg-amber" : "w-3 bg-slate-300 hover:bg-sky"
            }`}
          />
        ))}
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => goTo(active + 1)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow-sm lg:hidden"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
