import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="w-full">
<h2 className="text-cyan-400 text-3xl md:text-4xl mb-4 font-extrabold">
        Let's Connect!
      </h2>
      <p className="text-gray-200">
          I'm open to freelance projects, collaborations, and exciting
          opportunities
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
