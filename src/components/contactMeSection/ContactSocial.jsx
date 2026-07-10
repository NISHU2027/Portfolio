import { SiLeetcode } from "react-icons/si"; 
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs"; 
import React from 'react'
import SingleContactSocial from './SingleContactSocial'

const ContactSocial = () => {
  return (
    <div className="flex gap-4"> 
        <SingleContactSocial link='https://github.com/NISHU2027' Icon = {BsGithub} />
        <SingleContactSocial link='https://www.linkedin.com/feed/' Icon = {FaLinkedinIn} />
        <SingleContactSocial link='https://leetcode.com/u/Alok2720/' Icon = {SiLeetcode} />
    </div>
  )
}

export default ContactSocial  