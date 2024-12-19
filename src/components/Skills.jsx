import SkillImg from "../assets/asset 2.png";

const Skills = () => {
  const skills = [
    { name: "Core Java", level: 84 },
    { name: "OOP", level: 80 },
    { name: "Spring Boot", level: 74 },
    { name: "Hibernate", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "Rest API", level: 60 },
    { name: "Git & GitHub", level: 60 },
    { name: "React", level: 75 },
    { name: "MySQL", level: 75 },
  ];

  return (
    <section
      id="skills"
      className="bg-white dark:bg-gray-900 py-10 px-6 md:py-20 md:px-20 flex flex-col md:flex-row items-center"
    >
      {/* Skills Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-8 text-purple-500 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-300">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={SkillImg}
          alt="Developer Illustration"
          className="w-3/4 md:w-full max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
};

export default Skills;
