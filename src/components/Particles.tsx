'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  type: 'circle' | 'star';
}

interface ParticlesProps {
  count?: number;
  colors?: string[];
  className?: string;
}

export default function Particles({
  count = 20,
  colors = ['#ff69b4', '#ffc0cb', '#dda0dd', '#87ceeb', '#ffd700'],
  className = ''
}: ParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  // Only generate particles on client side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      type: (Math.random() > 0.5 ? 'circle' : 'star') as 'circle' | 'star',
    }));
    setParticles(generated);
  }, [count, colors]);

  // Don't render anything on server
  if (!mounted) {
    return null;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6, 0],
            scale: [0.5, 1, 0.8, 1, 0.5],
            y: [0, -20, -10, -30, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {particle.type === 'circle' ? (
            <div
              className="rounded-full"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: particle.color,
              }}
            />
          ) : (
            <svg viewBox="0 0 24 24" fill={particle.color} className="w-full h-full">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
