import { projectsDetails } from "@/data/projectsDetails";
import { Github } from "lucide-react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full  px-4 md:px-16 lg:px-24 bg-gradient-to-br from-[#0D1117] to-[#1F6FEB]  text-[#C9D1D9] min-h-svh md:py-20 pt-20 pb-28">
      <h2 className="text-center text-3xl md:text-4xl font-bold lg:mb-14 mb-10">
        My <span className="text-[#58A6FF]">Projects</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto xl:grid-cols-3">
        {projectsDetails.map((project, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col bg-[#0D1117] rounded-2xl overflow-hidden shadow-lg shadow-black/50 hover:shadow-[#58A6FF]/40 transition-all duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} Screenshot`}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
              />
            </div>

            <div className="flex flex-col flex-grow p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#C9D1D9] group-hover:text-[#58A6FF] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[#8B949E] text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#58A6FF]/40 text-[#58A6FF] font-medium px-4 py-2 hover:bg-[#58A6FF] hover:text-[#0D1117] transition-all duration-300"
              >
                <Github size={18} />
                View Code
              </a>
            </div>

            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition duration-300 bg-[#58A6FF]/20 blur-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
