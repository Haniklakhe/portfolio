import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import ProjectCard from "../components/ui/ProjectCard";
import SEOHead from "../components/ui/SEOHead";
import SectionTitle from "../components/ui/SectionTitle";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

const filters = ["All", "Research", "Consulting"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <SEOHead
        title={`Projects | ${profile.name}`}
        description="Explore projects across web, research, and data domains."
      />

      <section className="section-shell bg-white dark:bg-slate-900">
        <div className="section-inner">
          <SectionTitle
            label="// PROJECTS"
            heading="Recent projects"
            subtitle="Research and consulting projects derived from the CV, organized by focus area."
          />

          <div className="mb-8 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
