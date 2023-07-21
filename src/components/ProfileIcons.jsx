import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
const ProfileIcons = () => {
  return (
    <ul className='icons-list'>
      <li>
        <a href='/#' className='icon-button github'>
          <FaGithub />
        </a>
      </li>
      <li>
        <a href='/#' className='icon-button linkedin'>
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href='/#' className='icon-button email'>
          <FaEnvelope />
        </a>
      </li>
      <li>
        <a href='/#' className='icon-button telegram'>
          <FaTelegramPlane />
        </a>
      </li>
      <li>
        <a href='/#' className='icon-button whatsapp'>
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a href='/#' className='icon-button facebook'>
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href='/#' className='icon-button instagram'>
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default ProfileIcons;
