const roles = [
  {
    company: "TCS",
    title: "Systems Engineer",
    period: "Current",
    highlights: [
      {
        glyph: "↝",
        title: "Modernizing Boomi jobs with PySpark",
        technologies: "LangGraph · AWS Bedrock · PySpark",
        description:
          "Used LangGraph and AWS Bedrock to interpret legacy Boomi XML and generate PySpark replacements. An automated test loop targets a 95% pass rate before engineer review; the workflow cut migration timelines from months to weeks.",
      },
      {
        glyph: "〰",
        title: "Analyzing 20M call recordings",
        technologies: "Amazon Transcribe · AWS Glue · AWS Bedrock",
        description:
          "Built a multithreaded pipeline to transcribe and analyze 20M call recordings, producing structured transcripts and sentiment data for downstream use.",
      },
      {
        glyph: "⤳",
        title: "Big data & event-driven pipelines",
        technologies: "AWS Glue · PySpark · Lambda · SQS · SNS · Aurora",
        description:
          "Worked on ETL jobs with AWS Glue and PySpark, plus event-driven pipelines using Lambda, SQS, and SNS to coordinate data processing across services.",
      },
    ],
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
          <p className="section-kicker">01 / experience</p>
          <h2 id="experience-title">
            Systems in
            <br />
            <em>production.</em>
          </h2>
        </div>
        <p className="section-description">
          Good developers break production. Great ones know where the logs are.
          Bad ones never make it past staging.
        </p>
      </div>

      <div className="experience-timeline">
        {roles.map((role) => (
          <article className="timeline-role" key={`${role.company}-${role.title}`}>
            <header className="timeline-role-header">
              <div>
                <h3>{role.company}</h3>
                <p>{role.title}</p>
              </div>
              <span className="timeline-period">{role.period}</span>
            </header>
            <ul className="timeline-highlights">
              {role.highlights.map((highlight) => (
                <li className="timeline-highlight" key={highlight.title}>
                  <span className="timeline-glyph" aria-hidden="true">
                    {highlight.glyph}
                  </span>
                  <div className="timeline-highlight-heading">
                    <h4>{highlight.title}</h4>
                    <span>{highlight.technologies}</span>
                  </div>
                  <p>{highlight.description}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
