import React from 'react';
import { motion } from 'framer-motion';
import { MdWork } from 'react-icons/md';
import { FaClinicMedical } from 'react-icons/fa';
import { RiCommunityLine } from 'react-icons/ri';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      icon: <FaClinicMedical className="w-8 h-8" />,
      title: "Community Health Facilitator",
      organization: "Bogahayaya Village",
      dateRange: "Mar 2023 – Feb 2025",
      contributions: [
        "Delivered NCD prevention programs for women through education and awareness",
        "Promoted early childhood care and development (ECCD) among mothers",
        "Organized academic support activities for school-aged children",
        "Supported elder mental well-being via group activities and awareness sessions",
        "Engaged local leaders to enhance community participation",
        "Conducted participatory evaluations for health promotion activities"
      ]
    },
    {
      id: 2,
      icon: <RiCommunityLine className="w-8 h-8" />,
      title: "Health Promotion Project Contributor",
      organization: "Rajarata University of Sri Lanka",
      dateRange: "Sept 2022 – Oct 2024",
      contributions: [
        "Promoted student well-being through organized health campaigns",
        "Led peer education workshops to improve decision-making skills",
        "Assisted in planning and executing awareness programs",
        "Advocated for healthy lifestyle practices and mental wellness among students",
     "Collaborated with university staff and student unions to implement sustainable health initiatives on campus.",
     "Utilized data-driven strategies to assess campaign effectiveness and refine future outreach efforts."
      ]
    }
  ];

  return (
    <section className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-orange-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-[#5e0c0a]"
        >
          Work Experience
           <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto h-1 w-24 bg-[#eb4b0c] origin-left mt-4 rounded-full"
            />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                {/* Icon with Animation */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-4 -left-4 w-12 h-12 bg-[#eb906a] rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  {exp.icon}
                </motion.div>

                {/* Content */}
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-[#eb906a] mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">{exp.organization}</h4>
                    <span className="text-gray-600 font-medium">{exp.dateRange}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.contributions.map((contribution, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#eb906a] mt-1">•</span>
                        <span className="text-gray-600">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
