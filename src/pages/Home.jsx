import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiBookOpenLine,
  RiGlobalLine,
  RiMailLine,
  RiMapPinLine,
  RiFocus3Line,
} from "react-icons/ri";
import Button from "../components/ui/Button";
import ProjectCard from "../components/ui/ProjectCard";
import SectionTitle from "../components/ui/SectionTitle";
import SEOHead from "../components/ui/SEOHead";
import SkillBadge from "../components/ui/SkillBadge";
import TimelineItem from "../components/ui/TimelineItem";
import useScrollReveal from "../hooks/useScrollReveal";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { experience, publications } from "../data/resume";
import { skills } from "../data/skills";

const researchInterests = [
  {
    title: "Hydrology and flood modelling",
    description: "Future flood hazard mapping, water security frameworks, and climate-informed simulation work.",
    icon: RiGlobalLine,
  },
  {
    title: "GIS and spatial analysis",
    description: "ArcGIS, QGIS, and geospatial data preparation for service coverage, risk, and infrastructure studies.",
    icon: RiMapPinLine,
  },
  {
    title: "Citizen science and monitoring",
    description: "Field data, sensors, and participatory monitoring for rainfall, sediment, and water quality studies.",
    icon: RiBookOpenLine,
  },
  {
    title: "Climate resilience",
    description: "Multi-hazard assessment and adaptation planning for roads, rivers, and urban water systems.",
    icon: RiFocus3Line,
  },
];

const currentRoles = [
  {
    title: "Student Research Assistant",
    organization: "Global Water and Sanitation Center (GWSC)",
    description: "Prepares geospatial datasets, mapping outputs, and analysis for sanitation and urban water projects.",
    icon: RiMapPinLine,
  },
  {
    title: "MSc Thesis Researcher",
    organization: "Asian Institute of Technology",
    description: "Working on future flood hazard mapping under climate and land use change using LSTM and HEC-RAS.",
    icon: RiBookOpenLine,
  },
  {
    title: "GIS & Climate Risk Consultant",
    organization: "AIIB project under Dr. Srinivasan Ancha",
    description: "Delivered multi-hazard climate risk assessment outputs for Cambodian road infrastructure planning.",
    icon: RiGlobalLine,
  },
];

function PublicationPreview({ publication }) {
  const authorsPattern = /(Lakhe,\s?H\.?)/g;
  const parts = publication.authors.split(authorsPattern);

  return (
    <article className="card-surface p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{publication.year}</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{publication.title}</h3>
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{publication.journal}</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {parts.map((part, index) =>
          /^Lakhe,\s?H\.?$/.test(part) ? (
            <strong key={`${publication.id}-${index}`}>{part}</strong>
          ) : (
            <span key={`${publication.id}-${index}`}>{part}</span>
          ),
        )}
      </p>
    </article>
  );
}

export default function Home() {
  const skillsReveal = useScrollReveal({ threshold: 0.2 });
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const featuredPublications = publications.slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${profile.name} | Portfolio`}
        description="Academic portfolio featuring research interests, publications, projects, and contact details."
      />

      <section className="relative overflow-hidden px-4 pb-20 pt-16 md:pb-28 md:pt-24">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(18,50,74,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(15,118,110,0.14),transparent_30%),radial-gradient(circle_at_75%_80%,rgba(18,50,74,0.1),transparent_40%)] bg-[length:180%_180%] animate-aurora"
          aria-hidden="true"
        />

        <div className="section-inner grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl"
          >
            {profile.availability ? (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-700 dark:text-emerald-300">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                <span>{profile.availability}</span>
              </div>
            ) : null}

            <p className="mb-3 text-sm uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">Hello, my name is</p>
            <h1 className="max-w-3xl font-heading text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl md:text-7xl dark:text-white">
              {profile.name}
            </h1>
            <p className="mt-5 text-xl font-medium text-primary dark:text-primary-light">{profile.title}</p>
            <p className="mt-2 max-w-2xl text-lg text-slate-600 dark:text-slate-300">{profile.subtitle}</p>

            <p className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300">{profile.bio}</p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button as="link" to="/projects" variant="primary">
                View My Work
                <RiArrowRightLine />
              </Button>
              <Button as="a" href={profile.cvUrl} target="_blank" rel="noreferrer" variant="ghost">
                Download CV
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <a href={`mailto:${profile.email}`} className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 hover:border-primary hover:text-primary dark:border-slate-700">
                <RiMailLine />
                <span>{profile.email}</span>
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 dark:border-slate-700">
                <RiMapPinLine />
                <span>{profile.location}</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.5)] dark:border-slate-800 dark:bg-slate-900">
              <img src={profile.photo} alt={profile.name} className="h-[520px] w-full object-cover" />
              <div className="grid gap-4 border-t border-slate-100 p-6 sm:grid-cols-2 dark:border-slate-800">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Current focus</p>
                  <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">Hydrology, GIS, and climate resilience research</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Research base</p>
                  <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">AIT and applied field projects in Nepal, Thailand, and Cambodia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about-preview" className="section-shell bg-white dark:bg-slate-900">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="section-inner grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]"
        >
          <div>
            <SectionTitle
              label="// ABOUT ME"
              heading="Research grounded in field evidence"
              subtitle="I work across hydrology, GIS, and citizen science to turn environmental data into practical insight."
            />
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              {profile.longBio.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6">
              <Button as="link" to="/about" variant="ghost">
                Read Full Story
              </Button>
            </div>
          </div>

          <div className="card-surface p-6">
            <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">At a glance</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p>{profile.careerGoal}</p>
              <div className="flex flex-wrap gap-3">
                {profile.interests.map((interest) => (
                  <span key={interest} className="rounded-full bg-primary/10 px-3 py-2 font-medium text-primary dark:text-primary-light">
                    {interest}
                  </span>
                ))}
              </div>
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
            label="// RESEARCH INTERESTS"
            heading="Areas of focus"
            subtitle="The four themes that shape my research direction and project work."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {researchInterests.map(({ title, description, icon: Icon }) => (
              <div key={title} className="card-surface p-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
              </div>
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
            label="// CURRENT ROLES"
            heading="Standing commitments"
            subtitle="Research and consulting roles that define my current work."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {currentRoles.map(({ title, organization, description, icon: Icon }) => (
              <article key={title} className="card-surface p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm font-medium text-primary dark:text-primary-light">{organization}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
              </article>
            ))}
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
            label="// SKILLS"
            heading="Research toolkit"
            subtitle="A closer look at the capabilities that support my research and consulting work."
          />

          <div ref={skillsReveal.ref} className="space-y-10">
            {[
              { key: "technical", title: "Technical" },
              { key: "research", title: "Research" },
              { key: "tools", title: "Tools" },
            ].map((category) => (
              <div key={category.key}>
                <h3 className="mb-5 font-heading text-2xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {skills[category.key].map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} isVisible={skillsReveal.isVisible} />
                  ))}
                </div>
              </div>
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
            label="// EXPERIENCE"
            heading="Professional timeline"
            subtitle="Roles and collaborations that shaped my academic and applied research path."
          />

          <div className="relative space-y-14 before:absolute before:left-2 before:top-0 before:h-full before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-primary before:to-accent">
            {experience.map((item) => (
              <TimelineItem
                key={item.id}
                title={item.role}
                subtitle={`${item.organization} · ${item.location}`}
                period={item.period}
                description={item.description}
                bullets={item.bullets}
              />
            ))}
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
            label="// PROJECTS"
            heading="Recent projects"
            subtitle="A selection of research and consulting work that reflects the current focus of my portfolio."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button as="link" to="/projects" variant="ghost">
              View More Projects
            </Button>
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
            label="// PUBLICATIONS"
            heading="Recent scholarly output"
            subtitle="Selected publications and proceedings from the CV, with my name emphasized in the author list."
          />

          <div className="grid gap-5">
            {featuredPublications.map((publication) => (
              <PublicationPreview key={publication.id} publication={publication} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button as="link" to="/publications" variant="ghost">
              View More Publications
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="section-shell bg-slate-950 text-white">
        <div className="section-inner">
          <div className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-white/60">Get in touch</p>
              <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Interested in collaboration or research opportunities?</h2>
              <p className="mt-4 max-w-2xl text-white/75">
                I am open to research, consulting, and collaborative work in hydrology, GIS, climate risk, and water resources.
              </p>
            </div>
            <Button as="link" to="/contact" variant="primary" className="bg-white text-slate-950 hover:bg-slate-100">
              Contact Me
              <RiArrowRightLine />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
