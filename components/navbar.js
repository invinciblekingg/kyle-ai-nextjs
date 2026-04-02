"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigationProducts } from "../lib/site-data";

function LogoMark() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" fill="currentColor" />
    </svg>
  );
}

export default function Navbar({ onOpenDemo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMobileOpen(false);
      }
    };

    const onClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="navbar-shell" ref={navRef}>
      <div className="navbar">
        <Link className="brand" href="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">
            <LogoMark />
          </span>
          <span>Kyle.ai</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          <div className="platform-trigger-wrap">
            <button
              type="button"
              className={`nav-link ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="platform-menu"
            >
              Platform
              <span className="caret">⌄</span>
            </button>

            <div id="platform-menu" className={`platform-menu ${menuOpen ? "open" : ""}`}>
              {navigationProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/platform/${product.id}`}
                  className="platform-card"
                  onClick={() => setMenuOpen(false)}
                >
                  <strong>{product.name}</strong>
                  <span>{product.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          <a className="nav-link" href="#suite">
            Solutions
          </a>
          <a className="nav-link" href="#pricing">
            Pricing
          </a>
          <a className="nav-link" href="#footer">
            Integrations
          </a>
        </nav>

        <div className="nav-actions">
          <a className="ghost-button" href="#footer">
            Sign In
          </a>
          <button type="button" className="primary-button" onClick={onOpenDemo}>
            Get Started Free
          </button>
          <button
            type="button"
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-group-title">Platform</div>
          {navigationProducts.map((product) => (
            <Link
              key={product.id}
              href={`/platform/${product.id}`}
              className="mobile-link"
              onClick={closeMobile}
            >
              {product.name}
            </Link>
          ))}

          <div className="divider" />

          <a className="mobile-link" href="#suite" onClick={closeMobile}>
            Solutions
          </a>
          <a className="mobile-link" href="#pricing" onClick={closeMobile}>
            Pricing
          </a>
          <a className="mobile-link" href="#footer" onClick={closeMobile}>
            Integrations
          </a>

          <div className="divider" />

          <button
            type="button"
            className="mobile-link button-link"
            onClick={() => {
              closeMobile();
              onOpenDemo();
            }}
          >
            Get Started Free
          </button>
        </div>
      </div>
    </header>
  );
}
