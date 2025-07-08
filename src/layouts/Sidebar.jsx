"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderKanban,
  User,
  Layers3,
  Wrench,
  Mail,
} from "lucide-react";

const links = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Services", icon: Wrench, href: "/services" },
  { label: "About", icon: User, href: "/about" },
  { label: "Projects", icon: FolderKanban, href: "/projects" },
  { label: "Contact", icon: Mail, href: "/contact" },
  { label: "Skills", icon: Layers3, href: "/skills" },
];

const Sidebar = () => {
  const pathname = usePathname();

  // Hydration-safe guard: if pathname is undefined, don't render
  if (!pathname) return null;

  return (
    <>
      <aside className="hidden lg:flex fixed xl:top-1/2 xl:-translate-y-1/2 lg:top-48 right-4 z-50 flex-col items-center gap-6 p-3 rounded-2xl bg-[#0D1117]/60 border border-[#30363D] backdrop-blur-md shadow-xl shadow-black/30">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`
                group relative flex flex-col items-center text-sm
                transition-all duration-300
                ${isActive ? "text-[#58A6FF]" : "text-[#8B949E]"}
              `}
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                <Icon size={22} />
              </span>
              <span className="absolute right-10 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 bg-[#161B22] text-white text-xs px-3 py-1 rounded-lg shadow-md transition-all duration-300">
                {link.label}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 mt-1 rounded-full bg-[#58A6FF]"></span>
              )}
            </Link>
          );
        })}
      </aside>

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-[#0D1117]/80 border-t border-[#30363D] backdrop-blur-md p-2 shadow-md">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex flex-col items-center text-xs ${
                isActive ? "text-[#58A6FF]" : "text-[#8B949E]"
              } transition-colors duration-300`}
            >
              <Icon size={22} />
              <span className="text-[10px] mt-1">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;
