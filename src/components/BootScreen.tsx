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
    'DASHBOARD SYSTEM STATUS: READY',
    'LAUNCHING EXPERIENCE DECK...'
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < logSequence.length) {
        setLogs((prev) => [...prev, logSequence[index]]);
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
    <div className="fixed inset-0 bg-[#0A0A0C] z-50 flex items-center justify-center p-4 font-mono select-none scanline">
      <div className="w-full max-w-xl border border-[#1E202B] bg-[#121319] rounded-lg p-6 shadow-2xl relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#1E202B] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Core Ingestion Console v2.0</span>
        </div>

        {/* Console Log Stream */}
        <div className="h-64 overflow-y-auto flex flex-col gap-1 text-sm text-[#E2E8F0] select-text">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="text-[#00F0FF]">&gt;</span>
              <span className={log.includes('READY') ? 'text-[#00F0FF] font-bold' : ''}>
                {log}
              </span>
            </div>
          ))}
          {logs.length < logSequence.length && (
            <div className="flex gap-1 items-center">
              <span className="text-[#00F0FF]">&gt;</span>
              <span className="w-2 h-4 bg-[#00F0FF] animate-pulse"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
