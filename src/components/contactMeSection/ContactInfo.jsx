import { CiLocationOn } from "react-icons/ci"; 
import { BiPhone } from "react-icons/bi"; 
import { AiOutlineMail } from "react-icons/ai"; 
import React from 'react'
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
        <SingleInfo text = "alokgiri2720@gmail.com" Image = {AiOutlineMail}/>
        <SingleInfo text = "+91-7992306050" Image = {BiPhone}/>
        <SingleInfo text = "Jamshedpur, Jharkhand" Image = {CiLocationOn}/>
    </div>
  )
}

export default ContactInfo