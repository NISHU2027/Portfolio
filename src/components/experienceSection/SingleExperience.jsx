import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ jobTitle, company, year, align, details }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full flex-col-reverse items-center gap-10 mb-10 ${
        align == "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div className="flex flex-col justify-center items-center">
<h2 className="md:text-3xl text-2xl text-cyan-400 font-extrabold">
          {jobTitle}
        </h2>
        <h3 className="text-xl text-white font-medium mt-2">{company}</h3>
        <h2
          className={`text-lg font-thin text-white text-center ${
            align == "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <ul
          className={`text-white text-base mt-4 list-disc list-inside ${
            align == "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {details.map((detail, index) => (
            <li key={index} className="mb-1">
              {detail}
            </li>
          ))}
        </ul>
      </div>
<div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400">
        <svg
          className="w-10 h-10 text-cyan-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.5a.5.5 0 01-.5.5H15V14a3 3 0 01-3 3H8a3 3 0 01-3-3v-2.5H2.5a.5.5 0 01-.5-.5V8a2 2 0 012-2h2zm8-1V5a1 1 0 00-1-1H9a1 1 0 00-1 1v1h2zm-4 7V8a1 1 0 00-1-1H9a1 1 0 00-1 1v2h2zm2 2V8a1 1 0 00-1-1H9a1 1 0 00-1 1v4h2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default SingleExperience;