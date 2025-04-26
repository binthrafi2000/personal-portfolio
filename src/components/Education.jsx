import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "BSc in Health Promotion",
      years: "2020 - 2023",
      institution: "University of Srilanka",
      results: "General",
      description: "Specialized in community health, public health policy, and health education strategies."
    },
    {
      id: 2,
      degree: "A/L - Science Stream",
      years: "2017 - 2019",
      institution: "President’s Science College, Puttalam",
      results: "Biology C ,Chemistry  C ,Physics  S ",
      description: "Focused on biological sciences with emphasis on human anatomy and physiology."
    },
    {
      id: 3,
      degree: "O/L - General Subjects",
      years: "2014 - 2016",
      institution: "President’s Science College, Puttalam",
      results: " A Passes: Science, Mathematics, English, History, Islam, Arabic, Arabic Literature ,B Passes: Tamil, ICT ",
      description: "Comprehensive foundation in health promotion emphasizing community health, social engagement, and wellness education."
    }
  ];

  return (
    <section className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-orange-100">
      <div className="max-w-6xl mx-auto">
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="text-center mb-6"
>
  <h2 className="text-4xl sm:text-5xl font-bold text-[#5e0c0a] mb-4">
    Education
  </h2>
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    viewport={{ once: true }}
    className="mx-auto h-1 w-24 bg-[#eb4b0c] origin-left rounded-full"
  />
</motion.div>


        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#eb906a] to-white hidden lg:block"></div>

          {/* Education Cards */}
          <div className="space-y-16 lg:space-y-0">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#eb906a] border-4 border-white z-10 hidden lg:block"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                      <h3 className="text-2xl font-bold text-[#eb906a]">{item.degree}</h3>
                      <span className="text-gray-600 font-medium">{item.years}</span>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.institution}</h4>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#eb906a]/10 text-[#eb906a] rounded-full text-sm font-medium">
                        {item.results}
                      </span>
                    </div>
                    
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
