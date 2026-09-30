import { Check, CircleUserRound, Globe, Mail, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }
  const cards = [
    { label: "Email", value: "Send a message", href: "#contact", Icon: Mail },
    {
      label: "GitHub",
      value: "View my code",
      href: portfolioData.social.github,
      Icon: Globe,
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: portfolioData.social.linkedin,
      Icon: CircleUserRound,
    },
  ];
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="06 / Contact"
          title="Let's build something together."
          description="Have a project idea, collaboration opportunity, or just want to connect? Feel free to reach out."
        />
        <div className="contact-grid">
          <div className="contact-info">
            {cards.map(({ label, value, href, Icon }) => (
              <a className="contact-card" key={label} href={href}>
                <span className="contact-icon">
                  <Icon size={19} />
                </span>
                <span>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </span>
                <span className="contact-arrow">&#8599;</span>
              </a>
            ))}
          </div>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me a little about your idea..."
                required
              />
            </label>
            <button className="button button--primary" type="submit">
              {submitted ? (
                <>
                  Message ready to send <Check size={17} />
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
            {submitted && (
              <p className="form-note" role="status">
                Thanks. This local demo validated your message; connect an email
                service here when ready.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
