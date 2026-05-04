import { Link } from "react-router-dom";
import SEOHead from "../components/ui/SEOHead";
import Button from "../components/ui/Button";
import { profile } from "../data/profile";

export default function NotFound() {
  return (
    <>
      <SEOHead title={`404 | ${profile.name}`} description="Page not found." />

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative z-10 text-center">
          <h1 className="font-heading text-8xl font-extrabold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text md:text-9xl">
            404
          </h1>
          <p className="mt-4 text-2xl font-semibold text-slate-800 dark:text-slate-100">Oops! Page not found.</p>
          <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Button as="link" to="/" variant="primary">
              Take Me Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
