import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-svh py-20 text-[#C9D1D9] px-4"
      style={{
        background: "linear-gradient(135deg, #0D1117 0%, #1F6FEB 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4 md:px-10 lg:px-16 ">
        <div className="relative w-[250px] lg:w-[380px] xl:w-[500px] lg:rounded-3xl rounded-full overflow-hidden bg-gradient-to-br from-[#1F6FEB]/30 to-[#0D1117]/80 p-[6px] backdrop-blur-lg shadow-xl hover:shadow-blue-600/30 transition-shadow duration-300">
          {/* <div className="bg-[#161B22] rounded-2xl overflow-hidden p-2 shadow-inner shadow-black/40"> */}
            <Image
              src="/portfolio_pic.jpg"
              width={500}
              height={500}
              alt="Khushbu Kumari profile picture"
              className="lg:rounded-xl object-cover w-full h-full rounded-full"
              priority={true}
            />
          {/* </div> */}
        </div>
        <div className="max-w-xl flex justify-center flex-wrap text-center lg:flex-1 lg:justify-start lg:text-left">
          <h1 className="text-4xl xl:text-5xl font-bold py-5">
            I'm <span className="text-[#58A6FF]">Khushbu Kumari</span>, MERN Stack Developer.
          </h1>
          <p className="text-base md:text-lg leading-8 text-[#8B949E] mb-6">
            I build modern, scalable, and responsive web applications using the MERN stack. Passionate about delivering clean code, intuitive UI/UX, and robust backend systems. Always exploring new technologies and best practices to solve real-world problems.
          </p>

          <div className="flex gap-4 my-6 font-semibold ">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#58A6FF] text-[#0D1117] py-2 px-6 rounded-lg cursor-pointer hover:bg-transparent hover:text-[#58A6FF] hover:border-[#58A6FF] border border-transparent transition-colors duration-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border-[#58A6FF] py-2 px-6 border rounded-lg cursor-pointer hover:bg-[#58A6FF] hover:text-[#0D1117] transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

