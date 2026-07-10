import ExperienceText from "./ExperienceText";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    jobTitle: "Software Developer Intern",
    company: "Secure Space.",
    year: "JUN 2026- present",
    align: "right",
    details: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Implemented responsive UI designs and RESTful APIs",
      "Assisted in debugging and fixing frontend issues",
    ],
  },
  {
    jobTitle: "Wed Developer",
    company: "Tata Motors",
    year: "JUN 2025- JUL 2025",
    align: "left",
    details: [
      "Built interactive user interfaces with React and TypeScript",
      "Created responsive websites using modern CSS frameworks",
      "Worked closely with senior developers on code reviews",
      "Learned and applied best practices in web development.",
    ],
  },
];

const ExperienceMain = () => {
  return (
    <div id="experience" className="px-5">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceText />
      </motion.div>
      <div className="max-w-[1200px] mx-auto">
        {experiences.map((item, index) => {
          return (
            <SingleExperience
              key={index}
              jobTitle={item.jobTitle}
              company={item.company}
              year={item.year}
              align={item.align}
              details={item.details}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceMain;