import React from 'react';
import { ResumeData, Project } from '../types';
import { SkillsRadar } from './IntensityChart';
import { Mail, Github, ArrowUpRight, MapPin, Download, Code, Database, Layout, BrainCircuit, GraduationCap, ExternalLink } from 'lucide-react';

interface ResumeViewProps {
  data: ResumeData;
  onReset: () => void;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/60 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-200/20 hover:-translate-y-1 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
      
      {/* Glass Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className={`h-32 -mt-8 -mx-8 mb-8 rounded-t-[2rem] bg-gradient-to-r ${project.imageGradient || 'from-slate-200 to-slate-300'} opacity-90 group-hover:opacity-100 transition-opacity relative overflow-hidden`}>
         <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all"></div>
      </div>
      
      <div className="relative z-10 flex justify-between items-start mb-4">
        <div>
           <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block bg-slate-100/50 w-fit px-2 py-1 rounded-md border border-slate-200/50">{project.period}</span>
           <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{project.name}</h3>
        </div>
        {project.links && project.links[0] && (
          <a href={project.links[0].url} target="_blank" rel="noreferrer" className="p-2 bg-white/80 border border-white rounded-full hover:bg-black hover:text-white hover:border-black transition-all shadow-sm">
            <ArrowUpRight className="w-5 h-5" />
          </a>
        )}
      </div>

      <p className="relative z-10 text-slate-600 mb-6 font-medium leading-relaxed text-sm">
        {project.description}
      </p>

      <div className="relative z-10 mb-6 bg-white/40 p-4 rounded-xl border border-white/60 shadow-inner">
        <h4 className="text-xs font-extrabold text-slate-800 mb-3 flex items-center gap-2 uppercase tracking-wide">
          <Code className="w-3 h-3 text-blue-500"/> Key Achievements
        </h4>
        <ul className="space-y-2">
          {project.whatDidIDo.map((task, i) => (
            <li key={i} className="text-sm text-slate-600 flex items-start gap-2 leading-snug">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(96,165,250,0.6)]"></span>
              {task}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto relative z-10">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-3 py-1 rounded-lg bg-white/50 text-slate-600 text-[11px] font-bold border border-slate-200/50 hover:bg-white hover:scale-105 transition-all cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ResumeView: React.FC<ResumeViewProps> = ({ data }) => {
  return (
    <div className="font-sans text-slate-900 min-h-screen relative overflow-x-hidden bg-[#f8f9fa]">
      
      {/* AMBIENT BACKGROUND BLOBS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob"></div>
         <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-pink-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
         {/* Mesh gradient overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg shadow-slate-200/10 rounded-full py-3 px-8 flex justify-between items-center transition-all hover:bg-white/60">
        <div className="font-bold text-lg tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
            Sooin.
        </div>
        <div className="flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-black hover:scale-105 transition transform">About</a>
          <a href="#projects" className="hover:text-black hover:scale-105 transition transform">Projects</a>
          <a href="#contact" className="hover:text-black hover:scale-105 transition transform">Contact</a>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20">
        
        {/* HERO */}
        <header className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/60 text-slate-600 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Hire
             </div>
             <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600">
               {data.fullName}
             </h1>
             <p className="text-2xl md:text-3xl font-medium text-slate-500 mb-10 leading-tight max-w-2xl">
               {data.tagline}
             </p>
             <div className="flex flex-wrap gap-4">
                <a href={`mailto:${data.email}`} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black hover:scale-105 transition shadow-xl shadow-slate-900/20 flex items-center gap-3">
                  <Mail className="w-5 h-5"/> Email Me
                </a>
                <a href={data.github} target="_blank" rel="noreferrer" className="bg-white/60 backdrop-blur-md border border-white/60 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-white transition flex items-center gap-3 shadow-lg shadow-slate-200/20">
                  <Github className="w-5 h-5"/> Github
                </a>
             </div>
          </div>
          
          <div className="lg:col-span-5 relative">
             {/* Interactive Radar Chart Container */}
             <div className="relative transition-transform hover:scale-[1.02] duration-500">
                <SkillsRadar data={data.skillMetrics} />
             </div>
          </div>
        </header>

        {/* ABOUT ME */}
        <section id="about" className="mb-32 max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/30 relative overflow-hidden">
             {/* Decorative quote */}
             <div className="absolute top-8 left-8 text-9xl font-serif text-blue-100/50 select-none -z-10">“</div>
             
             <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-blue-600"></span>
                About Me
             </h3>
             <div className="prose prose-lg md:prose-xl prose-slate max-w-none leading-relaxed text-slate-700 font-medium">
                {data.summary.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6 relative z-10">{paragraph}</p>
                ))}
             </div>
          </div>
        </section>

        {/* BENTO GRID - Stats & Info */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {/* Education */}
            <div className="md:col-span-2 bg-slate-900 text-white rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
               
               <div className="flex justify-between items-start mb-12 relative z-10">
                 <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                   <GraduationCap className="w-8 h-8 text-blue-300" />
                 </div>
                 <span className="text-blue-300 text-sm font-bold px-3 py-1 rounded-full bg-blue-900/50 border border-blue-800">GPA: {data.education[0].year}</span>
               </div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-2">{data.education[0].institution}</h3>
                 <p className="text-slate-400 text-lg">{data.education[0].degree}</p>
                 <p className="text-sm text-slate-500 mt-4 font-medium">{data.education[0].details}</p>
               </div>
            </div>

            {/* Location */}
            <div className="md:col-span-1 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-[2.5rem] p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform shadow-lg shadow-emerald-500/20 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               <MapPin className="w-10 h-10 text-white/90" />
               <div className="relative z-10">
                 <p className="text-emerald-100 font-bold text-xs uppercase tracking-widest mb-2">Based In</p>
                 <p className="text-3xl font-bold tracking-tight">{data.location.split(',')[0]}</p>
               </div>
            </div>

            {/* Language */}
            <div className="md:col-span-1 bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center hover:border-blue-300 transition-all shadow-lg shadow-slate-200/30 group">
               <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-400 mb-2 group-hover:scale-110 transition-transform">IELTS</span>
               <span className="text-xl font-bold text-slate-800">6.5 (B2)</span>
               <span className="text-xs text-slate-500 mt-2 uppercase tracking-wide font-bold">English Proficiency</span>
            </div>

            {/* Tech Stack Pills */}
            <div className="md:col-span-4 bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/60 shadow-xl shadow-slate-200/20">
               <h3 className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mb-8">Technical Arsenal</h3>
               <div className="flex flex-wrap gap-x-12 gap-y-8">
                 {data.skills.map((group, idx) => (
                   <div key={idx}>
                     <h4 className="font-bold text-slate-900 mb-4 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {group.category}
                     </h4>
                     <div className="flex flex-wrap gap-3">
                       {group.items.map((skill) => (
                         <span key={skill} className="px-4 py-2.5 bg-white/70 border border-white/80 rounded-xl text-slate-700 text-sm font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default">
                           {skill}
                         </span>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-32">
          <div className="flex items-end justify-between mb-16 px-4">
            <div className="relative">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight relative z-10">Featured Works</h2>
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-blue-200/50 -rotate-1 -z-0 blur-sm"></div>
            </div>
            <span className="hidden md:block text-slate-400 font-medium px-4 py-2 bg-white/50 rounded-full border border-white/50 backdrop-blur-sm">2024 - 2025</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
             {data.projects.map((project, idx) => (
               <ProjectCard key={idx} project={project} />
             ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-32 max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold mb-12 text-center">Experience & Activities</h2>
           <div className="space-y-8">
             {data.experience.map((exp, idx) => (
               <div key={idx} className="group relative bg-white/40 backdrop-blur-lg border border-white/50 p-8 rounded-3xl shadow-sm hover:bg-white/60 hover:shadow-xl transition-all duration-300">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 
                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-xs font-bold text-slate-500 bg-white/50 px-3 py-1 rounded-full border border-white/60">{exp.duration}</span>
                 </div>
                 <p className="text-lg text-blue-600 font-medium mb-4">{exp.company}</p>
                 <ul className="space-y-2">
                   {exp.achievements.map((ach, i) => (
                     <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                       <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5"></span>
                       {ach}
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
           </div>
        </section>

        {/* FOOTER */}
        <section id="contact" className="relative">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] transform rotate-1 opacity-50 blur-xl"></div>
           <div className="relative bg-slate-900 rounded-[3rem] p-12 md:p-24 text-white text-center overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
               
               <div className="relative z-10">
                   <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Let's build something amazing.</h2>
                   <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                     I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                   </p>
                   <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                     <a href={`mailto:${data.email}`} className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-blue-50 hover:scale-105 transition w-full md:w-auto shadow-xl shadow-white/10">
                       Say Hello
                     </a>
                     <div className="flex gap-6 mt-6 md:mt-0">
                        <a href={data.github} className="p-4 bg-slate-800 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700 transition">
                          <Github className="w-6 h-6"/>
                        </a>
                     </div>
                   </div>
                   <div className="mt-24 text-slate-600 text-sm font-medium">
                     © {new Date().getFullYear()} Sooin Jung. All rights reserved.
                   </div>
               </div>
           </div>
        </section>

      </div>
    </div>
  );
};