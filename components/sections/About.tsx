
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Database, Cloud } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specialties = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Building and deploying intelligent models that learn and adapt'
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Creating seamless experiences from database to user interface'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Designing robust data pipelines and scalable architectures'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Deploying and managing applications on modern cloud platforms'
    }
  ];

  return (
    <section id="about" className="py-10 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            About Me
          </h2>
          <p className="text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto">
            Passionate about solving complex problems with elegant code and intelligent systems
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <motion.h5
                className="text-2xl font-bold text-slate-800 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                Hello, I&apos;m Oluwaseun but you can call me Seun
              </motion.h5>
              <motion.div
                className="space-y-4 text-slate-600"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <p>
                  I&apos;m a Software and AI Engineer with 4+ years of experience building 
                  scalable applications and intelligent systems. My journey started from 
                  building webpages with DREAMWEAVER, WYSWIG, HTML and CSS and evolved 
                  into a passion for software engineering, artificial intelligence 
                  and machine learning.
                </p>
                <p>
                  Currently, I specialize in developing end-to-end AI solutions and integrations, from 
                  data preprocessing and model training to deployment and software integration with AI. 
                  I believe in creating technology that not only works well but also 
                  makes a positive impact.
                </p>
                <p className='bg-blue-200 p-2'>
                  When I&apos;m not coding, you can find me contributing to open-source 
                  projects, reading research papers, or exploring new advancements 
                  in AI and software development and ofcourse I also play hard. Well, that is another story.
                  I also like computer games and I like them 2D. Not a fan of realistic games.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {specialties.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h4 className="font-semibold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}