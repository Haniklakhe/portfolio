import Button from "../components/ui/Button";
import SEOHead from "../components/ui/SEOHead";
import SectionTitle from "../components/ui/SectionTitle";
import TimelineItem from "../components/ui/TimelineItem";
import { profile } from "../data/profile";
import {
  awards,
  certifications,
  education,
  experience,
  publications,
} from "../data/resume";

const sections = [
  {
    key: "education",
    title: "Education",
    items: education,
    mapItem: (item) => ({
      title: item.degree,
      subtitle: `${item.institution} · ${item.location}`,
      period: item.period,
      description: `${item.description}${item.gpa ? ` GPA: ${item.gpa}` : ""}`,
      bullets: [],
      link: "",
    }),
  },
  {
    key: "experience",
    title: "Experience",
    items: experience,
    mapItem: (item) => ({
      title: item.role,
      subtitle: `${item.organization} · ${item.location}`,
      period: item.period,
      description: item.description,
      bullets: item.bullets || [],
      link: "",
    }),
  },
  {
    key: "publications",
    title: "Publications",
    items: publications,
    mapItem: (item) => ({
      title: item.title,
      subtitle: item.venue,
      period: "",
      description: "",
      bullets: [],
      link: item.link,
    }),
  },
  {
    key: "certifications",
    title: "Certifications",
    items: certifications,
    mapItem: (item) => ({
      title: item.name,
      subtitle: `${item.issuer} · ${item.year}`,
      period: item.year,
      description: "",
      bullets: [],
      link: item.link,
    }),
  },
  {
    key: "awards",
    title: "Awards",
    items: awards,
    mapItem: (item) => ({
      title: item.title,
      subtitle: `${item.issuer} · ${item.year}`,
      period: item.year,
      description: item.description,
      bullets: [],
      link: "",
    }),
  },
];

export default function Resume() {
  const visibleSections = sections.filter((section) => section.items.length > 0);

  return (
    <>
      <SEOHead
        title={`Resume | ${profile.name}`}
        description="Education, experience, publications, and achievements."
      />

      <section className="section-shell bg-white dark:bg-slate-900">
        <div className="section-inner">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <SectionTitle
              label="// RESUME"
              heading="Professional Timeline"
              subtitle="A structured view of education, work, and scholarly milestones."
            />
            <Button as="a" href={profile.cvUrl} target="_blank" rel="noreferrer" variant="primary">
              Download PDF CV
            </Button>
          </div>

          <div className="relative space-y-14 before:absolute before:left-2 before:top-0 before:h-full before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-primary before:to-accent">
            {visibleSections.map((section) => (
              <section key={section.key}>
                <h3 className="mb-6 pl-10 font-heading text-2xl font-bold text-primary">{section.title}</h3>
                <div className="space-y-6">
                  {section.items.map((item) => {
                    const mapped = section.mapItem(item);
                    return (
                      <TimelineItem
                        key={`${section.key}-${item.id}`}
                        title={mapped.title}
                        subtitle={mapped.subtitle}
                        period={mapped.period}
                        description={mapped.description}
                        bullets={mapped.bullets}
                        link={mapped.link}
                      />
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
