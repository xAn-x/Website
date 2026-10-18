import FocusCard from "./FocusCard";

export default function Profile() {
  return (
    <section className="hero site-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Software engineer · here for the interesting problems</p>
        <h1 id="hero-title">
          I build systems
          <span>
            that <em>hold up.</em>
          </span>
        </h1>
        <p className="hero-intro">
          I&apos;m drawn to machine learning, backend engineering, and AWS. The
          fun is turning promising ideas into systems people can rely on.
        </p>
        <p className="hero-personal">
          Off the clock, I&apos;m usually catching a match or making coffee.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#experience">
            See what I&apos;ve built{" "}
            <span className="button-arrow" aria-hidden="true">
              ↓
            </span>
          </a>
          <a
            className="button-secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            The résumé <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-art" aria-label="Professional and personal interests">
        <div className="hero-index" aria-hidden="true">
          <span>AREAS OF INTEREST</span>
          <span>01 — 03</span>
        </div>
        <FocusCard />
        <p className="hero-art-caption">
          A few things I keep{" "}
          <span className="hero-art-caption-tail">
            coming back to
            <span className="hero-art-mark" aria-hidden="true">
              ✦
            </span>
          </span>
        </p>
      </div>
    </section>
  );
}
