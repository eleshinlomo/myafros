'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Lock } from 'lucide-react';

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
  category: 'ai' | 'web' | 'mobile' | 'data';
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
    category: 'ai',
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
    category: 'ai',
    featured: false
  },
];

export default function Projects() {
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto">
            A selection of my recent work in AI, software development, and data engineering
          </p>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-xl border border-slate-200 ${
                  project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <div className="lg:flex">
                  <div className="lg:w-2/5 relative">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="text-white text-center p-6 relative z-10">
                        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4 backdrop-blur-sm">
                          {project.category.toUpperCase()}
                        </span>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-blue-100 opacity-90">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/5 p-8">
                    <p className="text-slate-700 mb-6 leading-relaxed whitespace-pre-line">
                      {project.longDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 items-center">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-blue-700 shadow-md"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="font-medium">Live Demo</span>
                        </a>
                      )}
                      <button className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors ml-auto group">
                        <span className="font-medium">Case Study</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <a 
              href='https://github.com/eleshinlomo' 
              target='_blank' 
              rel='noopener noreferrer'
              className="inline-flex items-center space-x-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:bg-slate-800 shadow-lg"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}