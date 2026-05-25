import { useState } from "react";
import { FaPaperPlane, FaUpload } from "react-icons/fa";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  serviceRequired: "",
  projectDetails: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your request..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit the request.");
      setStatus({ type: "success", message: "Thanks. Your quote request has been received." });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again."
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg bg-white p-5 shadow-soft sm:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" name="name" value={form.name} onChange={updateField} required />
        <Field label="Company" name="company" value={form.company} onChange={updateField} />
        <Field label="Email" name="email" type="email" value={form.email} onChange={updateField} required />
        <Field label="Phone" name="phone" value={form.phone} onChange={updateField} />
        <Field label="Country" name="country" value={form.country} onChange={updateField} />
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Service Required
          <select
            name="serviceRequired"
            value={form.serviceRequired}
            onChange={updateField}
            className="focus-ring rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-900"
            required
          >
            <option value="">Select a service</option>
            <option>Turning Movement Counts</option>
            <option>Queue Length Studies</option>
            <option>Pedestrian & Cyclist Counts</option>
            <option>ANPR / Number Plate Surveys</option>
            <option>Parking Studies</option>
            <option>Speed & Volume Studies</option>
            <option>Gap & Headway Analysis</option>
            <option>Origin-Destination Studies</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Project Details
        <textarea
          name="projectDetails"
          value={form.projectDetails}
          onChange={updateField}
          rows="5"
          className="focus-ring resize-none rounded-md border border-slate-200 px-3 py-3 text-slate-900"
          required
        />
      </label>

      <div className="flex flex-col gap-3 rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-3 font-bold">
          <FaUpload className="text-sky" /> Upload file option
        </span>
        <span>Upload footage link or sample file details can be shared after submission.</span>
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-sky px-6 py-4 font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <FaPaperPlane />
        {status.type === "loading" ? "Submitting..." : "Submit Request"}
      </button>

      {status.message && (
        <p
          className={`rounded-md px-4 py-3 text-sm font-bold ${
            status.type === "success"
              ? "bg-emerald-50 text-emerald-700"
              : status.type === "error"
                ? "bg-red-50 text-red-700"
                : "bg-sky-50 text-sky"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, required = false }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-700">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="focus-ring rounded-md border border-slate-200 px-3 py-3 text-slate-900"
      />
    </label>
  );
}
