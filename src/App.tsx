/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Layers, 
  Zap, 
  Cpu, 
  Globe,
  ArrowUpRight
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  tech: string[];
  highlight: string;
  live: string;
  code: string;
  category: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "NairaPower",
    category: "Energy Analytics",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    highlight: "Energy consumption analytics platform for Nigerian households and SMEs. Built for scale and clarity. Selected among Top 5 teams out of hundreds in a competitive hackathon.",
    live: "https://nairapower-v3.vercel.app/",
    code: "https://github.com/SossaDaDeveloper/nairapower-v3.git"
  },
  {
    title: "The Foundry Commons",
    category: "UI Recreation",
    tech: ["HTML5", "CSS3", "JavaScript"],
    highlight: "A pixel-perfect editorial-style UI recreation. High focus on typography hierarchy and complex CSS Grid/Flexbox spacing systems.",
    live: "https://sossadadeveloper.github.io/the-foundry-commons/",
    code: "https://github.com/SossaDaDeveloper/the-foundry-commons.git"
  },
  {
    title: "The Creative Store",
    category: "Figma-to-Code",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    highlight: "Transforming visual language into functional components. Fully responsive landing page built with reusable architectural patterns.",
    live: "https://the-creative-store.vercel.app/",
    code: "https://github.com/SossaDaDeveloper/the-creative-store.git"
  }
];

const SKILLS = [
  { name: "UI Implementation", icon: <Layers className="w-4 h-4" /> },
  { name: "Design-to-Code", icon: <Code2 className="w-4 h-4" /> },
  { name: "Responsive Architecture", icon: <Globe className="w-4 h-4" /> },
  { name: "TypeScript / React", icon: <Cpu className="w-4 h-4" /> },
  { name: "Debugging", icon: <Zap className="w-4 h-4" /> },
  { name: "Git", icon: <Github className="w-4 h-4" /> },
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-zinc-100 selection:text-zinc-900">
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-zinc-100 font-mono text-sm tracking-tighter"
          >
            SossaDaDeveloper
          </motion.div>
          <div className="flex gap-8">
            {['Projects', 'Skills', 'Experience'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest font-medium hover:text-zinc-100 transition-colors"
                id={`nav-${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <section className="mb-32 lg:mb-48" id="hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">
              Lagos, Nigeria • Frontend UI Developer
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-zinc-100 leading-[1.1] tracking-tight mb-8 max-w-3xl">
              Translating complex UI designs into <span className="text-zinc-500">flawless, performant code.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
              Sossa Moses here. I specialize in bridging the gap between Figma designs and production-grade software with a focus on pixel-perfect alignment and modern architecture.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:mosessossa0@gmail.com"
                className="group flex items-center gap-2 bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-all"
                id="cta-contact"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="https://github.com/SossaDaDeveloper"
                target="_blank"
                rel="no-referrer"
                className="flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 text-zinc-300 px-5 py-2.5 rounded-full text-sm font-medium hover:border-zinc-700 hover:text-white transition-all"
                id="cta-github"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        </section>

        {/* Skills Architecture */}
        <section className="mb-32 border-t border-zinc-900 pt-16" id="skills">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-zinc-100 text-lg font-medium mb-4">Skills Architecture</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                A toolkit optimized for precision, scalability, and seamless hand-off from design systems to code.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 border border-zinc-900 rounded-lg bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="p-2 bg-zinc-950 rounded-md border border-zinc-800 text-zinc-100">
                    {skill.icon}
                  </div>
                  <span className="text-zinc-300 text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-32" id="projects">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-zinc-100 mb-4">Featured Work</h2>
              <p className="text-zinc-500 max-w-md">Selected projects demonstrating UI integration and architectural standards.</p>
            </div>
            <div className="hidden md:block text-zinc-800 font-mono text-xs">
              001 — 003
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/40 rounded-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] uppercase font-mono tracking-widest rounded mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-medium text-zinc-100 mb-4 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-2xl">
                      {project.highlight}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[11px] text-zinc-600 font-mono">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="no-referrer"
                        className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                        id={`live-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Live Site
                      </a>
                      <a 
                        href={project.code} 
                        target="_blank" 
                        rel="no-referrer"
                        className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                        id={`code-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Leadership */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-900 pt-16" id="experience">
          <div>
            <h3 className="text-zinc-100 text-lg font-medium mb-8">Leadership & Recognition</h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-zinc-800">
                <div className="absolute -left-[5px] top-1 w-2.4 h-2.4 rounded-full bg-zinc-800 border-[1.5px] border-zinc-950" />
                <h4 className="text-zinc-200 font-medium mb-1">GDG Campus LASU</h4>
                <p className="text-xs text-zinc-500 font-mono mb-2">Technical Team Member</p>
                <p className="text-sm text-zinc-500 leading-relaxed italic">
                  "Delivered technical sessions on AI tools and modern frontend practices to the developer community."
                </p>
              </div>
              <div className="relative pl-6 border-l border-zinc-800">
                <div className="absolute -left-[5px] top-1 w-2.4 h-2.4 rounded-full bg-zinc-800 border-[1.5px] border-zinc-950" />
                <h4 className="text-zinc-200 font-medium mb-1">Top 5 Hackathon Finalist</h4>
                <p className="text-xs text-zinc-500 font-mono mb-2">Competing against 100+ teams</p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Proven track record of rapidly building high-fidelity UIs under intense time constraints.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-start md:items-end">
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl max-w-sm">
              <h3 className="text-zinc-100 font-medium mb-4">Let's build something beautiful.</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Now accepting freelance projects and architectural UI consulting.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-mono">mosessossa0@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs font-mono">09134336853</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-mono tracking-tighter">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] text-zinc-700 font-mono uppercase tracking-[0.2em]">
            © 2026 Sossa Moses. Built with precision.
          </div>
          <div className="flex gap-8">
            <a href="https://github.com/SossaDaDeveloper" className="text-zinc-600 hover:text-zinc-300 transition-colors">
              <Github className="w-4 h-4" id="footer-github" />
            </a>
            <a href="mailto:mosessossa0@gmail.com" className="text-zinc-600 hover:text-zinc-300 transition-colors">
              <Mail className="w-4 h-4" id="footer-mail" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
