import { useEffect, useState } from 'react';

interface BootScreenProps {
  onComplete: () => void;
}

export const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [logs, setLogs] = useState<string[]>([]);
  const logSequence = [
    'SYSTEM INITIALIZATION STARTED...',
    'INGESTING PROFILE: SHAIK RAMEEZ BASHA // SOFTWARE ENGINEER',
    'PARSING DATA DICTIONARY & DESIGN TOKENS......... OK',
    'MAPPING ROTORDYN SIGNAL TELEMETRY VISUALS....... OK',
    'DECRYPTING CODEORIGIN AST METRICS LAYERS......... OK',
    'COMPILING PYTHON_WEB_COMPILER EXECUTION CONTEXT.. OK',
    'READING STUDENT-INFO-PORTAL SPREADSHEETS........ OK',
    'CONNECTING TO INTEL_3 SQLITE INTERACTIVE MODEL... OK',
    'INTEGRATING IEEE RESEARCH ATTENTION METRIC...... OK',
    'TACTICAL ENGINE STATUS: READY',
    'LAUNCHING EXPERIENCE DECK...'
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < logSequence.length) {
        const nextLog = logSequence[index];
        setLogs((prev) => [...prev, nextLog]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#08080A] z-50 flex items-center justify-center p-4 font-mono select-none">
      <div className="w-full max-w-xl border-4 border-double border-white bg-[#141418] p-6 shadow-[8px_8px_0px_#FF3D00] relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF3D00]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFD600]"></span>
            <span className="w-3 h-3 rounded-full bg-black"></span>
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Tactical Blueprint Boot Console v4.0</span>
        </div>

        {/* Console Log Stream */}
        <div className="h-64 overflow-y-auto flex flex-col gap-1.5 text-xs text-[#F4F4F6] select-text font-bold">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="text-[#FF3D00]">&gt;</span>
              <span className={log && log.includes('READY') ? 'text-[#FFD600] font-black' : ''}>
                {log}
              </span>
            </div>
          ))}
          {logs.length < logSequence.length && (
            <div className="flex gap-1 items-center">
              <span className="text-[#FF3D00]">&gt;</span>
              <span className="w-2 h-4 bg-[#FF3D00] animate-pulse"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
