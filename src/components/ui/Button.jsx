import { Link } from "react-router-dom";

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 ease-in-out focus-ring";

const variants = {
  primary:
    "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.65)]",
  ghost:
    "border border-primary/60 text-primary dark:text-primary-light hover:bg-primary hover:text-white",
  icon: "h-11 w-11 rounded-full border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  as = "button",
  to,
  href,
  ...props
}) {
  const classes = `${baseClass} ${variants[variant]} ${className}`.trim();

  if (as === "link" && to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
