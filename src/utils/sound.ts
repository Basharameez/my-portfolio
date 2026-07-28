let audioCtx: AudioContext | null = null;

const initAudio = () => {
  if (!audioCtx) {
    // Standard cross-browser AudioContext initialization
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  // Resume context if suspended (common browser security state)
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

export const playHoverSound = () => {
  try {
    initAudio();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Warm soft tactile pop profile
    osc.type = 'sine';
    const now = audioCtx.currentTime;
    
    // Fast frequency glide down
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.04);

    // Fade envelope
    gainNode.gain.setValueAtTime(0.012, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.start(now);
    osc.stop(now + 0.04);
  } catch {
    // Silence errors if audio initialization is blocked by browser policies
  }
};

export const playClickSound = () => {
  try {
    initAudio();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Fast mechanical tick transient profile
    osc.type = 'triangle';
    const now = audioCtx.currentTime;

    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.02);

    gainNode.gain.setValueAtTime(0.025, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

    osc.start(now);
    osc.stop(now + 0.02);
  } catch {
    // Silence errors
  }
};
