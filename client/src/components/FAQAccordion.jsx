import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../data/faqs";

export default function FAQAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      {faqs.map((faq, index) => (
        <div key={faq.question}>
          <button
            type="button"
            onClick={() => setActive(active === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-black text-navy"
          >
            <span>{faq.question}</span>
            <FaChevronDown className={`shrink-0 transition ${active === index ? "rotate-180 text-amber" : ""}`} />
          </button>
          {active === index && <p className="px-5 pb-5 leading-7 text-slate-600">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
