import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import SEOHead from "../components/ui/SEOHead";
import SectionTitle from "../components/ui/SectionTitle";
import { profile } from "../data/profile";
import { awards, education } from "../data/resume";
import { RiBookOpenLine, RiGlobalLine, RiMapPinLine } from "react-icons/ri";

const highlights = [
  { title: "Research base", value: profile.location, icon: RiMapPinLine },
  { title: "Primary focus", value: "Hydrology, GIS, and climate resilience", icon: RiGlobalLine },
  { title: "Approach", value: "Field data, models, and spatial analysis", icon: RiBookOpenLine },
];

export default function About() {
  return (
    <>
      <SEOHead
        title={`About | ${profile.name}`}
        description="Learn more about my background, interests, and goals."
      />

      <section className="section-shell bg-white dark:bg-slate-900">
        <div className="section-inner">
          <SectionTitle
            label="// ABOUT"
            heading="Who I am"
            subtitle="A concise profile built directly from the CV, including background, interests, and career direction."
          />

          <div className="grid items-start gap-12 lg:grid-cols-[320px_1fr]">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto w-full max-w-sm"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative z-10 h-full w-full rounded-[2rem] border border-slate-200 object-cover shadow-[0_24px_70px_-35px_rgba(15,23,42,0.5)] dark:border-slate-700"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="space-y-6"
            >
              <div className="card-surface p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Background</p>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{profile.bio}</p>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  Based in {profile.location}, I work at the intersection of hydrology, GIS, climate risk, and citizen science.
                </p>
              </div>

              {profile.longBio.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-slate-600 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}

              <div className="card-surface p-6">
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Career Goals</h3>
                <blockquote className="mt-4 border-l-4 border-primary pl-4 text-slate-600 dark:text-slate-300">
                  {profile.careerGoal}
                </blockquote>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button as="a" href={profile.cvUrl} target="_blank" rel="noreferrer" variant="primary">
                  Download CV
                </Button>
                <Button as="link" to="/publications" variant="ghost">
                  View Publications
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-50 dark:bg-slate-800/50">
        <div className="section-inner grid gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle
              label="// EDUCATION"
              heading="Academic Background"
              subtitle="Core education milestones and highlights."
            />
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.id} className="card-surface p-5">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold text-primary">
                    {item.id}
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{item.degree}</h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{item.institution}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
                  {item.gpa ? <p className="mt-2 text-sm text-primary">GPA: {item.gpa}</p> : null}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              label="// HIGHLIGHTS"
              heading="Quick facts"
              subtitle="A compact view of the themes that define the portfolio."
            />
            <div className="grid gap-4">
              {highlights.map(({ title, value, icon: Icon }) => (
                <div key={title} className="card-surface flex items-start gap-4 p-5">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
                    <p className="mt-1 font-medium text-slate-900 dark:text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 card-surface p-5">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Awards</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {awards.map((award) => (
                  <div key={award.id} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/50">
                    <p className="font-semibold text-slate-900 dark:text-white">{award.title}</p>
                    <p>{award.issuer} · {award.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
