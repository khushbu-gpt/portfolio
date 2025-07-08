import React from "react";
import { LayoutDashboard, Server, Layers } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    desc: "Craft pixel-perfect, responsive UIs with React and Next.js. Focused on accessibility, performance, and intuitive user experiences.",
    Icon: LayoutDashboard,
  },
  {
    title: "Backend Development",
    desc: "Design secure, scalable APIs using Node.js and Express. Database architecture with MongoDB and robust authentication systems.",
    Icon: Server,
  },
  {
    title: "Full-Stack Solutions",
    desc: "Deliver complete MERN applications from concept to deployment, integrating seamless frontend interfaces with powerful backends.",
    Icon: Layers,
  },
];

const page = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 lg:px-20  bg-gradient-to-br from-[#0D1117] to-[#1F6FEB] ">
      <h1 className="text-center text-4xl font-bold text-[#C9D1D9] lg:mb-14 mb-10">
        My <span className="text-[#58A6FF]">Services</span>
      </h1>

      <div className="flex flex-wrap gap-10 justify-center items-stretch h-full">
        {services.map(({ Icon, title, desc }, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between bg-[#161B22]/50 border border-[#30363D]/50 backdrop-blur-xl rounded-3xl p-10 max-w-sm w-full min-h-[480px] text-center shadow-2xl shadow-black/40 hover:border-[#58A6FF] hover:shadow-[#58A6FF]/30 transition-all duration-300 group"
          >
            <div>
              <div className="w-20 h-20 rounded-full bg-[#0D1117]/60 border border-[#30363D] flex items-center justify-center mx-auto mb-6 backdrop-blur-md shadow-inner shadow-black/20 group-hover:border-[#58A6FF] transition-all duration-300">
                <Icon size={40} className="text-[#58A6FF]" />
              </div>

              <h2 className="text-2xl font-bold text-[#C9D1D9] mb-4">
                {title}
              </h2>

              <p className="text-[#8B949E] mb-8 leading-relaxed">{desc}</p>
            </div>

            <button className="bg-[#58A6FF] text-[#0D1117] font-semibold px-6 py-3 rounded-xl hover:bg-transparent hover:text-[#58A6FF] hover:border-[#58A6FF] border-2 transition-all duration-300 ">
              Learn More
            </button>

            <div className="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-40 transition-all duration-300 pointer-events-none bg-gradient-to-br from-[#58A6FF]/20 to-transparent blur-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
