const sections = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Side quests" },
  { href: "#toolkit", label: "The kit" },
];

export default function Navbar() {
  return (
    <nav className="site-nav site-shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Deepanshu Bhatt, home">
        <span className="brand-mark" aria-hidden="true">
          DB
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
        Let&apos;s talk <span aria-hidden="true">↗</span>
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
