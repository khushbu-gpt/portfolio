import React from "react";

const About = () => {
  return (
    <section
      className="bg-[#0D1117] text-[#C9D1D9] w-full lg:py-20 px-4 md:px-20 min-h-svh pt-20 pb-28"
    >
      <h2 className="text-center text-4xl font-bold mb-10">
        About <span className="text-[#58A6FF]">Me</span>
      </h2>

      <div
        className="
          max-w-3xl mx-auto 
          bg-[#161B22]/50 
          backdrop-blur-lg 
          border border-[#58A6FF] 
          rounded-3xl 
          p-10 
          shadow-xl shadow-black/40
        "
      >
        <h3 className="text-3xl font-bold text-[#58A6FF] mb-6 text-center">
          Hi, I'm Khushbu Kumari
        </h3>

        <p className="text-lg leading-relaxed text-[#8B949E] mb-4">
          I'm{" "}
          <span className="text-[#58A6FF] font-semibold">Khushbu Kumari</span>,
          a passionate and self-motivated{" "}
          <span className="text-[#58A6FF] font-semibold">
            Full Stack Developer
          </span>{" "}
          specializing in the{" "}
          <span className="text-[#8A63D2] font-semibold">MERN stack</span>{" "}
          (MongoDB, Express, React, Node.js). I love building clean,
          user-friendly web applications that solve real-world problems.
        </p>
        <p className="text-lg leading-relaxed text-[#8B949E] mb-4">
          I recently completed my B.A. and have spent the last year deeply
          focused on web development — learning by building. From designing
          responsive UIs with{" "}
          <span className="text-[#58A6FF] font-semibold">React</span> and{" "}
          <span className="text-[#58A6FF] font-semibold">Tailwind CSS</span> to
          building powerful APIs with{" "}
          <span className="text-[#58A6FF] font-semibold">Node.js</span> and{" "}
          <span className="text-[#58A6FF] font-semibold">MongoDB</span>, I love
          turning ideas into reality.
        </p>
        <p className="text-lg leading-relaxed text-[#8B949E]">
          I'm always eager to learn new technologies, contribute to exciting
          projects, and grow as a developer. Currently, I’m looking for a
          frontend or full stack role where I can make an impact, learn from a
          strong team, and build awesome things.
        </p>
      
      <div className=" text-center pt-5">
        <a
          href="/projects"
          className="inline-block bg-gradient-to-r from-[#58A6FF] to-[#8A63D2] hover:from-[#8A63D2] hover:to-[#58A6FF] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
        >
          See My Projects
        </a>
        </div>
      </div>
    </section>
  );
};

export default About;
