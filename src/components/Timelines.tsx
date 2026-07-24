import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';

export const Timelines = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 select-none font-mono">
      {/* Experience Timeline */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Briefcase className="text-[#00F0FF]" size={20} />
          <h3 className="text-lg font-bold font-sans text-[#E2E8F0] tracking-wide">Professional Experience</h3>
        </div>

        <div className="relative pl-6 border-l border-[#1E202B] flex flex-col gap-8">
          {/* Node 1 */}
          <div className="relative">
            <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-[#00F0FF] ring-4 ring-[#00F0FF]/15" />
            <div className="flex justify-between items-start flex-wrap gap-1">
              <h4 className="text-sm font-bold font-sans text-gray-200">Software Engineer</h4>
              <span className="text-[10px] text-[#7000FF] font-bold uppercase tracking-wider flex items-center gap-1 bg-[#121319] border border-[#1E202B] px-1.5 py-0.5 rounded">
                <Calendar size={10} /> 2026
              </span>
            </div>
            <span className="text-[11px] text-gray-400 font-semibold block mt-0.5">AfterQuery &bull; Remote Contract</span>
            <ul className="list-disc list-outside pl-4 text-xs text-gray-400 font-sans mt-3 space-y-1.5 leading-relaxed">
              <li>Authored automation testing suites to parse repository parameters and verify codebase complexity.</li>
              <li>Resolved boundary execution states and validation errors in systems target environments.</li>
              <li>Conducted architectural code analysis to ensure implementation compliance with core constraints.</li>
            </ul>
          </div>

          {/* Node 2 */}
          <div className="relative">
            <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-[#00F0FF]" />
            <div className="flex justify-between items-start flex-wrap gap-1">
              <h4 className="text-sm font-bold font-sans text-gray-200">Software Engineer (Proprietary Data Systems)</h4>
              <span className="text-[10px] text-[#7000FF] font-bold uppercase tracking-wider flex items-center gap-1 bg-[#121319] border border-[#1E202B] px-1.5 py-0.5 rounded">
                <Calendar size={10} /> Client Project
              </span>
            </div>
            <span className="text-[11px] text-gray-400 font-semibold block mt-0.5">RotorDyn &bull; Vibration Telemetry</span>
            <ul className="list-disc list-outside pl-4 text-xs text-gray-400 font-sans mt-3 space-y-1.5 leading-relaxed">
              <li>Engineered ingestion pipelines and interactive graphical widgets to process turbomachinery vibration signals.</li>
              <li>Developed PySide6 desktop interface integration scripts and established validation testing suites.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education & Research Timeline */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="text-[#00F0FF]" size={20} />
          <h3 className="text-lg font-bold font-sans text-[#E2E8F0] tracking-wide">Education & Research</h3>
        </div>

        <div className="relative pl-6 border-l border-[#1E202B] flex flex-col gap-8">
          {/* Node 1 */}
          <div className="relative">
            <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-[#7000FF] ring-4 ring-[#7000FF]/15" />
            <div className="flex justify-between items-start flex-wrap gap-1">
              <h4 className="text-sm font-bold font-sans text-gray-200">B.Tech in Computer Science & AI</h4>
              <span className="text-[10px] text-[#00F0FF] font-bold uppercase tracking-wider flex items-center gap-1 bg-[#121319] border border-[#1E202B] px-1.5 py-0.5 rounded">
                <Calendar size={10} /> 2022 &ndash; 2026
              </span>
            </div>
            <span className="text-[11px] text-gray-400 font-semibold block mt-0.5">Narasaraopeta Engineering College &bull; JNTUK</span>
            <div className="flex gap-4 mt-3">
              <div className="p-3 rounded bg-[#121319] border border-[#1E202B] flex flex-col gap-1 items-center justify-center flex-grow sm:flex-grow-0">
                <span className="text-[9px] text-gray-500 uppercase tracking-wider">CGPA Status</span>
                <span className="text-sm font-bold text-gray-200">7.79 / 10.0</span>
              </div>
            </div>
          </div>

          {/* Node 2 */}
          <div className="relative">
            <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-[#7000FF]" />
            <div className="flex justify-between items-start flex-wrap gap-1">
              <h4 className="text-sm font-bold font-sans text-gray-200">Explainable AI Research</h4>
              <span className="text-[10px] text-[#00F0FF] font-bold uppercase tracking-wider flex items-center gap-1 bg-[#121319] border border-[#1E202B] px-1.5 py-0.5 rounded">
                <Award size={10} /> Published
              </span>
            </div>
            <span className="text-[11px] text-gray-400 font-semibold block mt-0.5">IEEE Xplore &bull; Author Publication</span>
            <ul className="list-disc list-outside pl-4 text-xs text-gray-400 font-sans mt-3 space-y-1.5 leading-relaxed">
              <li>Authored and published research detailing model weights explanations and activation trajectory visual mapping.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
