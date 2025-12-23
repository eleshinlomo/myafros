'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code2, Brain, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 to-white" />
      
      {/* Professional gradient accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-indigo-500 to-transparent" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                             linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Professional tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-600 font-medium uppercase tracking-wider mb-2">
              Engineering Intelligent Solutions
            </p>
          </motion.div>

          {/* Name with professional styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="text-gray-900 block mb-2">Seun</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 block">
                Olatunji
              </span>
            </h1>
          </motion.div>

          {/* Professional titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg text-blue-700 font-medium">
              <Code2 className="w-4 h-4" />
              <span>Software Engineer</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-700 font-medium">
              <Brain className="w-4 h-4" />
              <span>AI Specialist</span>
            </div>
          </motion.div>

          {/* Professional description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building scalable software solutions and AI systems that drive 
              <span className="font-semibold text-gray-900"> business impact</span> through
              <span className="font-semibold text-blue-600"> innovative technology</span>
            </p>
          </motion.div>

          {/* Professional social links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-6 mb-16"
          >
            {[
              { 
                icon: Github, 
                href: 'https://github.com/eleshinlomo', 
                label: 'GitHub',
                className: 'hover:bg-gray-900 hover:text-white border-gray-300'
              },
              { 
                icon: Linkedin, 
                href: 'https://www.linkedin.com/in/olatunjioluwaseun/', 
                label: 'LinkedIn',
                className: 'hover:bg-blue-600 hover:text-white border-blue-300'
              },
              { 
                icon: Mail, 
                href: '#contact', 
                label: 'Email',
                className: 'hover:bg-indigo-600 hover:text-white border-indigo-300'
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href !=='#contact' ? "_blank": ''}
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 px-6 py-3 border rounded-lg font-medium transition-all duration-300 ${social.className} text-gray-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
                <span>{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm text-gray-500 font-medium">Explore Projects</span>
            <div className="w-5 h-8 border border-gray-300 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1 h-2 bg-gray-400 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;