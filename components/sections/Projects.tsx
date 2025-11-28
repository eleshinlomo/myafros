'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Lock, Sparkles, Code2, Rocket, Briefcase, ShoppingBag, Database, ComputerIcon } from 'lucide-react';

interface GithubUrl {
  url: string;
  private: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: GithubUrl;
  liveUrl?: string;
  image: string;
  category: 'ai' | 'web' | 'mobile' | 'data' | 'marketplace';
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Movies and Video Ads Storyboard',
    description: 'AI powered Video storyboard for movies and Ads',
    longDescription: `Instant video ads and storyboard platform. 
Uses AI to accelerate content creation for product advertisements and short films. 
Delivers fast storyboarding, automated editing, and quick video production.`,
    technologies: ['Python/Django', 'Next/Typescript', 'Node.js', 'OpenAI APIs', 'React', 'REST', 'MongoDB', 'Ffmpeg', 'Google APIs', 'Redis', 'Docker'],
    githubUrl: { url: 'https://github.com', private: true },
    liveUrl: 'https://fixupe.com',
    image: '/api/placeholder/600/400',
    category: 'ai',
    featured: true
  },
  {
    id: 2,
    title: 'PRD, Feature and Mock-up Creator',
    description: 'AI-powered product management platform',
    longDescription: `AI-driven system for creating PRDs, features, and mock-ups. Processes documents using LLM and LLM-Function call that returns JSONs. Includes automated extraction, sentiment analysis based on project profile.`,
    technologies: ['Node.js', 'OpenAI APIs', 'React', 'REST', 'MongoDB', 'Ffmpeg', 'Google APIs'],
    githubUrl: { url: 'https://github.com', private: true },
    liveUrl: 'https://product.fixupe.com/',
    image: '/api/placeholder/600/400',
    category: 'data',
    featured: true
  },
  {
    id: 3,
    title: 'E-commerce Marketplace',
    description: 'Personalized product recommendation engine',
    longDescription: 'Advanced recommendation system using collaborative filtering and content-based approaches. Integrates with regional trending topics in Nigeria to provide personalized shopping experiences.',
    technologies: ['Python', 'Scikit-learn', 'Node.js', 'MongoDB', 'AWS CLOUD', 'AWS SES', 'AWS S3'],
    githubUrl: { url: 'https://github.com', private: true },
    liveUrl: 'https://elteema.com',
    image: '/api/placeholder/600/400',
    category: 'marketplace',
    featured: false
  },
];

const categoryIcons = {
  ai: ComputerIcon,
  web: Code2,
  mobile: Rocket,
  data: Database,
  marketplace: ShoppingBag
};

const categoryColors = {
  ai: 'from-purple-600 via-blue-600 to-indigo-700',
  web: 'from-emerald-600 via-teal-600 to-cyan-700',
  mobile: 'from-orange-600 via-pink-600 to-rose-700',
  data: 'from-blue-600 via-indigo-600 to-purple-700',
  marketplace: 'from-blue-600 via-blue-800 to-rose-900',
};

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [repoMessage, setRepoMessage] = useState('Repo status is currently private');

  const handlePrivateGitRepo = () => {
    setRepoMessage('This repository is private. Please contact me for access.');
    setTimeout(() => setRepoMessage('Repo status is currently private'), 3000);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>PORTFOLIO SHOWCASE</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into powerful solutions through
              <span className="text-blue-600 font-semibold"> AI</span>,
              <span className="text-indigo-600 font-semibold"> innovation</span>, and
              <span className="text-purple-600 font-semibold"> cutting-edge technology</span>
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-10">
            {projects.map((project, index) => {
              const CategoryIcon = categoryIcons[project.category];
              const isHovered = hoveredProject === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Featured Badge */}
                  {/* {project.featured && (
                    <motion.div
                      className="absolute -top-4 left-8 z-20 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full text-sm font-bold shadow-xl flex items-center gap-2"
                      initial={{ y: -20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      <Briefcase className="w-4 h-4" />
                      <span>FEATURED</span>
                    </motion.div>
                  )} */}

                  {/* Project Card */}
                  <motion.div
                    className={`relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 transition-all duration-500 ${
                      project.featured 
                        ? 'border-blue-200 hover:border-blue-400' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="lg:flex">
                      {/* Left Side - Visual Section */}
                      <div className="lg:w-2/5 relative">
                        <div className={`h-80 lg:h-full bg-gradient-to-br ${categoryColors[project.category]} relative overflow-hidden`}>
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <motion.div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                backgroundSize: '40px 40px',
                              }}
                              animate={{
                                backgroundPosition: ['0px 0px', '40px 40px'],
                              }}
                              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            />
                          </div>

                          {/* Glowing Orbs */}
                          <motion.div
                            className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
                            animate={{
                              scale: [1.2, 1, 1.2],
                              opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                          />

                          {/* Content */}
                          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-8">
                            <motion.div
                              className="mb-6"
                              animate={isHovered ? { rotate: 360, scale: 1.1 } : {}}
                              transition={{ duration: 0.6 }}
                            >
                              <CategoryIcon className="w-16 h-16 drop-shadow-lg" />
                            </motion.div>
                            
                            <motion.span 
                              className="inline-block px-4 py-2 bg-white/25 backdrop-blur-md rounded-full text-sm font-bold mb-4 shadow-lg border border-white/30"
                              whileHover={{ scale: 1.05 }}
                            >
                              {project.category.toUpperCase()}
                            </motion.span>
                            
                            <h3 className="text-3xl font-black mb-3 text-center drop-shadow-lg">
                              {project.title}
                            </h3>
                            <p className="text-white/90 text-center text-lg font-medium">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Side - Content Section */}
                      <div className="lg:w-3/5 p-8 md:p-10">
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                            About This Project
                          </h4>
                          <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">
                            {project.longDescription}
                          </p>
                        </div>
                        
                        {/* Technologies */}
                        <div className="mb-8">
                          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <motion.span
                                key={tech}
                                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-xl text-sm font-semibold border border-blue-200 shadow-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.15 + i * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 items-center">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 relative overflow-hidden"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                              <ExternalLink className="w-5 h-5 relative z-10" />
                              <span className="relative z-10">Live Demo</span>
                            </motion.a>
                          )}
                          
                          <motion.button 
                            className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold transition-colors group/case"
                            whileHover={{ x: 5 }}
                          >
                            <span>View Case Study</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover/case:translate-x-2" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.a 
              href='https://github.com/eleshinlomo' 
              target='_blank' 
              rel='noopener noreferrer'
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/50 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Github className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Explore All Projects on GitHub</span>
              <ArrowRight className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}