import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/mert-saykal/",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/riavenn",
  },
  {
    icon: <IoMdMail />,
    url: "mailto:mertsaykal0606@gmail.com",
  },
];

function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <a
          href={link.url}
          target="_blank"
          key={index}
          className="text-4xl text-white hover:text-cyan-400 transition-text-color duration-500">
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
