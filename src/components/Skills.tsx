const Skills = () => {
  const skillCategories = [
    {
      title: "Programming 👨‍💻",
      skills: [
        { name: "C", level: 100 },
        { name: "Typescript", level: 85 },
        { name: "Javascript", level: 90 },
        { name: "Python", level: 75 },
      ],
    },
    {
      title: "Electrical ⚡",
      skills: [
        { name: "Circuit Design", level: 70 },
        { name: "PCB Layout", level: 65 },
        { name: "Microcontrollers", level: 60 },
        { name: "FPGA", level: 55 },
      ],
    },
    {
      title: "Web Development 🌐",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 100 },
        { name: "Tailwind", level: 70 },
      ],
    },
    {
      title: "Tools 🛠️",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 90 },
        { name: "MATLAB", level: 70 },
        { name: "Arduino", level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 snap-start bg-gray-800 relative"
    >
      <div className="max-w-6xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Skills & Expertise 🚀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="text-gray-100">
                    <div className="flex justify-between items-center">
                      <span>{skill.name}</span>
                      <span className="ml-2 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
