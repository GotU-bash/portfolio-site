const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              width: Math.random() * 5 + "px",
              height: Math.random() * 5 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleBackground;
