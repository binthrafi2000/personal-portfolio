import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div 
      className="relative bg-[url('/personal-portfolio/2f.jpeg')] min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Small Title */}
        <p className="text-gray-200 text-sm sm:text-xl mb-4">
          Building Healthier Futures
        </p>
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-[#eb906a]">Community Wellness</span>
          <span className="text-white"> Facilitator</span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-200 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          A passionate health promoter dedicated to empowering communities and improving lives through education, awareness, and action.
        </p>
        
        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Download CV Button */}
          <a  href="1rifka.pdf" download className="inline-block">
            <button className="px-8 py-3 bg-[#e66e3c] text-white rounded-lg hover:bg-[#d67d5a] transition-colors duration-300 shadow-lg hover:shadow-xl sm:text-xl ">
              Download CV
            </button>
          </a>
          
          {/* Contact Button */}
          <button 
            onClick={toggleModal} 
            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-[#ffffff] hover:text-[#eb906a] transition-colors duration-300 sm:text-xl "
          >
            Contact Me
          </button>
        </div>

        {showModal && (
  <motion.div 
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <motion.div 
      className="bg-gray/50 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-[#eb906a] text-3xl font-bold mb-6">Connect with Me!</h2>
      <div className="flex justify-center gap-6 mb-6">
     

<motion.a 
  href="https://www.linkedin.com/in/rifka-rafi-5ab9852b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.2 }}
  className="p-3 bg-white/80 rounded-full text-[#9e3f10] hover:text-[#003f71] transition-colors duration-300 shadow-md"
>
  <FaLinkedinIn className="text-2xl drop-shadow-md hover:drop-shadow-[0_0_10px_rgba(0,63,113,0.6)]" />
</motion.a>

<motion.a 
  href="mailto:your-email@example.com"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.2 }}
  className="p-3 bg-white/80 rounded-full text-[#9e3f10] hover:text-[#005bb5] transition-colors duration-300 shadow-md"
>
  <FaEnvelope className="text-2xl drop-shadow-md hover:drop-shadow-[0_0_10px_rgba(0,91,181,0.6)]" />
</motion.a>

      </div>
      <button 
        onClick={toggleModal} 
        className="mt-2 px-6 py-2 bg-[#eb906a] text-white rounded-full shadow-md hover:bg-[#d67d5a] hover:shadow-lg transition duration-300"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
)}

      </div>
    </div>
  );
};

export default Hero;
