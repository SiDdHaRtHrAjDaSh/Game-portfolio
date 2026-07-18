import { resumeData } from '../data';
import { 
  FaJava, FaPython, FaC, FaJs, 
  FaReact, FaNodeJs, FaAws, FaDocker, 
  FaJenkins, FaLinux, FaGithub, FaDatabase, FaArrowLeft
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

export function SimpleResumeView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#0000a8] text-white p-6 sm:p-12 overflow-y-auto font-sans pb-20">
      <button onClick={onBack} className="fixed top-4 left-4 sm:top-8 sm:left-8 bg-black/40 hover:bg-black/60 p-4 rounded-full z-50 backdrop-blur-sm border-2 border-white/50 transition-all group flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px]">
        <FaArrowLeft className="text-white text-xl group-hover:text-yellow-400 transition-colors" />
      </button>

      <div className="max-w-5xl mx-auto space-y-20 mt-12 sm:mt-8">
        
        {/* Header */}
        <div className="text-center space-y-6 bg-black/30 p-8 rounded-xl border-4 border-yellow-400 shadow-[8px_8px_0_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-white pixel-text drop-shadow-[4px_4px_0_rgba(0,0,0,1)] leading-tight">{resumeData.header.name}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm pixel-text bg-black/50 inline-flex p-3 sm:p-4 rounded-lg border-2 border-white/20 shadow-inner">
             <a href={resumeData.header.github} target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">GITHUB</a>
             <span className="text-gray-500">|</span>
             <a href={resumeData.header.linkedin} target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">LINKEDIN</a>
             <span className="text-gray-500">|</span>
             <a href={`mailto:${resumeData.header.contact.split(' | ')[1]}`} className="hover:text-yellow-400 transition-colors">EMAIL</a>
          </div>
        </div>

        {/* Experience */}
        <section className="space-y-8">
            <h2 className="text-2xl sm:text-3xl text-yellow-400 pixel-text border-b-4 border-white/20 pb-4 inline-block pr-8 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              {resumeData.experience.title}
            </h2>
            <div className="space-y-8">
                {resumeData.experience.content.map((exp: any, idx) => (
                <div key={idx} className="bg-black/40 border-4 border-[#5c94fc] p-6 rounded-lg shadow-[8px_8px_0_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform">
                    <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                        <div className="flex items-start gap-4">
                            {exp.logo && (
                                <div className="w-12 h-12 bg-white rounded p-1 shrink-0 overflow-hidden border-2 border-white shadow-sm">
                                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                                </div>
                            )}
                            <div>
                                <h3 className="text-white pixel-text text-base sm:text-lg mb-2 leading-relaxed">{exp.role}</h3>
                                <p className="text-yellow-300 pixel-text text-[10px] sm:text-xs">{exp.company}</p>
                            </div>
                        </div>
                        <div className="text-left sm:text-right mt-2 sm:mt-0">
                            <p className="text-gray-300 pixel-text text-[10px] mb-2">{exp.date}</p>
                            <p className="text-gray-400 pixel-text text-[10px]">{exp.location}</p>
                        </div>
                    </div>
                    <ul className="mt-6 space-y-4 list-none text-gray-100 text-sm sm:text-base leading-relaxed font-mono">
                    {exp.bullets.map((b: string, i: number) => <li key={i} className="flex gap-3 items-start"><span className="text-yellow-400 mt-1 shrink-0">►</span><span>{b}</span></li>)}
                    </ul>
                </div>
                ))}
            </div>
        </section>

        {/* Projects */}
        <section className="space-y-8">
            <h2 className="text-2xl sm:text-3xl text-yellow-400 pixel-text border-b-4 border-white/20 pb-4 inline-block pr-8 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              {resumeData.projects.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {resumeData.projects.content.map((proj: any, idx) => (
                <div key={idx} className="bg-black/40 border-4 border-[#e83800] p-6 rounded-lg shadow-[8px_8px_0_rgba(0,0,0,0.5)] flex flex-col hover:-translate-y-1 transition-transform">
                  <h3 className="text-white pixel-text text-base sm:text-lg mb-4 leading-relaxed">{proj.name}</h3>
                  <p className="text-[#f8b8f8] pixel-text text-[10px] mb-6 leading-loose">TECH: {proj.tech}</p>
                  <ul className="space-y-4 list-none text-gray-100 text-sm sm:text-base leading-relaxed font-mono flex-1">
                    {proj.bullets.map((b: string, i: number) => <li key={i} className="flex gap-3 items-start"><span className="text-yellow-400 mt-1 shrink-0">►</span><span>{b}</span></li>)}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Skills */}
        <section className="space-y-8">
            <h2 className="text-2xl sm:text-3xl text-yellow-400 pixel-text border-b-4 border-white/20 pb-4 inline-block pr-8 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              {resumeData.skills.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resumeData.skills.content.map((skill: any, idx) => (
                <div key={idx} className="bg-black/40 border-4 border-[#00a800] p-5 rounded-lg shadow-[6px_6px_0_rgba(0,0,0,0.5)]">
                  <h3 className="text-white pixel-text text-xs sm:text-sm mb-5 text-center text-yellow-300">{skill.category}</h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skill.items.map((item: string, i: number) => (
                      <span key={i} className="flex items-center gap-2 bg-[#005800] border-2 border-[#00a800] px-3 py-2 text-xs sm:text-sm font-mono text-white shadow-sm rounded-md">
                        {getIconForSkill(item)}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Education */}
        <section className="space-y-8">
            <h2 className="text-2xl sm:text-3xl text-yellow-400 pixel-text border-b-4 border-white/20 pb-4 inline-block pr-8 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              {resumeData.education.title}
            </h2>
            <div className="space-y-6">
              {resumeData.education.content.map((edu: any, idx) => (
                <div key={idx} className="bg-black/40 border-4 border-[#fc9838] p-6 rounded-lg shadow-[8px_8px_0_rgba(0,0,0,0.5)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-5">
                    {edu.logo && (
                      <div className="w-16 h-16 bg-white rounded-lg p-2 shrink-0 overflow-hidden border-2 border-white shadow-md">
                        <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                      </div>
                    )}
                    <div>
                      <h3 className="text-white pixel-text text-sm sm:text-base mb-3 leading-relaxed">{edu.school}</h3>
                      <p className="text-yellow-200 pixel-text text-[10px] leading-loose">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="shrink-0 bg-[#00aa00] border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] mt-4 sm:mt-0 rounded-full w-24 h-24 flex items-center justify-center flex-col transform rotate-12 mx-auto sm:mx-0 group hover:rotate-0 transition-transform">
                    <span className="text-white pixel-text text-[10px] mb-1 drop-shadow-md">GPA</span>
                    <span className="text-yellow-300 pixel-text text-sm drop-shadow-md">{edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
        </section>

      </div>
    </div>
  );
}
