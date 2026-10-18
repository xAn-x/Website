import AsciiSwitch from "./AsciiSwitch";

export default function Profile() {
  return (
    <section className="hero site-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">A systems engineer at TCS</p>
        <h1 id="hero-title">
          I like to know
          <span>
            what&apos;s <em>underneath.</em>
          </span>
        </h1>
        <p className="hero-intro">
          At TCS, I work on GenAI, PySpark, and event-driven data systems.
          I&apos;m especially drawn to backend engineering and AWS: how data
          moves, where things fail, and how to make them hold up.
        </p>
        <p className="hero-personal">
          Away from work, I&apos;m usually watching football, tinkering with
          Arch Linux, or making another coffee.
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
        <p className="hero-footnote">
          GenAI / PySpark / events / AWS / Arch, btw
        </p>
      </div>

      <div className="hero-art" aria-label="Personal interests, in terminal form">
        <div className="hero-index" aria-hidden="true">
          <span>FIELD NOTES</span>
          <span>VOL. 01 / 2026</span>
        </div>
        <AsciiSwitch />
        <p className="hero-art-caption">
          A few things I like when the laptop is closed
          <span aria-hidden="true"> ↘</span>
        </p>
      </div>
    </section>
  );
}
