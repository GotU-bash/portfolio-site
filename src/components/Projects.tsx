import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Controller",
      description:
        "Arduino-based home automation system with mobile app control",
      tech: ["Arduino", "React Native", "IoT"],
      github: "#",
      live: "#",
    },
    {
      title: "PCB Design Tool",
      description: "Web-based PCB design and simulation platform",
      tech: ["React", "Node.js", "WebGL"],
      github: "#",
      live: "#",
    },
    {
      title: "FPGA Traffic Controller",
      description: "Traffic light system implemented on FPGA",
      tech: ["Verilog", "FPGA", "Digital Design"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 snap-start bg-gray-900 relative"
    >
      <div className="max-w-6xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Featured Projects 💡
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
