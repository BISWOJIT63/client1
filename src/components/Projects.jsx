import { ArrowUpRight } from "lucide-react";
import portfolioData from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="04 / Selected work"
            title="A few things I've been making."
            description="Placeholder projects with room to grow. The details are kept in one editable data file."
          />
          <a className="text-link" href="#contact">
            Start a conversation <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
