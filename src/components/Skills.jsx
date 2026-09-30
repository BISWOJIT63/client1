import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

const categories = [
  ["01", "programming", "Programming"],
  ["02", "frontend", "Frontend"],
  ["03", "backend", "Backend"],
  ["04", "database", "Database"],
  ["05", "tools", "Tools"],
  ["06", "concepts", "Computer Science"],
];

function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Toolkit"
          title="Tools for turning ideas into reality."
          description="Technologies I am learning and working with as I grow into a well-rounded developer."
        />
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {categories.map(([number, category, label]) => (
            <SkillCard
              key={category}
              number={number}
              category={category}
              label={label}
              skills={portfolioData.skills[category]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
