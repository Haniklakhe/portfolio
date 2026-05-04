import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import SEOHead from "../components/ui/SEOHead";
import SectionTitle from "../components/ui/SectionTitle";
import { profile } from "../data/profile";
import { education } from "../data/resume";

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
            heading="Who I Am"
            subtitle="A brief profile covering my background, values, and career direction."
          />

          <div className="grid items-start gap-12 md:grid-cols-[340px_1fr]">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary to-accent p-[2px]">
                <div className="h-full w-full rounded-[2rem] bg-white dark:bg-slate-900" />
              </div>
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative z-10 h-full w-full rounded-[2rem] object-cover"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="space-y-6"
            >
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

              <Button as="a" href={profile.cvUrl} target="_blank" rel="noreferrer" variant="primary">
                Download CV
              </Button>
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
                    U
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
              label="// INTERESTS"
              heading="Current Interests"
              subtitle="Fields and domains that motivate my work and curiosity."
            />
            <div className="flex flex-wrap gap-3">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-500 dark:text-indigo-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
