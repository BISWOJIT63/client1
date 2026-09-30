import { ArrowDownRight, ArrowRight, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

const floatingSkills = ["React", "Java", "JavaScript", "DSA"];

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="status-pill">
            <span className="status-dot" /> Available to learn, build &amp;
            collaborate
          </div>
          <p className="hero-kicker">
            <Sparkles size={15} /> Hello, I'm
          </p>
          <h1>
            {portfolioData.personal.name.split(" ").map((part) => (
              <span key={part}>{part}</span>
            ))}
          </h1>
          <p className="hero-role">
            MCA Student <span>&amp;</span> Aspiring Software Developer
          </p>
          <p className="hero-intro">{portfolioData.personal.intro}</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              View My Work <ArrowRight size={17} />
            </a>
            <a className="button button--ghost" href="#contact">
              Contact Me <ArrowDownRight size={17} />
            </a>
          </div>
          <SocialLinks />
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="terminal-window">
            <div className="terminal-bar">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>~/sritam/portfolio</span>
              <Code2 size={15} />
            </div>
            <div className="terminal-body">
              <div className="code-line">
                <span className="line-number">01</span>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span>{" "}
                <span className="code-muted">=</span>{" "}
                <span className="code-cyan">&#123;</span>
              </div>
              <div className="code-line code-indent">
                <span className="line-number">02</span>
                <span className="code-key">name:</span>{" "}
                <span className="code-string">"Sritam Sahoo"</span>
                <span className="code-muted">,</span>
              </div>
              <div className="code-line code-indent">
                <span className="line-number">03</span>
                <span className="code-key">focus:</span>{" "}
                <span className="code-string">"building things"</span>
                <span className="code-muted">,</span>
              </div>
              <div className="code-line code-indent">
                <span className="line-number">04</span>
                <span className="code-key">learning:</span>{" "}
                <span className="code-string">"every day"</span>
                <span className="code-muted">,</span>
              </div>
              <div className="code-line">
                <span className="line-number">05</span>
                <span className="code-cyan">&#125;</span>
              </div>
              <div className="code-line code-prompt">
                <span className="line-number">06</span>
                <span className="code-purple">return</span>{" "}
                <span className="code-blue">developer</span>
                <span className="cursor" />
              </div>
            </div>
          </div>
          <div className="hero-badge hero-badge--top">
            <span className="badge-icon">
              <Code2 size={15} />
            </span>{" "}
            clean code
          </div>
          <div className="hero-badge hero-badge--bottom">
            <span className="badge-icon badge-icon--green">&#10003;</span>{" "}
            always learning
          </div>
          {floatingSkills.map((skill, index) => (
            <motion.span
              key={skill}
              className={`floating-skill floating-skill--${index + 1}`}
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 3 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
