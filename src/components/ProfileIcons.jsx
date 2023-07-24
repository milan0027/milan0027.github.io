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
    <ul className="icons-list">
      <li>
        <a
          href="https://github.com/milan0027"
          target="__blank"
          className="icon-button github"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/milanmundhra27/"
          target="__blank"
          className="icon-button linkedin"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="mailto:milanmundhra27@gmail.com" className="icon-button email">
          <FaEnvelope />
        </a>
      </li>
      <li>
        <a
          href="https://telegram.me/Milan0027"
          target="__blank"
          className="icon-button telegram"
        >
          <FaTelegramPlane />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/+919556666433"
          target="__blank"
          className="icon-button whatsapp"
        >
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/milan.mundhra.5"
          target="__blank"
          className="icon-button facebook"
        >
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/milan_miles_1/"
          target="__blank"
          className="icon-button instagram"
        >
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default ProfileIcons;
