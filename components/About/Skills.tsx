function Skills() {
  const skillList = [
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

  return (
    <section className="w-full flex flex-col p-20 border-b-2 border-solid border-dark text-dark">
      <span className="font-semibold text-4xl text-sky-700">Eu tenho experiencia com...</span>
      <ul className="flex flex-wrap mt-8 justify-start">
        {skillList.map((skill, index) => {
          return (
            <li key={index} className="font-semi inline-block capitalize text-2xl py-5 px-12 border-2 border-solid
             border-dark rounded mr-6 mb-6 hover:scale-110 transition-all ease duration-200 cursor-pointer ">
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Skills;
