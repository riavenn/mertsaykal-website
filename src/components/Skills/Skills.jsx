import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import styles from "../Skills/Skills.module.css";

function Skills() {
  const skills = [
    {
      skill: "HTML",
      icon: <FaHtml5 />,
    },
    {
      skill: "CSS",
      icon: <FaCss3 />,
    },
    {
      skill: "Bootstrap",
      icon: <FaBootstrap />,
    },
    {
      skill: "JavaScript",
      icon: <IoLogoJavascript />,
    },
    {
      skill: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      skill: "React",
      icon: <FaReact />,
    },
    {
      skill: "Git",
      icon: <FaGitAlt />,
    },
    {
      skill: "Github",
      icon: <FaGithub />,
    },
    {
      skill: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
    },
  ];

  const skillText = (
    <span className="">
      <span className="text-cyan-400">{"< "}</span>
      <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
        Skills & Technologies
      </span>
      <span className="text-cyan-400">{" />"}</span>
    </span>
  );

  return (
    <div className="p-10 md:pt-30 md:px-30">
      <div className="text-xl md:text-4xl md:text-center mb-10 tracking-[1px] md:tracking-[5px]">
        {skillText}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center bg-[--card-background-color]">
        {skills.map((skill, index) => (
          <div key={index} className={styles.animatedBorderCard}>
            <div className="flex flex-col items-center gap-2 md:gap-4 p-5 z-10">
              <div className="text-xl md:text-2xl text-[var(--tertiary-color)]">
                {skill.icon}
              </div>
              <div className="text-xl text-center md:text-2xl text-white">
                {skill.skill}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
