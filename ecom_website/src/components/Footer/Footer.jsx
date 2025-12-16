import React from 'react';
import footerLogo from '../../assets/website/logo.png';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';

// Inline styles
const BannerImg = {
  backgroundImage: 'url("../../assets/website/f2.png")',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

// Footer links
const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-[#393c51] mb-20">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Lemon
            </h1>
            <p>Your one-stop platform for building your digital presence.</p>
          </div>

          {/* Links Section */}
          <div className="py-8 px-4 md:pl-10">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-[#393c51]"
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media Section */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Contact Us</h1>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>Bengaluru, Karnataka</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>8033424232</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="hover:text-primary">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" className="hover:text-primary">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#" className="hover:text-primary">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
