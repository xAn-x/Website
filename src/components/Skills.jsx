const areas = [
  {
    label: "01 / intelligence",
    title: "ML & GenAI",
    details: "PyTorch · TensorFlow · LangGraph · Hugging Face · OpenCV",
  },
  {
    label: "02 / infrastructure",
    title: "AWS & Web",
    details:
      "Bedrock · Glue · Lambda · Node.js · Next.js · learning Go",
  },
  {
    label: "03 / throughput",
    title: "Data engineering",
    details: "PySpark · Python · AWS Glue · SQS · SNS · Aurora",
  },
  {
    label: "04 / personal patch",
    title: "Football & code",
    details: "Football · Coffee · Music · Linux",
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="toolkit" aria-labelledby="toolkit-title">
      <div className="skills-inner site-shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03 / what&apos;s in the kit</p>
            <h2 id="toolkit-title">
              A little bit of everything.
              <br />
              <em>On purpose.</em>
            </h2>
          </div>
          <p className="section-description">
            I like working where software meets infrastructure, data, and
            whatever problem needs solving.
          </p>
        </div>

        <div className="skill-board">
          {areas.map((area) => (
            <article className="skill-column" key={area.label}>
              <span>{area.label}</span>
              <h3>{area.title}</h3>
              <p>{area.details}</p>
            </article>
          ))}
        </div>
        <div className="arch-note">
          <pre aria-hidden="true">
{` /\\
/  \\
/__\\`}
          </pre>
          <span>My dotfiles have opinions. I use Arch, btw.</span>
        </div>
      </div>
    </section>
  );
}
