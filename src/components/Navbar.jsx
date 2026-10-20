const sections = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Selected work" },
  { href: "#toolkit", label: "Skills & tools" },
];

export default function Navbar() {
  return (
    <nav className="site-nav site-shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Deepanshu Bhatt, home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M5 10 4.8 4.5 10 7.1a8.6 8.6 0 0 1 4 0L19.2 4.5 19 10a7.2 7.2 0 0 1 1.7 4.5c0 3.8-3.5 6-8.7 6s-8.7-2.2-8.7-6A7.2 7.2 0 0 1 5 10Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 13.2h.01m7 0h.01m-4 2.3 1 .7-1 .7"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>Deepanshu Bhatt</span>
      </a>

      <div className="nav-links">
        {sections.map((section) => (
          <a key={section.href} href={section.href}>
            {section.label}
          </a>
        ))}
      </div>

      <a className="nav-contact" href="#contact">
        Get in touch <span aria-hidden="true">↗</span>
      </a>

      <details className="nav-mobile">
        <summary aria-label="Open navigation menu">
          <span aria-hidden="true">☰</span>
        </summary>
        <div className="nav-mobile-links">
          {sections.map((section) => (
            <a key={section.href} href={section.href}>
              {section.label}
            </a>
          ))}
          <a href="#contact">Contact</a>
        </div>
      </details>
    </nav>
  );
}
