/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample gallery images - replace with your actual images
const galleryImages = [
  { id: 1, src: 'gal (1).jpeg', title: 'Field work' },
  { id: 2, src: 'gal (2).jpeg', title: 'Field work' },
  { id: 3, src: 'gal (3).jpeg', title: 'Field work' },
  { id: 4, src: 'gal (4).jpeg', title: 'Field work' },
  { id: 5, src: 'gal (5).jpeg', title: 'Field work' },
  { id: 6, src: 'gal (6).jpeg', title: 'Field work' },
  { id: 7, src: 'gal (7).jpeg', title: 'Field work' },
  { id: 8, src: 'gal (8).jpeg', title: 'Field work' },
  { id: 9, src: 'gal (9).jpeg', title: 'Field work' },
];

function Gallary() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <section className={`min-h-screen py-20 transition-colors duration-500 ${
      isDarkMode ? 'bg-orange-900' : 'bg-orange-100'
    }`}>
      <div className="container mx-auto px-4">
        {/* Dark mode toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            isDarkMode ? 'text-white' : 'text-[#5e0c0a]'
          }`}
        >
          Gallery
          <div className="w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full" />
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <motion.img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl">
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-white' : 'text-white'
                  }`}>
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallary;