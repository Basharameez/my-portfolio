import React, { useState, useEffect } from 'react';
import { Zap, Activity } from 'lucide-react';

export const SmartGridSim: React.FC = () => {
  const [anomalyType, setAnomalyType] = useState<'none' | 'tamper' | 'dip' | 'phase'>('tamper');
  const [hour, setHour] = useState<number>(14); // 2pm peak
  const [isLive, setIsLive] = useState<boolean>(true);

  // Time ticker
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setHour(prev => (prev + 1) % 24);
    }, 1200);
    return () => clearInterval(interval);
  }, [isLive]);

  // Derived grid metrics
  let statusText = 'GRID STABLE // NO ANOMALIES';
  let statusColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
  let detectionLatency = '38 ms';
  let peakKw = 14.2;

  if (anomalyType === 'tamper') {
    statusText = 'CRITICAL // METER TAMPERING SPIKE DETECTED';
    statusColor = 'text-red-400 bg-red-500/10 border-red-500/30';
    detectionLatency = '42 ms';
    peakKw = 28.5;
  } else if (anomalyType === 'dip') {
    statusText = 'WARNING // MAINS VOLTAGE DIP (-18.4V)';
    statusColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
    detectionLatency = '45 ms';
  } else if (anomalyType === 'phase') {
    statusText = 'WARNING // 3-PHASE UNBALANCE DETECTED';
    statusColor = 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
    detectionLatency = '35 ms';
  }

  // Generate 24-hour load curve points
  const points: Array<[number, number]> = [];
  for (let h = 0; h < 24; h++) {
    const x = (h / 23) * 100;
    // Standard double-peak curve (morning 8am & evening 7pm)
    let load = 30 + Math.sin((h - 4) * 0.3) * 20 + (h >= 17 && h <= 21 ? 35 : 0);
    
    // Inject anomaly spike at active hour
    if (anomalyType === 'tamper' && h === hour) {
      load += 50;
    }
    if (anomalyType === 'dip' && h === hour) {
      load -= 25;
    }

    points.push([x, Math.max(10, Math.min(95, load))]);
  }

  const polylineStr = points.map(([x, y]) => `${x},${100 - y}`).join(' ');

  return (
    <div className="w-full bg-[#0B0B10] border border-white/15 rounded-2xl p-6 sm:p-8 relative text-left shadow-2xl overflow-hidden backdrop-blur-md">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
              IEEE PUBLICATION DEMO // SMART GRID &amp; IOT ANOMALY DETECTION
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white font-display">
            Smart Metering Real-Time Energy Load &amp; Anomaly Classifier
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLive(!isLive)}
            className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-mono font-bold border ${
              isLive ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-white/5 text-neutral-400'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{isLive ? '24H SIMULATING' : 'PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* Control Anomaly Injector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-white/[0.02] border border-white/10 rounded-xl p-5">
        <div>
          <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-2 font-bold">
            INJECT GRID ANOMALY SCENARIO:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'none', label: 'Normal Grid' },
              { id: 'tamper', label: 'Meter Tampering' },
              { id: 'dip', label: 'Voltage Dip' },
              { id: 'phase', label: 'Phase Imbalance' },
            ].map((a) => (
              <button
                key={a.id}
                onClick={() => setAnomalyType(a.id as any)}
                className={`px-3 py-2 text-xs font-mono font-semibold rounded-lg border transition-all text-left ${
                  anomalyType === a.id
                    ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-black/40 border-white/10 text-neutral-400 hover:border-white/20'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">
              24-HOUR TIMELINE SCRUBBER
            </label>
            <span className="text-xs font-mono font-bold text-[#D4AF37]">
              TIME: {hour.toString().padStart(2, '0')}:00 HRS
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="23"
            step="1"
            value={hour}
            onChange={(e) => setHour(Number(e.target.value))}
            className="w-full accent-[#D4AF37] bg-neutral-800 rounded-lg cursor-pointer h-2"
          />
          <div className="flex justify-between text-[9px] font-mono text-neutral-500 mt-1">
            <span>00:00 (Night)</span>
            <span>12:00 (Noon)</span>
            <span>23:00 (Late Peak)</span>
          </div>
        </div>
      </div>

      {/* SVG 24H Load Chart */}
      <div className="relative bg-black/80 border border-white/10 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-2 border-b border-white/10 pb-2">
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
            24-HOUR MICROGRID ENERGY DEMAND &amp; BATTERY STORAGE (kW)
          </span>
          <span className="text-[10px] font-mono text-emerald-400 font-bold">
            DETECTION ACCURACY: 99.4%
          </span>
        </div>

        <div className="h-44 w-full relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid lines */}
            {[25, 50, 75].map((y) => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.05)" strokeDasharray="2,2" />
            ))}

            {/* Polyline */}
            <polyline fill="none" stroke="#D4AF37" strokeWidth="1.5" points={polylineStr} />
          </svg>

          {/* Hour Indicator Marker */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#D4AF37] transition-all pointer-events-none"
            style={{ left: `${(hour / 23) * 100}%` }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] -translate-x-[4px] mt-2 shadow-[0_0_10px_#D4AF37]" />
          </div>
        </div>

        <div className="flex justify-between text-[9px] font-mono text-neutral-500 mt-2 border-t border-white/10 pt-1">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>23:00</span>
        </div>
      </div>

      {/* Telemetry Output Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-[9px] font-mono text-neutral-400 uppercase block mb-1">DETECTION LATENCY</span>
          <span className="text-sm font-mono font-bold text-emerald-400">{detectionLatency}</span>
        </div>
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-[9px] font-mono text-neutral-400 uppercase block mb-1">IEEE DOI CITATION</span>
          <span className="text-[10px] font-mono font-bold text-[#D4AF37]">10.1109/IDICAIHEI</span>
        </div>
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-[9px] font-mono text-neutral-400 uppercase block mb-1">LOAD DEMAND</span>
          <span className="text-sm font-mono font-bold text-white">{peakKw} kW</span>
        </div>
        <div className={`p-3.5 rounded-xl border ${statusColor}`}>
          <span className="text-[9px] font-mono font-bold block mb-1">CLASSIFIER STATUS</span>
          <span className="text-[10px] font-mono font-bold truncate block">{statusText}</span>
        </div>
      </div>

    </div>
  );
};

export default SmartGridSim;
