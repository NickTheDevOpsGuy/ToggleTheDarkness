import { useMemo } from 'react';

// Tiny WebAudio beeps (no audio files required)
export function useBeep() {
  const ctx = useMemo(() => {
    const AC =
      (window as any).AudioContext || (window as any).webkitAudioContext;
    return new AC();
  }, []);

  const playTone = (freq: number, ms: number, gain = 0.04) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    g.gain.value = gain;
    osc.connect(g).connect(ctx.destination);
    const now = ctx.currentTime;
    osc.start(now);
    osc.stop(now + ms / 1000);
  };

  const clickBeep = () => playTone(520, 70, 0.05);
  const winFanfare = () => {
    playTone(784, 120, 0.05);
    setTimeout(() => playTone(1046, 120, 0.05), 110);
    setTimeout(() => playTone(1318, 180, 0.05), 220);
  };

  return { clickBeep, winFanfare };
}
