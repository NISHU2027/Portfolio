import ResumeText from "./ResumeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FiDownload, FiEye } from "react-icons/fi";

const ResumeMain = () => {
  return (
    <div id="resume" className="px-5">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ResumeText />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="max-w-[800px] mx-auto flex flex-col items-center gap-8"
      >
        <div className="w-full max-w-[800px] h-[600px] bg-white/5 rounded-xl border border-cyan-300/30 overflow-hidden">
          <iframe
            src="/alok%20resume.pdf"
            title="Resume Preview"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/alok%20resume.pdf"
            download
            className="border border-cyan-300 rounded-full py-3 px-6 text-lg flex items-center gap-2 hover:bg-cyan-300 transition-all duration-500 cursor-pointer text-white hover:text-black"
          >
            <FiDownload />
            Download Resume
          </a>
          <a
            href="/alok%20resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-300 rounded-full py-3 px-6 text-lg flex items-center gap-2 hover:bg-cyan-300 transition-all duration-500 cursor-pointer text-white hover:text-black"
          >
            <FiEye />
            View Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeMain;