import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { RiArrowDownLine, RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import Button from "../components/ui/Button";
import ProjectCard from "../components/ui/ProjectCard";
import SectionTitle from "../components/ui/SectionTitle";
import SEOHead from "../components/ui/SEOHead";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

const roles = [
  "Researcher", // ✏️ EDIT
  "Developer", // ✏️ EDIT
  "Problem Solver", // ✏️ EDIT
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

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");

  const featuredSkills = useMemo(
    () => [...skills.technical, ...skills.research, ...skills.tools].slice(0, 6),
    [],
  );
  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), []);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = 0;

    const interval = setInterval(() => {
      i += 1;
      setTyped(current.slice(0, i));
      if (i >= current.length) {
        clearInterval(interval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTyped("");
        }, 1200);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <>
      <SEOHead
        title={`${profile.name} | Portfolio`}
        description="Personal portfolio featuring projects, skills, resume, and contact details."
      />

      <section className="relative flex min-h-screen items-center overflow-hidden px-4">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.24),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.2),transparent_30%),radial-gradient(circle_at_75%_80%,rgba(99,102,241,0.15),transparent_40%)] bg-[length:180%_180%] animate-aurora"
          aria-hidden="true"
        />

        <div className="section-inner text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-4xl"
          >
            {profile.availability ? (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-600 dark:text-green-400">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                <span>{profile.availability}</span>
              </div>
            ) : null}

            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{profile.title}</p>
            <h1 className="font-heading text-5xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text sm:text-6xl md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 min-h-8 text-xl text-slate-700 dark:text-slate-200">
              {typed}
              <span className="ml-1 animate-pulse">|</span>
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-slate-600 dark:text-slate-300">{profile.bio}</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button as="link" to="/projects" variant="primary">
                View My Work
              </Button>
              <Button as="a" href={profile.cvUrl} target="_blank" rel="noreferrer" variant="ghost">
                Download CV
              </Button>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              {socials
                .filter((social) => social.href)
                .map(({ key, href, icon: Icon, label }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all duration-300 hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300"
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
            </div>
          </motion.div>

          <a
            href="#about-preview"
            className="focus-ring absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-primary"
            aria-label="Scroll to about section"
          >
            <RiArrowDownLine className="animate-bounce2 text-3xl" />
          </a>
        </div>
      </section>

      <section id="about-preview" className="section-shell bg-white dark:bg-slate-900">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="section-inner grid items-center gap-12 md:grid-cols-2"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-r from-primary to-accent opacity-40 blur-2xl" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full rounded-[2rem] border border-slate-200 object-cover dark:border-slate-700"
            />
          </div>
          <div>
            <SectionTitle
              label="// ABOUT ME"
              heading="A Curious Builder With Research Discipline"
              subtitle="I blend engineering fundamentals with practical product design to ship work that feels intentional."
            />
            <p className="text-slate-600 dark:text-slate-300">{profile.bio}</p>
            <div className="mt-6">
              <Button as="link" to="/about" variant="ghost">
                Read Full Story
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-shell bg-slate-50 dark:bg-slate-800/50">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="section-inner"
        >
          <SectionTitle
            label="// FEATURED SKILLS"
            heading="Core Competencies"
            subtitle="A compact snapshot of the tools and capabilities I rely on most."
          />
          <div className="flex flex-wrap gap-3">
            {featuredSkills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-500 dark:text-indigo-300"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-shell bg-white dark:bg-slate-900">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="section-inner"
        >
          <SectionTitle
            label="// FEATURED PROJECTS"
            heading="Selected Work"
            subtitle="A few projects that represent my technical depth and product instincts."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button as="link" to="/projects" variant="ghost">
              View All Projects
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
