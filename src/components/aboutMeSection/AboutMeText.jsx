import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start items-center md:text-left text-center">
      <h1 className="text-6xl text-cyan-300 mb-10">About Me</h1>
      <p className="text-white md:text-left text-center p-1 leading-relaxed max-w-3xl">
        <span className="font-bold text-2xl">
          👨‍💻 Full-Stack Developer | MERN Stack | AI Enthusiast
        </span>
        <br />
        <br />
        Hey! I'm Alok Giri, a computer science student who loves building real-world projects using the MERN stack. I'm especially interested in making apps that are fast, scalable, and easy to use. Recently, I've been experimenting with AI tools like the OpenAI API to make smarter web experiences.
        <br />
        <br />
        I’ve built projects like an e-commerce site with admin dashboards (Shopora), a real-time EXpenso- smart expense tracker using java script, and a DPI Engine which look after the security, threat removing and error detection  .
        <br />
        <br />
        <span className="font-bold text-lg">Tech I use:</span> React.js, Node.js, Express, MongoDB, Tailwind CSE, Socket.io
        <br />
        <span className="font-bold text-lg">Currently learning:</span> Advanced DSA, AI integrations, and writing better, cleaner code.
        <br />
        <br />
        I’m always up for learning new things, building useful tools, and collaborating with people who love tech as much as I do.
      </p>
      <div className="flex gap-4 mt-10 md:self-start self-center">
        <button
          className="border border-cyan-300 rounded-full py-2 px-4 text-lg flex items-center hover:bg-cyan-300 transition-all duration-500 cursor-pointer text-white hover:text-black"
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          My Projects
        </button>
        <button
          className="border border-cyan-300 rounded-full py-2 px-4 text-lg flex items-center hover:bg-cyan-300 transition-all duration-500 cursor-pointer text-white hover:text-black"
          onClick={() =>
            document
              .getElementById("resume")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          View Resume
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;
