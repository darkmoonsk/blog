import { translations } from "@/utils";
import { useLocale } from "next-intl";

function Skills() {
  const skillListPTBR = [
    "React",
    "Node.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "IA Generativa",
    "Web Design",
    "Firebase",
    "TailwindCSS",
    "Styled Components",
    "Animação Web",
  ];
  const skillListES = [
    "React",
    "Node.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "IA Generativa",
    "Diseño Web",
    "Firebase",
    "TailwindCSS",
    "Styled Components",
    "Animación Web",
  ];
  
  const locale = useLocale();
  const t = translations(locale).About;

  const skillList = locale === "pt-br" ? skillListPTBR : skillListES;

  return (
    <section data-testid="skills-section" className="w-full flex flex-col p-10 lg:p-20 border-b-2 border-solid border-dark dark:border-light text-dark dark:text-light">
      <span className="font-semibold text-2xl lg:text-4xl text-sky-700">{t.experience}</span>
      <ul className="flex flex-wrap mt-8 justify-center md:justify-start">
        {skillList.map((skill, index) => {
          return (
            <li key={index} className="font-semi inline-block capitalize text-lg md:text-xl lg:text-2xl py-2 px-6 md:px-10 lg:py-5 lg:px-12 border-2 border-solid
             border-dark dark:border-light rounded mr-4 mb-4  md:mr-6 md:mb-6 hover:scale-110 transition-all ease duration-200 cursor-pointer ">
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Skills;
