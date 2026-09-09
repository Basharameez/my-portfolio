import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, RefreshCw } from 'lucide-react';

export const RotorDynSim: React.FC = () => {
  const [rpm, setRpm] = useState<number>(1780);
  const [faultType, setFaultType] = useState<'normal' | 'bpfo' | 'bpfi' | 'bsf'>('bpfo');
  const [severity, setSeverity] = useState<number>(3);
  const [isLive, setIsLive] = useState<boolean>(true);
  const [timeStep, setTimeStep] = useState<number>(0);

  // Animate waveform continuous tick
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setTimeStep(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [isLive]);

  // Derived telemetry metrics
  const shaftFreq = (rpm / 60).toFixed(2); // Hz
  
  // Defect frequencies multipliers
  const bpfoFreq = (parseFloat(shaftFreq) * 3.58).toFixed(1); // Outer race defect frequency
  const bpfiFreq = (parseFloat(shaftFreq) * 5.42).toFixed(1); // Inner race defect frequency
  const bsfFreq = (parseFloat(shaftFreq) * 2.32).toFixed(1);  // Ball defect frequency

  let activeDefectFreq = 'N/A';
  let defectLabel = 'Normal Operation';
  let rmsVibration = 1.2 + (severity * 0.4); // mm/s
  let isoZone = 'A (Good)';
  let zoneColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';

  if (faultType === 'bpfo') {
    activeDefectFreq = `${bpfoFreq} Hz`;
    defectLabel = 'Outer Race Fault (BPFO)';
    rmsVibration = 4.5 + (severity * 1.8);
  } else if (faultType === 'bpfi') {
    activeDefectFreq = `${bpfiFreq} Hz`;
    defectLabel = 'Inner Race Fault (BPFI)';
    rmsVibration = 5.2 + (severity * 2.1);
  } else if (faultType === 'bsf') {
    activeDefectFreq = `${bsfFreq} Hz`;
    defectLabel = 'Ball Element Defect (BSF)';
    rmsVibration = 3.8 + (severity * 1.5);
  }

  if (rmsVibration > 7.1) {
    isoZone = 'D (Unacceptable)';
    zoneColor = 'text-red-400 bg-red-500/10 border-red-500/30';
  } else if (rmsVibration > 4.5) {
    isoZone = 'C (Unsatisfactory)';
    zoneColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
  } else if (rmsVibration > 2.8) {
    isoZone = 'B (Acceptable)';
    zoneColor = 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
  }

  // Generate dynamic FFT spectrum points
  const generateFftPoints = () => {
    const points: Array<[number, number]> = [];
    const totalPoints = 120;
    for (let i = 0; i < totalPoints; i++) {
      const x = (i / totalPoints) * 100;
      let y = 15 + Math.sin((i + timeStep) * 0.3) * 3 + Math.random() * 4; // Noise floor

      // 1X Shaft Speed Peak
      if (Math.abs(i - 20) < 3) {
        y += 40 + Math.sin(timeStep * 0.5) * 5;
      }
      // 2X Shaft Speed Peak
      if (Math.abs(i - 40) < 3) {
        y += 20;
      }

      // Fault Spikes
      if (faultType === 'bpfo' && Math.abs(i - 72) < 4) {
        y += 65 * (severity / 5);
      }
      if (faultType === 'bpfi' && Math.abs(i - 95) < 4) {
        y += 80 * (severity / 5);
      }
      if (faultType === 'bsf' && Math.abs(i - 48) < 4) {
        y += 55 * (severity / 5);
      }

      points.push([x, Math.min(95, y)]);
    }
    return points;
  };

  const fftPoints = generateFftPoints();
  const polylineStr = fftPoints.map(([x, y]) => `${x},${100 - y}`).join(' ');

  return (
    <div className="w-full bg-[#0B0B10] border border-white/15 rounded-2xl p-6 sm:p-8 relative text-left shadow-2xl overflow-hidden backdrop-blur-md">
      
      {/* Simulation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
              LIVE INDUSTRIAL TELEMETRY &amp; FFT DIAGNOSTICS DEMO
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white font-display">
            RotorDyn Real-Time Vibration &amp; Spectrum Simulator
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLive(!isLive)}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
              isLive 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-white/5 text-neutral-400 border-white/10'
            }`}
          >
            <Activity className={`w-3.5 h-3.5 ${isLive ? 'animate-spin' : ''}`} />
            <span>{isLive ? 'STREAMING' : 'PAUSED'}</span>
          </button>

          <button
            onClick={() => {
              setRpm(1780);
              setFaultType('bpfo');
              setSeverity(3);
            }}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors"
            title="Reset Simulation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Control Sliders & Fault Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 bg-white/[0.02] border border-white/10 rounded-xl p-5">
        
        {/* Fault Selector */}
        <div>
          <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-2 font-bold">
            01 // BEARING FAULT DIAGNOSTIC TYPE
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'normal', label: 'Normal' },
              { id: 'bpfo', label: 'BPFO (Outer)' },
              { id: 'bpfi', label: 'BPFI (Inner)' },
              { id: 'bsf', label: 'BSF (Ball)' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFaultType(f.id as any)}
                className={`px-3 py-2 text-xs font-mono font-semibold rounded-lg border transition-all text-left ${
                  faultType === f.id
                    ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-black/40 border-white/10 text-neutral-400 hover:border-white/20'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* RPM Speed Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">
              02 // SHAFT SPEED (RPM)
            </label>
            <span className="text-xs font-mono font-bold text-white">{rpm} RPM</span>
          </div>
          <input
            type="range"
            min="600"
            max="3600"
            step="20"
            value={rpm}
            onChange={(e) => setRpm(Number(e.target.value))}
            className="w-full accent-[#D4AF37] bg-neutral-800 rounded-lg cursor-pointer h-2"
          />
          <div className="flex justify-between text-[9px] font-mono text-neutral-500 mt-1">
            <span>600 RPM (10Hz)</span>
            <span>3600 RPM (60Hz)</span>
          </div>
        </div>

        {/* Severity Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">
              03 // DEFECT SEVERITY LEVEL
            </label>
            <span className="text-xs font-mono font-bold text-[#D4AF37]">LEVEL {severity} / 5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={severity}
            onChange={(e) => setSeverity(Number(e.target.value))}
            className="w-full accent-[#D4AF37] bg-neutral-800 rounded-lg cursor-pointer h-2"
          />
          <div className="flex justify-between text-[9px] font-mono text-neutral-500 mt-1">
            <span>1 (Incipient)</span>
            <span>5 (Critical)</span>
          </div>
        </div>

      </div>

      {/* Live FFT Spectrum Chart */}
      <div className="relative bg-black/80 border border-white/10 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-2 border-b border-white/10 pb-2">
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[#D4AF37]" />
            FFT FREQUENCY SPECTRUM ANALYSIS (0 - 500 Hz)
          </span>
          <span className="text-[10px] font-mono text-emerald-400 font-bold">
            SAMPLING: 10.24 kHz // 4096 LINES
          </span>
        </div>

        {/* SVG FFT Chart */}
        <div className="h-44 w-full relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid Lines */}
            {[20, 40, 60, 80].map((y) => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.05)" strokeDasharray="2,2" />
            ))}
            {[25, 50, 75].map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="rgba(255,255,255,0.05)" strokeDasharray="2,2" />
            ))}

            {/* FFT Area Fill */}
            <polygon
              points={`0,100 ${polylineStr} 100,100`}
              fill="url(#fftGradient)"
              opacity="0.3"
            />

            {/* FFT Spectrum Line */}
            <polyline
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.2"
              points={polylineStr}
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="fftGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Fault Peak Marker Annotation */}
          {faultType !== 'normal' && (
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute top-4 right-8 bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] px-3 py-1 rounded text-[10px] font-mono font-bold"
            >
              {defectLabel.toUpperCase()} DETECTED @ {activeDefectFreq}
            </motion.div>
          )}
        </div>

        {/* X-Axis Labels */}
        <div className="flex justify-between text-[9px] font-mono text-neutral-500 mt-2 border-t border-white/10 pt-1">
          <span>0 Hz</span>
          <span>125 Hz (1X/2X Shaft)</span>
          <span>250 Hz</span>
          <span>375 Hz (Defect Harmonics)</span>
          <span>500 Hz</span>
        </div>
      </div>

      {/* Telemetry Output HUD Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
            SHAFT FREQUENCY (1X)
          </span>
          <span className="text-sm sm:text-base font-mono font-bold text-white">
            {shaftFreq} Hz
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
            PEAK DEFECT FREQ
          </span>
          <span className="text-sm sm:text-base font-mono font-bold text-[#D4AF37]">
            {activeDefectFreq}
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
            RMS VIBRATION VELOCITY
          </span>
          <span className="text-sm sm:text-base font-mono font-bold text-white">
            {rmsVibration.toFixed(2)} mm/s
          </span>
        </div>

        <div className={`p-3.5 rounded-xl border ${zoneColor}`}>
          <span className="text-[9px] font-mono uppercase tracking-wider block mb-1 font-bold">
            ISO 10816 SEVERITY
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold">
            ZONE {isoZone}
          </span>
        </div>

      </div>

    </div>
  );
};

export default RotorDynSim;
