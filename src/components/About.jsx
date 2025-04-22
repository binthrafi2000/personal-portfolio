import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const About = () => {
  const roles = [
    "Health Promotion Specialist",
    "Community Facilitator",
    "Public Health Advocate",
    "Health Educator"
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#eb906a]/20 to-white/20 rounded-2xl transform -rotate-6"></div>
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="3f.jpeg"
                alt="Professional portrait"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-[#f2581b]">Rifka Rafi</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-16 mb-6"
            >
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl text-700 text-[#fa8657]"
              >
                {roles[currentRole]}
              </motion.h2>
            </motion.div>

            <p className="text-lg text-b-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              A dedicated health professional with a passion for community well-being and public health advocacy. 
              Committed to creating positive change through education and empowerment.
            </p>

            {/* Social Icons */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="flex justify-center lg:justify-start gap-6"
>
  {[ 
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/rifka-rafi-5ab9852b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  
    { icon: <FaInstagram />, href: '#' },
  ].map((item, index) => (
    <motion.a
      key={index}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      href={item.href}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#eb4b0c] text-white hover:bg-[#eb906a] transition-colors"
    >
      {item.icon}
    </motion.a>
  ))}
</motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
