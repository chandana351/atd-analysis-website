import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, serviceRequired, projectDetails } = req.body;

    if (!name || !email || !serviceRequired || !projectDetails) {
      return res.status(400).json({ message: "Name, email, service, and project details are required." });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: "Database is not connected. Please configure MongoDB and try again." });
    }

    const contact = await Contact.create(req.body);
    await sendNotification(contact);

    return res.status(201).json({ message: "Contact request submitted successfully.", contactId: contact._id });
  } catch (error) {
    console.error("Contact route error:", error.message);
    return res.status(500).json({ message: "Unable to submit contact request. Please try again later." });
  }
});

async function sendNotification(contact) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL_FROM, CONTACT_EMAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL_TO) {
    console.warn("Email settings are incomplete. Submission saved without email notification.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: CONTACT_EMAIL_FROM || SMTP_USER,
    to: CONTACT_EMAIL_TO,
    subject: `New ATD quote request: ${contact.serviceRequired}`,
    html: `
      <h2>New ATD Analysis quote request</h2>
      <p><strong>Name:</strong> ${escapeHtml(contact.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(contact.company || "Not provided")}</p>
      <p><strong>Email:</strong> ${escapeHtml(contact.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(contact.phone || "Not provided")}</p>
      <p><strong>Country:</strong> ${escapeHtml(contact.country || "Not provided")}</p>
      <p><strong>Service:</strong> ${escapeHtml(contact.serviceRequired)}</p>
      <p><strong>Project Details:</strong></p>
      <p>${escapeHtml(contact.projectDetails)}</p>
    `
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default router;
