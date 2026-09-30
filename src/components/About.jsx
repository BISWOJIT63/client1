import { BookOpen, GraduationCap, MapPin, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const details = [
  { label: "Location", value: portfolioData.personal.location, Icon: MapPin },
  { label: "Education", value: "MCA", Icon: GraduationCap },
  {
    label: "University",
    value: portfolioData.personal.university,
    Icon: BookOpen,
  },
  { label: "Role", value: "Aspiring Software Developer", Icon: UserRound },
];

function About() {
  return (
    <section className="section section--border" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="01 / About"
          title="A curious mind, building with purpose."
          description="A little context about the person behind the pixels and the code."
        />
        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="lead">
              Hi, I'm Sritam Sahoo, an MCA student from Tichhini, Krushnaprasad,
              Puri, Odisha. I am currently pursuing my Master of Computer
              Applications at Maharaja Sriram Chandra Bhanja Deo University.
            </p>
            <p>
              I enjoy building web applications, learning data structures and
              algorithms, and exploring modern software development
              technologies. I care about the details that make digital
              experiences feel clear, useful and human.
            </p>
            <div className="about-signature">
              <span>Currently</span>
              <strong>
                learning in public<span className="accent-dot">.</span>
              </strong>
            </div>
          </motion.div>
          <div className="detail-grid">
            {details.map(({ label, value, Icon }, index) => (
              <motion.div
                className="detail-card"
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <Icon size={18} />
                <div>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
