const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex items-center px-4 sm:px-6 lg:px-8 snap-start bg-gray-900 relative"
    >
      <div className="max-w-4xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          About Me 🎯
        </h2>
        <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
          <p className="text-gray-100 mb-4">
            I'm a passionate student pursuing a dual focus in Electrical
            Engineering and Programming. With a strong foundation in both
            hardware and software, I bring a unique perspective to solving
            complex technical challenges.
          </p>
          <p className="text-gray-100">
            Currently exploring the intersection of embedded systems and
            software development, I'm always eager to learn new technologies and
            contribute to innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
