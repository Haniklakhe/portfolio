import { motion } from "framer-motion";

export default function TimelineItem({ title, subtitle, period, description, bullets = [], link }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-6 h-4 w-4 rounded-full border-2 border-white bg-primary shadow-[0_0_0_6px_rgba(99,102,241,0.2)] dark:border-slate-900" />

      <motion.article
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="card-surface p-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
            {subtitle ? <p className="mt-1 text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
          </div>
          {period ? (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:text-primary-light">
              {period}
            </span>
          ) : null}
        </div>

        {description ? <p className="mt-4 text-slate-600 dark:text-slate-300">{description}</p> : null}

        {bullets.length ? (
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
          >
            View link
          </a>
        ) : null}
      </motion.article>
    </div>
  );
}
