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
      <div className="relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
        <div className="aspect-[16/10] bg-gradient-to-br from-slate-950 via-primary to-accent p-6 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.1),transparent_30%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.22em] text-white/75">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-white/75">{project.role}</p>
              <p className="text-lg font-semibold text-white/95">Research project preview</p>
            </div>
          </div>
        </div>
      </div>

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
        {project.role ? <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{project.role}</p> : null}
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
