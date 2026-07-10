import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[60px] px-4 mb-10"
    >
      <h2 className="text-6xl text-cyan-400 mb-10 text-center font-extrabold">Contact Me</h2>
      <div
        className="flex justify-between gap-24 bg-black/80 border border-cyan-400 shadow-[inset_0_0_10px_#06B6D4,0_0_30px_#06B6D4] shadow-cyan-400/50 p-8 rounded-2xl lg:flex-row flex-col items-center"
      >
        <ContactMeLeft />
        <ContactMeRight />
      </div>
      
    </div>
  );
};

export default ContactMain;
