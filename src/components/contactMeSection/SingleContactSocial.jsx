import React from "react";

const SingleContactSocial = ({ Icon, link }) => {
  return (
<div
      className="text-2xl h-12 w-12 border border-cyan-400 text-cyan-400 rounded-full p-3 flex items-center justify-center 
     transition duration-300 hover:shadow-[0_0_15px_4px] hover:shadow-cyan-400"
    >
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
