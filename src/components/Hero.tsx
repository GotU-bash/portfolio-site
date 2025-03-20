import { CircuitBoard } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start bg-gray-900 relative">
      <div className="text-center z-10">
        <CircuitBoard className="w-16 h-16 mx-auto mb-8 text-blue-400" />
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
          Hi, I'm <span className="text-blue-400">Bence Csík</span> 👋
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8">
          Developer 🔌 & DevOps Engineer 💻
        </p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
        >
          Get in Touch ✉️
        </a>
      </div>
    </section>
  );
};

export default Hero;
