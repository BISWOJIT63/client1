import { CircleUserRound, Globe, Mail } from "lucide-react";
import portfolioData from "../data/portfolioData";

const socialItems = [
  { label: "GitHub", href: portfolioData.social.github, Icon: Globe },
  {
    label: "LinkedIn",
    href: portfolioData.social.linkedin,
    Icon: CircleUserRound,
  },
  { label: "Email", href: portfolioData.social.email, Icon: Mail },
];

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links${compact ? " social-links--compact" : ""}`}>
      {socialItems.map(({ label, href, Icon }) => (
        <a key={label} href={href} aria-label={label} title={label}>
          <Icon size={compact ? 17 : 19} strokeWidth={1.8} />
          {!compact && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
