import { Menu, X } from "lucide-react";
import { useState } from "react";
import portfolioData from "../data/portfolioData";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">S</span>
          <span>{portfolioData.personal.name.toUpperCase()}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-panel${isOpen ? " nav-panel--open" : ""}`}>
          <div className="nav-links">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>
          <a
            className="button button--small button--outline"
            href="#contact"
            onClick={closeMenu}
          >
            Let's Talk
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
