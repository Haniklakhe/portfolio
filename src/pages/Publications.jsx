import SEOHead from "../components/ui/SEOHead";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { profile } from "../data/profile";
import { publications } from "../data/resume";

function renderAuthors(authors) {
  const pattern = /(Lakhe,\s?H\.?)/g;
  const parts = authors.split(pattern);

  return parts.map((part, index) =>
    /^Lakhe,\s?H\.?$/.test(part) ? (
      <strong key={`${part}-${index}`} className="font-semibold text-slate-900 dark:text-white">
        {part}
      </strong>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

export default function Publications() {
  const journalPapers = publications.filter((publication) => publication.year >= "2020");

  return (
    <>
      <SEOHead
        title={`Publications | ${profile.name}`}
        description="Selected publications, conference proceedings, and scholarly outputs from the CV."
      />

      <section className="section-shell bg-white dark:bg-slate-900">
        <div className="section-inner">
          <SectionTitle
            label="// PUBLICATIONS"
            heading="Selected publications"
            subtitle="Peer-reviewed papers and conference outputs from the CV, with my name highlighted in the author lists."
          />

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <div className="card-surface p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Total outputs</p>
              <p className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-white">{publications.length}</p>
            </div>
            <div className="card-surface p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Recent years</p>
              <p className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-white">2020+</p>
            </div>
            <div className="card-surface p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Focus</p>
              <p className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-white">Water research</p>
            </div>
          </div>

          <div className="grid gap-5">
            {journalPapers.map((publication) => (
              <article key={publication.id} className="card-surface p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      {publication.year}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{publication.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {renderAuthors(publication.authors)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {publication.journal}
                    </span>
                    {publication.link ? (
                      <Button as="a" href={publication.link} target="_blank" rel="noreferrer" variant="ghost">
                        Open link
                      </Button>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}