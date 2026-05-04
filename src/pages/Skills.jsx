import { motion } from "framer-motion";
import SEOHead from "../components/ui/SEOHead";
import SectionTitle from "../components/ui/SectionTitle";
import SkillBadge from "../components/ui/SkillBadge";
import useScrollReveal from "../hooks/useScrollReveal";
import { profile } from "../data/profile";
import { skills } from "../data/skills";

const categories = [
  { key: "technical", title: "Technical" },
  { key: "research", title: "Research Tools" },
  { key: "tools", title: "Platforms & Tools" },
];

export default function Skills() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  const allSkills = [...skills.technical, ...skills.research, ...skills.tools];
  const topSkill = allSkills.reduce((acc, cur) => (cur.level > acc.level ? cur : acc), allSkills[0]);

  return (
    <>
      <SEOHead
        title={`Skills | ${profile.name}`}
        description="Technical and research skill matrix with proficiency levels."
      />

      <section className="section-shell bg-white dark:bg-slate-900">
        <div className="section-inner">
          <SectionTitle
            label="// SKILLS"
            heading="Capability Matrix"
            subtitle="An overview of technical strengths, research tools, and day-to-day platforms."
          />

          <div className="mb-12 grid gap-4 sm:grid-cols-3">
            <div className="card-surface p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Total Skills</p>
              <p className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-white">{allSkills.length}</p>
            </div>
            <div className="card-surface p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Top Skill</p>
              <p className="mt-2 font-heading text-2xl font-bold text-slate-900 dark:text-white">{topSkill.name}</p>
            </div>
            <div className="card-surface p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Categories</p>
              <p className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-white">3</p>
            </div>
          </div>

          <div ref={ref} className="space-y-10">
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <h3 className="mb-5 font-heading text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {skills[category.key].map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} isVisible={isVisible} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
