'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Database, Cloud, Sparkles, Heart, Gamepad2 } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specialties = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Building and deploying intelligent models that learn and adapt',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Creating seamless experiences from database to user interface',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Designing robust data pipelines and scalable architectures',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Deploying and managing applications on modern cloud platforms',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-10 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-2 sm:px-6 relative z-10 max-w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
        
          <div className="text-center mb-16 md:mb-20 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>GET TO KNOW ME</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 mb-6">
              About Me
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto px-4">
              Passionate about solving complex problems with
              <span className="text-blue-600 font-semibold"> elegant code</span> and
              <span className="text-purple-600 font-semibold"> intelligent systems</span>
            </p>
          </div>

         
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-16 md:mb-20 px-4">
            {/* Left Column - Bio */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="lg:sticky lg:top-8"
              >
              
                <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-6 md:p-8 mb-6 md:mb-8 overflow-hidden shadow-2xl">
                  <motion.div
                    className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="text-white/80 text-base md:text-lg mb-3 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 }}
                    >
                      👋 Hello, I&apos;m
                    </motion.div>
                    <motion.h3
                      className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                    >
                      Oluwaseun
                    </motion.h3>
                    <motion.p
                      className="text-white/90 text-lg md:text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      But you can call me <span className="font-bold text-white">Seun</span>
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  className="space-y-4 md:space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
           
                  <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                        <Code2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2 text-base md:text-lg">The Journey</h4>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                          I&apos;m a Software and AI Engineer with <span className="font-semibold text-blue-600">4+ years</span> of experience building scalable applications and intelligent systems. My journey started from building webpages with DREAMWEAVER, WYSIWYG, HTML and CSS and evolved into a passion for software engineering, artificial intelligence and machine learning.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                        <Brain className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2 text-base md:text-lg">Current Focus</h4>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                          Currently, I specialize in developing end-to-end AI solutions and integrations, from data preprocessing and model training to deployment and software integration with AI. I believe in creating technology that not only works well but also makes a positive impact.
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 rounded-2xl p-5 md:p-6 shadow-lg border-2 border-orange-200 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-orange-300/20 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <div className="relative flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl">
                        <Gamepad2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2 text-base md:text-lg flex items-center gap-2">
                          Beyond the Code
                          <Heart className="w-4 h-4 md:w-5 md:h-5 text-red-500" fill="currentColor" />
                        </h4>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                          When I&apos;m not coding, you can find me contributing to open-source projects, 
                          reading research papers, or exploring new advancements in AI and software development. 
                          And of course, I also play hard—well, that&apos;s another story. 
                          I love computer games, and I like them 2D. Not a fan of realistic games!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column*/}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {specialties.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                 
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <motion.div
                    className={`absolute -top-10 -right-10 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${item.gradient} rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                
                    <motion.div
                      className={`inline-flex p-3 md:p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-4 md:mb-6 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>

                    
                    <h4 className="font-bold text-slate-900 mb-3 text-lg md:text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>

               
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

         
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            {[
              { label: 'Years Experience', value: '4+', color: 'from-blue-500 to-cyan-500' },
              { label: 'Frontend', value: '55%', color: 'from-purple-500 to-pink-500' },
              { label: 'Backend', value: '45%', color: 'from-emerald-500 to-teal-500' },
              { label: 'services', value: '40+', color: 'from-orange-500 to-red-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-1 md:mb-2 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-slate-600 font-semibold text-xs md:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}