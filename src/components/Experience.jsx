import { ArrowUpRight, BrainCircuit, Code2, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const icons = [Code2, BrainCircuit, Layers3];

function Experience() {
  return (
    <section className="section section--tint" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="05 / The journey"
          title="Learning by doing, one layer at a time."
          description="No shortcuts or inflated titles, just steady progress and useful things built along the way."
        />
        <div className="journey-list">
          {portfolioData.journey.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                className="journey-item"
                key={item.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="journey-marker">
                  <Icon size={18} />
                </div>
                <div className="journey-copy">
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <ArrowUpRight className="journey-arrow" size={18} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
