'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Database, Cloud, Target, Briefcase, User, Heart } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specialties = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Building intelligent systems with machine learning and deep learning',
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Developing scalable applications with modern technologies',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Designing robust data pipelines and database architectures',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications on cloud platforms',
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            <User className="w-4 h-4" />
            <span>ABOUT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Background
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Software engineer specializing in building intelligent systems and scalable applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Overview</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Journey</h4>
                    <p className="text-gray-600 leading-relaxed">
                      With <span className="font-semibold text-blue-600">5+ years</span> of experience in software engineering, 
                      I specialize in developing full-stack applications and AI systems. 
                      My expertise spans from traditional web development to advanced machine learning implementations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Current Focus</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Currently focused on building AI-powered solutions and integrating machine learning 
                      models into production systems. Passionate about creating technology that delivers 
                      measurable business value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">Beyond Work</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  When not coding, I contribute to open-source projects and stay updated with the latest 
                  advancements in AI research. I also enjoy retro gaming and prefer mostly classic 2D games over 
                  modern realistic graphics.
                </p>
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    Always exploring new technologies and approaches to problem-solving
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Specialties */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Areas of Expertise</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {specialties.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Experience Metrics</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { label: 'Years Experience', value: '5+', icon: Briefcase },
                  { label: 'Projects Completed', value: '40+', icon: Target },
                  { label: 'Frontend Focus', value: '50%', icon: Code2 },
                  { label: 'Backend Focus', value: '50%', icon: Database },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-4">
              Driven by curiosity and a passion for building technology that makes a difference
            </p>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}