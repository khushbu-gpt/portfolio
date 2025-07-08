"use client"
import React from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section
      className="w-full min-h-screen px-4 md:px-10 bg-gradient-to-br from-[#0D1117] to-[#1F6FEB] pt-20 pb-28 lg:pt-20 lg:pb-20"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#C9D1D9] mb-5">
        Contact<span className="text-[#58A6FF]"> Me!</span>
      </h2>

      <div className="max-w-xl mx-auto rounded-3xl relative overflow-hidden p-[2px] bg-gradient-to-tr from-[#58A6FF]/40 to-transparent shadow-lg">
        <div className="rounded-3xl backdrop-blur-lg bg-[#161B22]/70 border border-[#30363D] p-6 md:p-8 shadow-inner shadow-black/30">
          <p className="text-center text-[#8B949E] mb-6 text-base md:text-lg">
            Have a project in mind? Let's connect!
          </p>

          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { id: "name", label: "Full Name", placeholder: "Your full name", Icon: User },
              { id: "email", label: "Email", placeholder: "you@example.com", Icon: Mail },
              { id: "phone", label: "Phone", placeholder: "+91 12345 67890", Icon: Phone },
            ].map(({ id, label, placeholder, Icon }) => (
              <div key={id} className="flex flex-col gap-1">
                <label htmlFor={id} className="text-[#C9D1D9] text-sm font-medium">
                  {label}
                </label>
                <div className="flex items-center bg-[#0D1117]/60 border border-[#30363D] rounded-lg px-3 focus-within:border-[#58A6FF] transition-all duration-300">
                  <Icon className="text-[#58A6FF] mr-2" size={18} />
                  <input
                    type={id === "email" ? "email" : id === "phone" ? "tel" : "text"}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent py-3 text-sm text-[#C9D1D9] placeholder-[#8B949E] outline-none"
                  />
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-[#C9D1D9] text-sm font-medium">
                Message
              </label>
              <div className="flex items-start bg-[#0D1117]/60 border border-[#30363D] rounded-lg px-3 focus-within:border-[#58A6FF] transition-all duration-300">
                <MessageSquare className="text-[#58A6FF] mr-2 mt-3" size={18} />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  className="flex-1 bg-transparent py-3 text-sm text-[#C9D1D9] placeholder-[#8B949E] outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-3 py-3 rounded-lg bg-[#58A6FF] text-[#0D1117] text-sm font-bold hover:bg-[#1F6FEB] transition-all duration-300 shadow-md shadow-black/20"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
