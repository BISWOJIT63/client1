import { ArrowUpRight, ExternalLink, Globe } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card project-card--${project.accent}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="project-visual">
        <div className="project-visual-glow" />
        <div className="mini-browser">
          <div className="mini-browser-bar">
            <i />
            <i />
            <i />
            <span>{String(index + 1).padStart(2, "0")} / project</span>
          </div>
          <pre>{project.code}</pre>
        </div>
        <span className="project-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="project-content">
        <span className="card-label">
          Featured project / {String(index + 1).padStart(2, "0")}
        </span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={project.github}
            aria-label={`${project.title} GitHub repository`}
          >
            <Globe size={16} /> GitHub
          </a>
          <a href={project.live} aria-label={`${project.title} live demo`}>
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
