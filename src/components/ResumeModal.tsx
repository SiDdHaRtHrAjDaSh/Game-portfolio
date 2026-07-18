import { X } from 'lucide-react';
import { resumeData } from '../data';
import { 
  FaJava, FaPython, FaC, FaJs, 
  FaReact, FaNodeJs, FaAws, FaDocker, 
  FaJenkins, FaLinux, FaGithub, FaDatabase
} from "react-icons/fa6";

const getIconForSkill = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('java') && !s.includes('script')) return <FaJava className="text-lg" />;
  if (s.includes('python')) return <FaPython className="text-lg" />;
  if (s.includes('c/c++') || s.includes('c++')) return <FaC className="text-lg" />;
  if (s.includes('javascript')) return <FaJs className="text-lg" />;
  if (s.includes('react')) return <FaReact className="text-lg" />;
  if (s.includes('node')) return <FaNodeJs className="text-lg" />;
  if (s.includes('aws')) return <FaAws className="text-lg" />;
  if (s.includes('git ') || s === 'git') return <FaGithub className="text-lg" />;
  if (s.includes('docker')) return <FaDocker className="text-lg" />;
  if (s.includes('jenkins')) return <FaJenkins className="text-lg" />;
  if (s.includes('linux')) return <FaLinux className="text-lg" />;
  if (s.includes('github')) return <FaGithub className="text-lg" />;
  if (s.includes('postgres') || s.includes('mysql') || s.includes('mongo') || s.includes('duckdb')) return <FaDatabase className="text-lg" />;
  
  return <span className="text-yellow-400 mt-[2px] leading-none text-sm">►</span>;
}

interface ResumeModalProps {
  sectionId: string;
  onClose: () => void;
}

export function ResumeModal({ sectionId, onClose }: ResumeModalProps) {
  const renderContent = () => {
    switch (sectionId) {
      case 'experience':
        return (
          <div className="space-y-8">
            <h2 className="text-xl sm:text-2xl text-yellow-400 pixel-text mb-6 border-b-4 border-gray-700 pb-4">
              {resumeData.experience.title}
            </h2>
            {resumeData.experience.content.map((exp, idx) => (
              <div key={idx} className="border-2 border-dashed border-gray-700 p-4 rounded bg-transparent">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                  <div className="flex items-start gap-4">
                    {(exp as any).logo && (
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded p-1 shrink-0 overflow-hidden">
                        <img src={(exp as any).logo} alt={exp.company} className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                      </div>
                    )}
                    <div>
                      <h3 className="text-white pixel-text text-sm sm:text-base mb-2 leading-relaxed">{exp.role}</h3>
                      <p className="text-blue-400 pixel-text text-[10px]">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <p className="text-gray-400 pixel-text text-[10px] mb-2">{exp.date}</p>
                    <p className="text-gray-500 pixel-text text-[10px]">{exp.location}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4 list-none text-gray-300 text-xs sm:text-sm leading-relaxed font-mono">
                  {exp.bullets.map((b, i) => <li key={i} className="flex gap-2"><span className="text-yellow-400 mt-1">►</span><span>{b}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'projects':
        return (
          <div className="space-y-8">
            <h2 className="text-xl sm:text-2xl text-yellow-400 pixel-text mb-6 border-b-4 border-gray-700 pb-4">
              {resumeData.projects.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.projects.content.map((proj, idx) => (
                <div key={idx} className="border-2 border-dashed border-gray-700 p-4 rounded bg-transparent flex flex-col">
                  <h3 className="text-white pixel-text text-sm sm:text-base mb-3 leading-relaxed">{proj.name}</h3>
                  <p className="text-blue-400 pixel-text text-[10px] mb-4 leading-loose">TECH: {proj.tech}</p>
                  <ul className="space-y-4 list-none text-gray-300 text-xs sm:text-sm leading-relaxed font-mono flex-1">
                    {proj.bullets.map((b, i) => <li key={i} className="flex gap-2"><span className="text-yellow-400 mt-1">►</span><span>{b}</span></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-8">
            <h2 className="text-xl sm:text-2xl text-yellow-400 pixel-text mb-6 border-b-4 border-gray-700 pb-4">
              {resumeData.skills.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.content.map((skill, idx) => (
                <div key={idx} className="border-2 border-dashed border-gray-700 p-4 rounded bg-transparent">
                  <h3 className="text-white pixel-text text-sm mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, i) => (
                      <span key={i} className="flex items-center gap-2 bg-gray-800 border-2 border-gray-600 px-3 py-2 text-xs sm:text-sm font-mono text-gray-300">
                        {getIconForSkill(item)}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="space-y-8">
            <h2 className="text-xl sm:text-2xl text-yellow-400 pixel-text mb-6 border-b-4 border-gray-700 pb-4">
              {resumeData.education.title}
            </h2>
            <div className="space-y-6">
              {resumeData.education.content.map((edu, idx) => (
                <div key={idx} className="border-2 border-dashed border-gray-700 p-4 rounded bg-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {(edu as any).logo && (
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded p-1 shrink-0 overflow-hidden">
                        <img src={(edu as any).logo} alt={edu.school} className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                      </div>
                    )}
                    <div>
                      <h3 className="text-white pixel-text text-sm sm:text-base mb-3 leading-relaxed">{edu.school}</h3>
                      <p className="text-blue-400 pixel-text text-[10px] leading-loose">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="shrink-0 bg-[#00aa00] border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] mt-4 sm:mt-0 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center flex-col transform rotate-12 mx-auto sm:mx-0">
                    <span className="text-white pixel-text text-[8px] sm:text-[10px] mb-1 drop-shadow-md">GPA</span>
                    <span className="text-yellow-300 pixel-text text-xs sm:text-sm drop-shadow-md">{edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'extracurriculars':
        return (
          <div className="space-y-8">
            <h2 className="text-xl sm:text-2xl text-yellow-400 pixel-text mb-6 border-b-4 border-gray-700 pb-4">
              {resumeData.extracurriculars.title}
            </h2>
            <div className="space-y-6">
              {resumeData.extracurriculars.content.map((ext, idx) => (
                <div key={idx} className="border-2 border-dashed border-gray-700 p-4 rounded bg-transparent">
                  <h3 className="text-white pixel-text text-sm sm:text-base mb-3 leading-relaxed">{ext.role}</h3>
                  <p className="text-blue-400 pixel-text text-[10px] mb-4">{ext.org}</p>
                  <ul className="space-y-4 list-none text-gray-300 text-xs sm:text-sm leading-relaxed font-mono">
                    {ext.bullets.map((b, i) => <li key={i} className="flex gap-2"><span className="text-yellow-400 mt-1">►</span><span>{b}</span></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="relative underground-container p-6 sm:p-10 max-w-5xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide shadow-[16px_16px_0_rgba(0,0,0,0.5)]">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-red-600 hover:bg-red-500 text-white p-2 border-4 border-black text-xl pixel-text active:scale-95 transition-transform"
        >
          <X size={28} strokeWidth={4} />
        </button>
        {renderContent()}
      </div>
    </div>
  );
}
