import { Link } from "react-router-dom";
import { RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { profile } from "../../data/profile";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { key: "github", href: profile.socials.github, icon: RiGithubLine, label: "GitHub" },
  { key: "linkedin", href: profile.socials.linkedin, icon: RiLinkedinBoxLine, label: "LinkedIn" },
  {
    key: "googleScholar",
    href: profile.socials.googleScholar,
    icon: SiGooglescholar,
    label: "Google Scholar",
  },
  {
    key: "researchGate",
    href: profile.socials.researchGate,
    icon: SiResearchgate,
    label: "ResearchGate",
  },
  { key: "twitter", href: profile.socials.twitter, icon: RiTwitterXLine, label: "Twitter" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-700">
      <div className="section-shell">
        <div className="section-inner grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-heading text-sm font-bold text-white">
              {profile.initials}
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900">{profile.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{profile.subtitle}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-600">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link className="focus-ring hover:text-primary-light" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-600">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socials
                .filter((social) => social.href)
                .map(({ key, href, icon: Icon, label }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-all duration-300 hover:border-primary hover:text-primary"
                  >
                    <Icon />
                  </a>
                ))}
            </div>
          </div>
        </div>

        <div className="section-inner mt-12 border-t border-slate-100 pt-6 text-sm text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>Copyright {year} {profile.name}. All rights reserved.</p>
            <p>Built with React & ❤</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
