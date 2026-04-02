"use client";

import { useEffect, useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  goal: "",
};

export default function DemoModal({ open, onClose }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setMessage("");
      setFieldErrors({});
      setForm(initialState);
    }
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || "Please review the form and try again.");
        setFieldErrors(data.errors || {});
        return;
      }

      setStatus("success");
      setMessage("Request sent. We saved your details and will follow up shortly.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("The demo service is temporarily unavailable.");
    }
  }

  if (!open) {
    return null;
  }

  return (
    <div className="modal-shell" role="dialog" aria-modal="true" aria-labelledby="demo-title">
      <button type="button" className="modal-backdrop" onClick={onClose} aria-label="Close modal" />
      <div className="modal-card">
        <div className="modal-topline">
          <span className="eyebrow">Book a demo</span>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <h2 id="demo-title">See Kyle.ai in action</h2>
        <p>
          Send a request and we’ll save it through the Next.js backend so the form actually works end to end.
        </p>

        <form className="demo-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              value={form.name}
              onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
              autoComplete="name"
            />
            {fieldErrors.name ? <small>{fieldErrors.name[0]}</small> : null}
          </label>

          <label>
            <span>Email</span>
            <input
              value={form.email}
              onChange={(event) => setForm((value) => ({ ...value, email: event.target.value }))}
              autoComplete="email"
              type="email"
            />
            {fieldErrors.email ? <small>{fieldErrors.email[0]}</small> : null}
          </label>

          <label>
            <span>Company</span>
            <input
              value={form.company}
              onChange={(event) => setForm((value) => ({ ...value, company: event.target.value }))}
              autoComplete="organization"
            />
            {fieldErrors.company ? <small>{fieldErrors.company[0]}</small> : null}
          </label>

          <label className="full-width">
            <span>What are you trying to improve?</span>
            <textarea
              rows="4"
              value={form.goal}
              onChange={(event) => setForm((value) => ({ ...value, goal: event.target.value }))}
            />
            {fieldErrors.goal ? <small>{fieldErrors.goal[0]}</small> : null}
          </label>

          {message ? <div className={`form-status ${status}`}>{message}</div> : null}

          <div className="modal-actions">
            <button type="button" className="ghost-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="primary-button" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Request Demo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
