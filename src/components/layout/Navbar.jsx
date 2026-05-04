import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiCloseLine, RiMenu3Line, RiMoonLine, RiSunLine } from "react-icons/ri";
import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `relative py-2 text-sm font-medium transition-colors ${
    isActive ? "text-primary" : "text-slate-700 hover:text-primary dark:text-slate-200"
  }`;

function NavItem({ to, label, onClick }) {
  return (
    <NavLink to={to} onClick={onClick} className={linkClass}>
      {({ isActive }) => (
        <span className="group inline-flex flex-col items-center">
          {label}
          <span
            className={`mt-1 h-[2px] rounded-full bg-primary transition-all duration-300 ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
          {isActive ? <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shadow-glow" /> : null}
        </span>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md bg-white/70 dark:bg-slate-900/70 transition-all duration-300 ${
        isScrolled
          ? "border-slate-200 shadow-md shadow-slate-200/50 dark:border-slate-800 dark:shadow-black/20"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4">
        <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-xl p-1">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-heading text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="font-heading text-lg font-bold text-slate-900 dark:text-white">{profile.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="focus-ring relative inline-flex h-10 w-20 items-center rounded-full border border-slate-200 bg-white px-1 dark:border-slate-700 dark:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            <motion.span
              layout
              transition={{ duration: 0.25 }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
              style={{ marginLeft: isDark ? "2.5rem" : "0" }}
            >
              {isDark ? <RiMoonLine /> : <RiSunLine />}
            </motion.span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {open ? <RiCloseLine className="text-xl" /> : <RiMenu3Line className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-8 shadow-2xl dark:bg-slate-900 md:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-heading text-2xl font-bold">Menu</span>
              <button
                type="button"
                className="focus-ring rounded-lg border border-slate-300 p-2 dark:border-slate-700"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <RiCloseLine className="text-xl" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <NavItem key={link.to} {...link} onClick={() => setOpen(false)} />
              ))}
            </nav>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
