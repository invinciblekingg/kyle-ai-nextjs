"use client";

import Link from "next/link";
import { useState } from "react";
import DemoModal from "./demo-modal";
import Navbar from "./navbar";
import Reveal from "./reveal";

function Icon({ name }) {
  if (name === "analytics") {
    return (
      <svg fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="10" width="3" height="8" rx="1" />
        <rect x="8.5" y="6" width="3" height="12" rx="1" />
        <rect x="15" y="2" width="3" height="16" rx="1" />
      </svg>
    );
  }

  if (name === "growth") {
    return (
      <svg fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 3v4.5L4 14h12l-4-6.5V3M6 3h8" />
        <circle cx="10" cy="16" r="1.5" />
      </svg>
    );
  }

  if (name === "creative") {
    return (
      <svg fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 3l3 3-9 9-4 1 1-4 9-9z" />
        <path d="M12 5l3 3" />
      </svg>
    );
  }

  if (name === "projects") {
    return (
      <svg fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M7 10l2.5 2.5L13 8" />
      </svg>
    );
  }

  if (name === "rise") {
    return (
      <svg fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8">
        <polyline points="3,14 8,9 12,12 17,5" />
        <path d="M15 5h2v2" />
      </svg>
    );
  }

  if (name === "circle") {
    return (
      <svg fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8">
        <circle cx="10" cy="8" r="3" />
        <path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" />
        <circle cx="3.5" cy="10" r="2" />
        <circle cx="16.5" cy="10" r="2" />
      </svg>
    );
  }

  return (
    <svg fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="9" r="5" />
      <path d="M14.5 14.5L18 18" />
      <path d="M7 9h4M9 7v4" />
    </svg>
  );
}

export default function ProductPage({ product }) {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <Navbar onOpenDemo={() => setDemoOpen(true)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />

      <main className="page-shell product-page">
        <section className="product-hero">
          <Reveal className="product-hero-grid">
            <div>
              <div className="product-badge" style={{ background: product.iconBg, color: product.iconColor }}>
                <span className="product-icon-inline">
                  <Icon name={product.icon} />
                </span>
                {product.name}
              </div>
              <h1>
                <span className="accent-text">{product.tagline}</span>
              </h1>
              <p className="hero-text">{product.heroDesc}</p>
              <div className="hero-actions">
                <button type="button" className="primary-button" onClick={() => setDemoOpen(true)}>
                  Get Started Free
                </button>
                <a className="secondary-button" href="#features">
                  View Features
                </a>
              </div>
              <p className="micro-note">No credit card required.</p>
            </div>

            <div className="glass-card stat-card product-stat">
              <span className="section-kicker">{product.stat.label}</span>
              <h2 className="gradient-value" style={{ backgroundImage: product.gradientCSS }}>
                {product.stat.value}
              </h2>
              <p>{product.stat.desc}</p>
              <div className="product-stat-grid">
                {product.metrics.slice(0, 3).map((metric) => (
                  <div key={metric} className="product-stat-item">
                    <strong>{metric}</strong>
                    <span>system metric</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="features" className="section-block">
          <Reveal className="section-heading">
            <h2>What it does</h2>
            <p>Six core capabilities, fully integrated into a single workflow.</p>
          </Reveal>

          <div className="card-grid feature-grid">
            {product.features.map((feature, index) => (
              <Reveal key={feature.name} delay={index * 60}>
                <article className="feature-card">
                  <div className="product-card-top">
                    <div className="product-icon" style={{ background: product.iconBg, color: product.iconColor }}>
                      <svg fill="none" viewBox="0 0 18 18" stroke="currentColor" strokeWidth="2">
                        <path d="M9 2L15 9L9 16M3 9H15" />
                      </svg>
                    </div>
                    <span className="product-chip">Capability</span>
                  </div>
                  <h3>{feature.name}</h3>
                  <p>{feature.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-block soft-surface">
          <Reveal className="section-heading">
            <h2>Built for</h2>
            <p>Three personas. One platform.</p>
          </Reveal>

          <div className="card-grid persona-grid">
            {product.personas.map((person, index) => (
              <Reveal key={person.role} delay={index * 60}>
                <article className="persona-card">
                  <h3>{person.role}</h3>
                  <p>{person.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-block">
          <Reveal className="section-heading">
            <h2>How it works</h2>
            <p>Three steps. Fully automated.</p>
          </Reveal>

          <div className="steps-grid compact">
            {product.steps.map((step, index) => (
              <Reveal key={step} delay={index * 80}>
                <div className="step-card">
                  <div className="step-num">0{index + 1}</div>
                  <p>{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="metrics-band">
          <Reveal>
            <div className="metrics-grid compact">
              {product.metrics.map((metric) => (
                <div key={metric} className="metric-item">
                  <strong>{metric}</strong>
                  <span>headline metric</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="section-block">
          <Reveal>
            <div className="cta-banner">
              <div>
                <h3>Ready to {product.ctaAction}?</h3>
                <p>Start your free 14-day trial or book a demo if you want the team to walk you through the platform.</p>
              </div>
              <div className="cta-actions">
                <button type="button" className="primary-button" onClick={() => setDemoOpen(true)}>
                  Get Started Free
                </button>
                <Link className="secondary-button" href="/">
                  Back Home
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
