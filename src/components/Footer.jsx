import React from 'react';
import { motion } from 'framer-motion';
import { MdPerson, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
    { icon: <FaEnvelope />, href: 'mailto:rifkarafi20@gmail.com' }
  ];

  return (
    <footer className="bg-[#5e0c0a] text-white border-t border-[#ffffff]/40">
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Profile Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-[#eb906a] flex items-center justify-center">
                <MdPerson className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-wide">Rifka Rafi</h3>
                <p className="text-sm text-[#ffffff]">Health Promotion Facilitator</p>
              </div>
            </div>
            <p className="text-[#ffffff]">
              Empowering communities for better health through education and awareness.
            </p>
          </div>

          {/* Explore Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wide">Explore</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-[#ffffff]hover:text-[#eb906a] hover:underline transition-all duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wide">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MdLocationOn className="text-[#eb906a] w-5 h-5 mt-1" />
                <span className="text-[#ffffff]">Mubeen Mosque Road, Kalpitiya</span>
              </li>
              <li className="flex items-start space-x-3">
                <MdEmail className="text-[#eb906a] w-5 h-5 mt-1" />
                <a href="mailto:rifkarafi20@gmail.com" className="text-[#ffffff] hover:text-[#eb906a] transition-colors duration-300">
                  rifkarafi20@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MdPhone className="text-[#eb906a] w-5 h-5 mt-1" />
                <a href="tel:+94757550834" className="text-[#ffffff] hover:text-[#eb906a] transition-colors duration-300">
                  075-7550834
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Me Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wide">Follow Me</h3>
            <p className="text-sm text-gray-100 mb-3">
  Stay connected through my social channels for the latest updates and projects.
</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className="w-10 h-10 rounded-full bg-[#ffffff] flex items-center justify-center text-orange-800 hover:text-[#eb4b0c] transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-[#ffffff]">
          <p>© 2025 Rifka Rafi — All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
