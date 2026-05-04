export default function SectionTitle({ label, heading, subtitle }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-primary">{label}</p>
      <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
        {heading}
      </h2>
      <div className="mt-4 h-[3px] w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-slate-500 dark:text-slate-400">{subtitle}</p>
      ) : null}
    </div>
  );
}
