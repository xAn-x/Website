const contributions = [
  {
    type: "GenAI / PySpark",
    glyph: "↝",
    title: "Making legacy jobs make sense.",
    description:
      "Built a tool that condenses Boomi XML into a clear English explanation, then uses LangGraph and an LLM to iteratively generate a PySpark job. A test-driven loop targets a 95% pass threshold before handing the result to a developer for feedback.",
  },
  {
    type: "Transcribe / Analyze",
    glyph: "〰",
    title: "Turning conversations into signals.",
    description:
      "Built a multi-threaded flow pairing Amazon Transcribe with batched LLM analysis. It turns call recordings into structured JSON with transcription and sentiment data for downstream analysis, at a scale of 20M recordings.",
  },
  {
    type: "Big data / Events",
    glyph: "⤳",
    title: "Keeping data moving.",
    description:
      "Worked on PySpark data workflows and helped architect event-driven pipelines—thinking through how data moves, what triggers the next step, and how the pieces fit together.",
  },
];

export default function Experience() {
  return (
    <section
      className="section site-shell"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div>
          <p className="section-kicker">01 / TCS · systems engineer</p>
          <h2 id="experience-title">
            Serious systems.
            <br />
            <em>Interesting</em> problems.
          </h2>
        </div>
        <p className="section-description">
          A few projects from my day job: generative AI, conversation
          intelligence, and data systems. Project details are kept high-level.
        </p>
      </div>

      <div className="experience-grid">
        {contributions.map((contribution, index) => (
          <article className="experience-card" key={contribution.title}>
            <div className="experience-topline">
              <span className="experience-index">PROJECT 0{index + 1}</span>
              <span className="experience-type">{contribution.type}</span>
            </div>
            <span className="experience-glyph" aria-hidden="true">
              {contribution.glyph}
            </span>
            <h3>{contribution.title}</h3>
            <p>{contribution.description}</p>
            <div className="experience-footer">
              <strong>TCS / Systems Engineer</strong>
              <span>↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
