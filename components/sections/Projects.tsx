'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Briefcase, Monitor, Database, ShoppingBag, Cpu, ChevronRight, BarChart } from 'lucide-react';

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
  category: 'ai' | 'web' | 'mobile' | 'data' | 'marketplace' | 'logs';
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Video Storyboard Platform',
    description: 'AI-powered video ads and storyboard generation',
    longDescription: `Enterprise-grade platform for creating video advertisements and storyboards using AI. Accelerates content creation with automated editing, fast storyboarding, and professional video production.`,
    technologies: ['Python/Django', 'Next.js/TypeScript', 'OpenAI API', 'FFmpeg', 'MongoDB', 'Redis', 'Docker'],
    githubUrl: { url: 'https://github.com/eleshinlomo', private: true },
    liveUrl: 'https://ai.fixupe.com',
    category: 'ai',
    featured: true
  },
    {
    id: 1,
    title: 'Booking Manager',
    description: 'Appoinment booking platform',
    longDescription: `Fixupe Booking keeps clients and businesses in sync while helping businesses manage appointments, track earnings, and stay organized.`,
    technologies: ['Node.js', 'Next.js/TypeScript', 'Google 0Auth2', 'AWS-SES', 'MongoDB', 'Redis', 'Docker'],
    githubUrl: { url: 'https://github.com/eleshinlomo', private: true },
    liveUrl: 'https://booking.fixupe.com',
    category: 'marketplace',
    featured: true
  },
  {
    id: 2,
    title: 'AI Product Management System',
    description: 'AI-driven PRD, feature, and mock-up creator',
    longDescription: `Comprehensive product management platform that uses LLMs to create product requirements documents, features, and mock-ups. Includes automated extraction and sentiment analysis based on project profiles.`,
    technologies: ['Node.js', 'OpenAI API', 'React', 'REST API', 'MongoDB', 'AWS'],
    githubUrl: { url: 'https://github.com/eleshinlomo', private: true },
    liveUrl: 'https://product.fixupe.com/',
    category: 'data',
    featured: true
  },
    {
    id: 3,
    title: 'Cloud logger',
    description: 'Pm2, Nginx log monitor.',
    longDescription: 'Monitor PM2 processes and NGINX logs from your cloud instances to quickly detect errors, performance issues, and downtime',
    technologies: ['Next js', 'Scikit-learn', 'Node.js', 'MongoDB', 'AWS', 'S3', 'SES'],
    githubUrl: { url: 'https://github.com/eleshinlomo/logger', private: true },
    liveUrl: 'https://logger.fixupe.com',
    category: 'logs',
    featured: false
  },
    {
    id: 4,
    title: 'Event Manager',
    description: 'Manage your events seamlessly',
    longDescription: 'Post event gigs, find events close to you, and easily connect with vendors for seamless event planning.',
    technologies: ['Next js', 'Django', 'Node.js', 'MongoDB', 'AWS', 'S3', 'SES'],
    githubUrl: { url: 'https://github.com/eleshinlomo', private: true },
    liveUrl: 'https://event.fixupe.com',
    category: 'marketplace',
    featured: false
  },
  {
    id: 5,
    title: 'E-commerce Recommendation Engine',
    description: 'Personalized shopping platform with AI recommendations',
    longDescription: 'Advanced e-commerce marketplace with AI-powered recommendation system using collaborative filtering. Integrates with regional trending topics to provide personalized shopping experiences.',
    technologies: ['Python', 'Scikit-learn', 'Node.js', 'MongoDB', 'AWS', 'S3', 'SES'],
    githubUrl: { url: 'https://github.com/eleshinlomo', private: true },
    liveUrl: 'https://elteema.com',
    category: 'marketplace',
    featured: false
  },
];

const categoryConfig = {
  ai: {
    icon: Cpu,
    color: 'bg-gradient-to-br from-purple-600 to-indigo-700',
    textColor: 'text-purple-600',
    badgeColor: 'bg-purple-100 text-purple-700'
  },
  web: {
    icon: Monitor,
    color: 'bg-gradient-to-br from-blue-600 to-cyan-600',
    textColor: 'text-blue-600',
    badgeColor: 'bg-blue-100 text-blue-700'
  },
  mobile: {
    icon: Briefcase,
    color: 'bg-gradient-to-br from-green-600 to-emerald-700',
    textColor: 'text-green-600',
    badgeColor: 'bg-green-100 text-green-700'
  },
  data: {
    icon: Database,
    color: 'bg-gradient-to-br from-indigo-600 to-violet-700',
    textColor: 'text-indigo-600',
    badgeColor: 'bg-indigo-100 text-indigo-700'
  },
  marketplace: {
    icon: ShoppingBag,
    color: 'bg-gradient-to-br from-blue-600 to-slate-800',
    textColor: 'text-blue-600',
    badgeColor: 'bg-slate-100 text-slate-700'
  },
    logs: {
    icon: BarChart,
    color: 'bg-gradient-to-br from-gray-600 to-slate-800',
    textColor: 'text-blue-600',
    badgeColor: 'bg-slate-100 text-slate-700'
  },
};

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-white">
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
            <Briefcase className="w-4 h-4" />
            <span>PORTFOLIO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects
          </h2>
          
           
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const { icon: Icon, color, textColor, badgeColor } = categoryConfig[project.category];
            const isHovered = hoveredProject === project.id;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                  {/* Left Side - Visual & Category */}
                  <div className="lg:w-2/5">
                    <div className="space-y-6">
                      {/* Category Badge */}
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl ${color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeColor}`}>
                            {project.category.toUpperCase()}
                          </span>
                          {project.featured && (
                            <span className="ml-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                              FEATURED
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Project Title & Description */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Details & Actions */}
                  <div className="lg:w-3/5">
                    <div className="space-y-8">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-4">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View Live</span>
                          </motion.a>
                        )}
                        
                        <motion.a
                          href="mailto:contact@fixupe.com?subject=Access Request"
                          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 group"
                          whileHover={{ x: 5 }}
                        >
                          <span>Request Access</span>
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.a>
                      </div>

                      {/* GitHub Status */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Github className="w-4 h-4" />
                            <span>Repository:</span>
                          </div>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                            {project.githubUrl.private ? 'Private Enterprise' : 'Public'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}