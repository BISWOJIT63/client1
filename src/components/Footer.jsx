import { ArrowUp, Heart } from "lucide-react";
import portfolioData from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a className="brand" href="#home">
            <span className="brand-mark">S</span>
            <span>{portfolioData.personal.name.toUpperCase()}</span>
          </a>
          <p>
            MCA Student <span>&bull;</span> Aspiring Software Developer
          </p>
        </div>
        <SocialLinks compact />
        <a className="back-top" href="#home" aria-label="Back to top">
          <ArrowUp size={16} />
        </a>
      </div>
      <div className="container footer-bottom">
        <span>&copy; 2026 Sritam Sahoo. All rights reserved.</span>
        <span>
          Made with <Heart size={13} /> curiosity.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
