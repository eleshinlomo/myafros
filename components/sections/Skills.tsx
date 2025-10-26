'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  'AI/ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK', 'Hugging Face'],
  'Frontend': ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Three.js', 'CSS'],
  'Backend': ['Python', 'Node.js', 'FastAPI', 'Express', 'REST', 'DJANGO', 'FLASK'],
  'Data & Cloud': ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'MySQL'],
  'Tools': ['Git', 'Gitlab', 'Linux', 'Jupyter', 'VS Code', 'Figma']
};

const Skills = ()=> {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="skills" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-300 mb-16 text-center max-w-3xl mx-auto">
            A comprehensive toolkit for building modern software and AI solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-2 bg-slate-700 rounded-lg text-slate-200 text-sm hover:bg-blue-500 transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills