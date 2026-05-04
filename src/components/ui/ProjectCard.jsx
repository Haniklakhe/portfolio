import { motion } from "framer-motion";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="card-surface relative overflow-hidden"
    >
      <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:text-primary-light">
            {project.category}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-300">
            {project.year}
          </span>
        </div>

        <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p
          className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500 dark:text-indigo-300"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} source code`}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all duration-300 hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300"
            >
              <RiGithubLine className="text-lg" />
            </a>
          ) : null}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all duration-300 hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300"
            >
              <RiExternalLinkLine className="text-lg" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
