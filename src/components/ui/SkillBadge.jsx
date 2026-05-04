import { motion } from "framer-motion";
import { RiCodeSSlashLine } from "react-icons/ri";
import {
  SiCplusplus,
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiLatex,
  SiLinux,
  SiMysql,
  SiNumpy,
  SiOctave,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTypescript,
  SiVscodium,
} from "react-icons/si";

const iconMap = {
  SiPython,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiNumpy,
  SiTensorflow,
  SiLatex,
  SiOctave,
  SiGit,
  SiVscodium,
  SiVisualstudiocode: SiVscodium,
  SiDocker,
  SiLinux,
  SiFigma,
};

export default function SkillBadge({ skill, isVisible }) {
  const Icon = iconMap[skill.icon] || RiCodeSSlashLine;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="text-lg" />
          </span>
          <h4 className="font-medium text-slate-900 dark:text-slate-100">{skill.name}</h4>
        </div>
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{skill.level}%</span>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
}
