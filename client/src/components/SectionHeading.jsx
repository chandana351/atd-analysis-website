export default function SectionHeading({ eyebrow, title, text, align = "center", tone = "light" }) {
  const dark = tone === "dark";

  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}>
      <p className={`eyebrow ${dark ? "text-sky-200" : ""}`}>{eyebrow}</p>
      <h2 className={`heading ${dark ? "text-white" : ""}`}>{title}</h2>
      {text && <p className={`body-copy mt-5 ${dark ? "text-slate-300" : ""}`}>{text}</p>}
    </div>
  );
}
