import { useMemo, useState } from "react";
import { RiLinkedinBoxLine, RiMailLine, RiMapPinLine, RiPhoneLine, RiTwitterXLine } from "react-icons/ri";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import SEOHead from "../components/ui/SEOHead";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { profile } from "../data/profile";

const socials = [
  { key: "linkedin", href: profile.socials.linkedin, icon: RiLinkedinBoxLine, label: "LinkedIn" },
  {
    key: "googleScholar",
    href: profile.socials.googleScholar,
    icon: SiGooglescholar,
    label: "Google Scholar",
  },
  {
    key: "researchGate",
    href: profile.socials.researchGate,
    icon: SiResearchgate,
    label: "ResearchGate",
  },
  { key: "twitter", href: profile.socials.twitter, icon: RiTwitterXLine, label: "Twitter" },
];

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const availableSocials = useMemo(() => socials.filter((social) => social.href), []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {
      name: !form.name.trim(),
      email: !form.email.trim(),
      subject: !form.subject.trim(),
      message: !form.message.trim(),
    };

    const hasErrors = Object.values(nextErrors).some(Boolean);
    setErrors(nextErrors);

    if (hasErrors) return;

    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    const subject = encodeURIComponent(form.subject);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSuccess(true);
    setForm(initialForm);
  };

  const inputClass = (hasError) =>
    `focus-ring w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 dark:bg-slate-800 dark:text-slate-100 ${
      hasError
        ? "border-red-500"
        : "border-slate-200 dark:border-slate-700 focus-visible:border-primary"
    }`;

  return (
    <>
      <SEOHead
        title={`Contact | ${profile.name}`}
        description="Get in touch for collaborations, internships, and research opportunities."
      />

      <section className="section-shell bg-white dark:bg-slate-900">
        <div className="section-inner">
          <SectionTitle
            label="// CONTACT"
            heading="Get in touch"
            subtitle="Reach out for collaborations, research discussions, consulting opportunities, or speaking engagements."
          />

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="card-surface p-6">
                <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Contact info</h3>

                <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-300">
                  <a className="focus-ring inline-flex items-center gap-3 rounded-xl px-1 py-1 text-primary" href={`mailto:${profile.email}`}>
                    <RiMailLine />
                    <span>{profile.email}</span>
                  </a>
                  <p className="inline-flex items-center gap-3">
                    <RiPhoneLine />
                    <span>{profile.phone}</span>
                  </p>
                  <p className="inline-flex items-center gap-3">
                    <RiMapPinLine />
                    <span>{profile.location}</span>
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {availableSocials.map(({ key, href, icon: Icon, label }) => (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-glow dark:border-slate-700 dark:text-slate-300"
                    >
                      <Icon className="text-lg" />
                    </a>
                  ))}
                </div>

                <div className="mt-6">
                  <Button as="a" href={profile.cvUrl} target="_blank" rel="noreferrer" variant="ghost">
                    Download CV
                  </Button>
                </div>
              </div>

              <div className="card-surface p-6">
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Availability</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{profile.availability}</p>
              </div>
            </div>

            <div className="card-surface p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className={inputClass(errors.name)}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className={inputClass(errors.email)}
                    placeholder="your.email@example.com"
                    type="email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    className={inputClass(errors.subject)}
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    className={inputClass(errors.message)}
                    placeholder="Write your message"
                    rows={6}
                  />
                </div>

                <Button type="submit" variant="primary">
                  Send Message
                </Button>

                {success ? (
                  <p className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-400">
                    Your message draft is ready in your email client. Thanks for reaching out.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
