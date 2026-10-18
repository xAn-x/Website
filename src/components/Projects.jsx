import ProjectBadge from "./ProjectBadge";
import { deep_learning_projects } from "@/utils/projects";

const personalProjects = [
  {
    project: deep_learning_projects[0],
    category: "Football analytics · Computer vision",
    description:
      "A computer-vision take on the penalty spot: tracking players and the ball, reading possession, and separating teams by kit color to make shootouts easier to analyze.",
  },
  {
    project: deep_learning_projects[3],
    category: "Machine learning · Language models",
    description:
      "A from-scratch tour of language modeling—from a tiny bigram model to a transformer. Built to understand what is happening inside the model, one token at a time.",
  },
  {
    project: deep_learning_projects[2],
    category: "Computer vision · Model building",
    description:
      "An evolving collection of vision architectures, including autoencoders and GANs, implemented to learn the ideas behind the models rather than only call an API.",
  },
];

export default function Projects() {
  return (
    <section
      className="section site-shell"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="section-kicker">02 / after hours</p>
          <h2 id="work-title">
            Side quests.
            <br />
            <em>Serious curiosity.</em>
          </h2>
        </div>
        <p className="section-description">
          Football analytics, language models, and the internals of computer
          vision. Different projects; same urge to find out how things work.
        </p>
      </div>

      <div className="project-grid">
        {personalProjects.map(({ project, category, description }) => (
          <ProjectBadge
            key={project.name}
            project={{ ...project, description }}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}
