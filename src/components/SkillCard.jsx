import {
  Braces,
  Database,
  GitBranch,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

const icons = {
  programming: Braces,
  frontend: Layers3,
  backend: Server,
  database: Database,
  tools: GitBranch,
  concepts: Terminal,
};

function SkillCard({ number, category, label, skills }) {
  const Icon = icons[category];
  return (
    <motion.article
      className="skill-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="skill-card-top">
        <span className="skill-number">{number}</span>
        <Icon size={19} />
      </div>
      <h3>{label}</h3>
      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </motion.article>
  );
}

export default SkillCard;
