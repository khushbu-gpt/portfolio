import React from "react";
import {
  Code,
  SquareStack,
  Server,
  FileCode,
  Network,
  Database,
  Code2,
  Wind,
} from "lucide-react";

const skills = [
  { name: "HTML", Icon: Code },
  { name: "Next.js", Icon: SquareStack },
  { name: "Node.js", Icon: Server },
  { name: "JavaScript", Icon: FileCode },
  { name: "Express", Icon: Network },
  { name: "MongoDB", Icon: Database },
  { name: "TypeScript", Icon: Code2 },
  { name: "Tailwind CSS", Icon: Wind },
];

const page = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen px-6 md:px-20 lg:py-20 pt-20 pb-28"
      style={{
        background: "linear-gradient(135deg, #0D1117 0%, #1F6FEB 100%)",
      }}
    >
      <h2 className="text-center text-4xl font-bold text-[#C9D1D9] lg:mb-14 mb-10">
        My <span className="text-[#58A6FF]">Skills</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {skills.map(({ name, Icon }) => (
          <div
            key={name}
            className="bg-[#161B22]/50 border border-[#30363D] backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center p-8 shadow-xl shadow-black/40 hover:border-[#58A6FF] hover:shadow-[#58A6FF]/30 transition-all duration-300 group min-h-[220px]"
          >
            <Icon
              size={56}
              className="text-[#58A6FF] mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-lg font-semibold text-[#C9D1D9]">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
