import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Skills data
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "TailwindCSS", level: 90 },
        { name: "Redux", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "AWS Lambda", level: 75 },
        { name: "API Gateway", level: 70 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            My Skills
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="section-subtitle text-center mx-auto"
          >
            Here are some of the technologies and tools I work with
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white dark:bg-secondary-800 rounded-xl shadow-soft p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-secondary-800 dark:text-secondary-100 border-b border-secondary-200 dark:border-secondary-700 pb-2">
                  {category.title}
                </h3>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + skillIndex * 0.1 + categoryIndex * 0.2 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-secondary-500 dark:text-secondary-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary-500 dark:bg-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: isInView ? `${skill.level}%` : 0 }}
                          transition={{ duration: 0.8, delay: 0.3 + skillIndex * 0.05 + categoryIndex * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional skills */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-white dark:bg-secondary-800 rounded-xl shadow-soft p-6"
          >
            <h3 className="text-xl font-semibold mb-6 text-secondary-800 dark:text-secondary-100 text-center">
              Other Skills & Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Jest", "React Testing Library", "GraphQL", "Webpack", "Vite", 
                "Sass/SCSS", "Next.js", "Material UI", "AWS S3", "DynamoDB", 
                "Serverless", "Firebase", "GitHub Actions", "Agile/Scrum"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;