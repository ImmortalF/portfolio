import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="section-title text-center"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Image */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 overflow-hidden rounded-2xl shadow-soft-lg"
            >
              <div className="aspect-square bg-secondary-200 dark:bg-secondary-700 rounded-2xl flex items-center justify-center">
                {/* Replace with your actual image */}
                <svg 
                  className="w-24 h-24 text-secondary-400 dark:text-secondary-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div variants={itemVariants} className="md:col-span-3">
              <h3 className="text-2xl font-semibold mb-4 text-secondary-800 dark:text-secondary-100">
                Full-Stack Developer & UI/UX Designer
              </h3>
              
              <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                I'm a passionate developer with a strong focus on creating elegant, 
                functional, and user-friendly web applications. With expertise in both 
                frontend and backend technologies, I enjoy building complete solutions 
                that solve real-world problems.
              </p>
              
              <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                My journey in web development started in [Year], and since then, 
                I've been constantly learning and improving my skills across the entire 
                development stack. I particularly enjoy working with React, TypeScript, 
                and modern backend technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-center"
                >
                  Contact Me
                </a>
                <a 
                  href="/resume.pdf" 
                  className="px-6 py-2 border border-secondary-300 dark:border-secondary-600 hover:bg-secondary-100 dark:hover:bg-secondary-700 text-secondary-800 dark:text-secondary-200 rounded-lg transition-colors text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Personal details */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
          >
            <div className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-secondary-800 dark:text-secondary-100">
                Education
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 mr-3"></div>
                  <div>
                    <p className="font-medium text-secondary-800 dark:text-secondary-100">
                      BSc in Computer Science
                    </p>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                      University Name, 2018-2022
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 mr-3"></div>
                  <div>
                    <p className="font-medium text-secondary-800 dark:text-secondary-100">
                      UI/UX Design Certificate
                    </p>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                      Design Institute, 2023
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-secondary-800 dark:text-secondary-100">
                Experience
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 mr-3"></div>
                  <div>
                    <p className="font-medium text-secondary-800 dark:text-secondary-100">
                      Full-Stack Developer
                    </p>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                      Company Name, 2022-Present
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 mr-3"></div>
                  <div>
                    <p className="font-medium text-secondary-800 dark:text-secondary-100">
                      Frontend Developer (Intern)
                    </p>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                      Company Name, 2021-2022
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;