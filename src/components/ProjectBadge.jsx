import Image from "next/image";

export default function ProjectBadge({ project, category }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <Image
          src={project.banner}
          alt=""
          fill
          unoptimized={project.banner.endsWith(".gif")}
          sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
      </div>
      <div className="project-body">
        <p className="project-category">{category}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.link}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
