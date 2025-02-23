import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 snap-start bg-gray-800 relative"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl font-bold mb-8 text-white">Let's Connect 🤝</h2>
        <p className="text-gray-100 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:cs.benyo2006@gmail.com"
            className="text-gray-200 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/cskbence/"
            className="text-gray-200 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/GotU-bash"
            className="text-gray-200 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
        <footer className="mt-20 text-gray-200">
          <p>© {new Date().getFullYear()} Bence Csík. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
