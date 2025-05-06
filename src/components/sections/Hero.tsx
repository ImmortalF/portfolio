import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-background-dark dark:to-secondary-800 z-0"></div>
      
      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary-300/20 dark:bg-primary-700/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-secondary-300/20 dark:bg-secondary-700/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div ref={containerRef} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-white mb-6">
              <span className="text-primary-600 dark:text-primary-400">Hello, I'm</span><br />
              Your Name
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Full-Stack Developer & UI/UX Designer
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-secondary-200 dark:bg-secondary-700 hover:bg-secondary-300 dark:hover:bg-secondary-600 text-secondary-800 dark:text-secondary-100 rounded-lg transition-colors font-medium"
              >
                View Projects
              </a>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="flex flex-col items-center">
                <span className="text-secondary-500 dark:text-secondary-400 text-sm mb-2">Scroll Down</span>
                <div className="w-6 h-10 rounded-full border-2 border-secondary-400 dark:border-secondary-500 flex justify-center">
                  <motion.div 
                    className="w-1.5 h-1.5 bg-secondary-500 dark:bg-secondary-400 rounded-full mt-2"
                    animate={{ 
                      y: [0, 12, 0],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;