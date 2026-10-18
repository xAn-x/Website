import { socials } from "@/utils/links";

const featuredSocials = socials.filter(({ name }) =>
  ["Github", "LinkedIn", "Gmail"].includes(name),
);

export default function Socials() {
  return (
    <section
      className="contact-section site-shell"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-copy">
        <p className="section-kicker">04 / your move</p>
        <h2 id="contact-title">Bring me a good problem. Or a good match.</h2>
        <p>
          Open to interesting engineering conversations, side-project rabbit
          holes, and friendly arguments about football.
        </p>
      </div>
      <div className="contact-links">
        {featuredSocials.map((social) => {
          const isEmail = social.link.startsWith("mailto:");
          return (
            <a
              key={social.name}
              href={social.link}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
            >
              {social.name} <span aria-hidden="true">↗</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
