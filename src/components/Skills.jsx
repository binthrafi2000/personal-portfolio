import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboard, FaUsers, FaChartLine, FaClipboardCheck, FaMicrosoft, FaChalkboardTeacher, FaFirstAid, FaProjectDiagram, FaUsersCog, FaLightbulb, FaBrain, FaHandshake, FaChess } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import { GiNotebook } from 'react-icons/gi';

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: <MdHealthAndSafety className="w-6 h-6" />,
      name: "Health education & promotion",
      level: 80
    },
    {
      id: 2,
      icon: <FaUsers className="w-6 h-6" />,
      name: "Community engagement",
      level: 70
    },
    {
      id: 3,
      icon: <GiNotebook className="w-6 h-6" />,
      name: "Report writing",
      level: 90
    },
    {
      id: 4,
      icon: <FaChartLine className="w-6 h-6" />,
      name: "Data collection & analysis",
      level: 85
    },
    {
      id: 5,
      icon: <FaClipboardCheck className="w-6 h-6" />,
      name: "Monitoring and evaluation (M&E)",
      level: 75
    },
    {
      id: 6,
      icon: <FaMicrosoft className="w-6 h-6" />,
      name: "Microsoft Office (Word, Excel, PowerPoint)",
      level: 95
    },
    {
      id: 7,
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      name: "Workshop facilitation",
      level: 80
    },
    {
      id: 8,
      icon: <FaProjectDiagram className="w-6 h-6" />,
      name: "Project planning and coordination",
      level: 70
    },
    {
      id: 9,
      icon: <FaFirstAid className="w-6 h-6" />,
      name: "Basic first aid knowledge",
      level: 60
    },
    {
      id: 10,
      icon: <FaUsersCog className="w-6 h-6" />,
      name: "Teamwork",
      level: 85
    },
    {
      id: 11,
      icon: <FaChess className="w-6 h-6" />,
      name: "Leadership",
      level: 80
    },
    {
      id: 12,
      icon: <FaLightbulb className="w-6 h-6" />,
      name: "Problem-solving",
      level: 90
    },
    {
      id: 13,
      icon: <FaBrain className="w-6 h-6" />,
      name: "Critical thinking",
      level: 85
    },
    {
      id: 14,
      icon: <FaHandshake className="w-6 h-6" />,
      name: "Conflict resolution",
      level: 75
    },
    {
      id: 15,
      icon: <FaClipboard className="w-6 h-6" />,
      name: "Decision-making",
      level: 80
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
          Skills
          <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    viewport={{ once: true }}
    className="mx-auto h-1 w-24 bg-[#eb4b0c] origin-left rounded-full"
  />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#eb906a]">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>

              <div className="relative">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-[#eb906a] to-[#eb906a]/80 rounded-full"
                  />
                </div>
                <span className="absolute right-0 top-0 -mt-6 text-sm font-medium text-gray-600">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
