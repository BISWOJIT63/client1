import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function Education() {
  const education = portfolioData.education[0];
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Education"
          title="The foundation is still being built."
          description="A focused path through computer applications and software development."
        />
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="education-icon">
            <GraduationCap size={27} />
          </div>
          <div className="education-main">
            <span className="card-label">Current focus</span>
            <h3>{education.course}</h3>
            <p>{education.institution}</p>
            <div className="education-location">
              <MapPin size={15} />
              {education.location}
            </div>
          </div>
          <div className="education-status">
            <span className="status-dot" />
            {education.status}
            <ArrowUpRight size={17} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
