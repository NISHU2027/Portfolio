import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Expenso",
    year: "JUN2026",
    align: "right",
    image: "/Expenso.png",
    link: "https://expenso-frontend-xfpu.onrender.com",
  },
  {
    name: "DPI Engine",
    year: "JUL2026",
    align: "left",
    image: "/dpi.png",
    link: "https://github.com/NISHU2027/Deep-Packet-Inspection-.git",
  },
  {
    name: "Wander Wise",
    year: "NOV2025",
    align: "right",
    image: "/wander wise.png",
    link: "https://github.com/NISHU2027/wanderwise-safe-ui.git",
  },
  {
    name: "Shopora",
    year: "AUG2025",
    align: "left",
    image: "/Shopora.png",
    link: "https://github.com/NISHU2027/Shopora.git",
  },
  
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="px-5">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div>
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
