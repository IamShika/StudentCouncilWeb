'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { teamMembers } from '@/data/members';
import Image from 'next/image';
import Particles from './Particles';

// Random decorations for each member
const decorations = [
  { emoji: '⭐', position: 'top-4 right-8', size: 'text-4xl', rotate: 12 },
  { emoji: '✨', position: 'bottom-8 left-12', size: 'text-3xl', rotate: -8 },
  { emoji: '💫', position: 'top-12 left-4', size: 'text-2xl', rotate: 15 },
  { emoji: '🌟', position: 'bottom-4 right-16', size: 'text-3xl', rotate: -12 },
  { emoji: '♥', position: 'top-8 right-24', size: 'text-2xl', rotate: 20 },
];

const stickers = [
  { text: 'LOVE', color: 'bg-pink-400', position: 'top-6 right-4' },
  { text: 'TK', color: 'bg-purple-400', position: 'bottom-8 left-8' },
  { text: '#1', color: 'bg-amber-400', position: 'top-4 left-16' },
  { text: 'YAY!', color: 'bg-cyan-400', position: 'bottom-6 right-12' },
];

const particleColors = [
  ['#ff69b4', '#ffc0cb', '#ff1493', '#ffb6c1'],
  ['#9370db', '#dda0dd', '#ba55d3', '#ee82ee'],
  ['#87ceeb', '#add8e6', '#00bfff', '#b0e0e6'],
  ['#ffd700', '#ffb347', '#ffa500', '#ff6347'],
];

function MemberSection({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  // Pick decorations based on index
  const deco1 = decorations[index % decorations.length];
  const deco2 = decorations[(index + 2) % decorations.length];
  const sticker = stickers[index % stickers.length];
  const pColors = particleColors[index % particleColors.length];

  return (
    <motion.div
      ref={ref}
      className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Background image on the OPPOSITE side of the card, with fade */}
      {member.background && (
        <div className={`absolute top-0 bottom-0 w-1/2 lg:w-2/5 overflow-hidden ${isEven ? 'right-0' : 'left-0'}`}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={isInView ? { opacity: 0.5, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              maskImage: isEven
                ? 'linear-gradient(to left, black 20%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                : 'linear-gradient(to right, black 20%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: isEven
                ? 'linear-gradient(to left, black 20%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                : 'linear-gradient(to right, black 20%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            }}
          >
            <Image
              src={member.background}
              alt=""
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      )}

      {/* Particles filling empty space - more on PC */}
      <Particles count={40} colors={pColors} />

      {/* Content container */}
      <div className={`relative z-10 w-full flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 py-16 px-4 max-w-6xl mx-auto`}>

        {/* Floating decorations */}
        <motion.div
          className={`absolute ${deco1.position} ${deco1.size} opacity-40 pointer-events-none`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.4, scale: 1, rotate: deco1.rotate } : {}}
          transition={{ delay: 0.8, type: "spring" }}
        >
          {deco1.emoji}
        </motion.div>

        <motion.div
          className={`absolute ${deco2.position} ${deco2.size} opacity-30 pointer-events-none`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.3, scale: 1, rotate: deco2.rotate } : {}}
          transition={{ delay: 1, type: "spring" }}
        >
          {deco2.emoji}
        </motion.div>

        {/* Sticker decoration */}
        <motion.div
          className={`absolute ${sticker.position} ${sticker.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-12 opacity-70 pointer-events-none hidden md:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
          transition={{ delay: 1.1, type: "spring" }}
        >
          {sticker.text}
        </motion.div>

        {/* Photo Card - Polaroid style */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, rotate: isEven ? -5 : 5, scale: 0.9 }}
          animate={isInView ? { opacity: 1, rotate: isEven ? -2 : 2, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Pink camera frame */}
          <div className="bg-gradient-to-br from-pink-200 to-pink-300 p-4 rounded-2xl shadow-polaroid relative">
            {/* Decorative camera elements */}
            <div className="absolute -top-3 left-4 w-8 h-5 bg-pink-400 rounded-t-lg" />
            <div className="absolute -top-2 right-8 w-4 h-4 rounded-full bg-gradient-to-br from-pink-300 to-pink-500" />

            {/* Photo frame */}
            <div className="bg-white p-3 rounded-lg shadow-inner">
              <div className="relative w-48 h-64 md:w-56 md:h-72 bg-gray-100 rounded overflow-hidden">
                {member.portrait ? (
                  <Image
                    src={member.portrait}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100">
                    <span className="text-6xl">👤</span>
                  </div>
                )}
              </div>
            </div>

            {/* Info card below photo */}
            <div className="mt-3 bg-white/90 p-3 rounded-lg text-center">
              <p className="text-xs text-pink-500 font-semibold mb-1">{member.role}</p>
              <p className="font-bold text-gray-800 text-sm">
                {member.prefix}{member.name}
              </p>
              {member.class && (
                <p className="text-xs text-gray-500">{member.class}</p>
              )}
              <p className="mt-2 text-pink-600 font-semibold">
                {member.nickname} <span className="text-gray-400 font-normal">({member.nicknameEn})</span>
              </p>
            </div>

            {/* Decorative hearts */}
            <div className="absolute -top-2 -right-2 text-pink-400 text-lg">♥</div>
            <div className="absolute -bottom-2 -left-2 text-pink-300 text-sm">♥</div>
          </div>

          {/* Crown for president */}
          {member.role === "ประธาน" && (
            <motion.span
              className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👑
            </motion.span>
          )}
        </motion.div>

        {/* Description and Quote */}
        <motion.div
          className={`flex-1 max-w-xl ${isEven ? 'lg:text-left' : 'lg:text-right'} text-center`}
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            {member.nickname} <span className="text-2xl md:text-3xl text-gray-400">({member.nicknameEn})</span>
          </h3>

          <p className="text-lg text-pink-500 font-medium mb-2">
            ตำแหน่ง : {member.role}
          </p>

          {member.instagram && (
            <a
              href={`https://instagram.com/${member.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors mb-6"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-handwritten text-lg">@{member.instagram}</span>
            </a>
          )}

          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {member.description}
          </p>

          <div className={`${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
            <p className="text-2xl md:text-3xl font-handwritten text-gray-700 italic">
              &ldquo;{member.quote}&rdquo;
            </p>
            <p className="text-right text-gray-500 mt-2">
              - {member.nicknameEn}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider line */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
    </motion.div>
  );
}

export default function Team() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Global particles in background */}
      <Particles count={30} colors={['#ffc0cb', '#dda0dd', '#87ceeb']} className="opacity-40" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white py-4 px-8 rounded-2xl shadow-lg relative">
            {/* Binder clip */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-gray-500 to-gray-700 rounded-t-lg shadow-md">
              <div className="absolute -bottom-3 -left-2 w-4 h-6 border-2 border-gray-600 rounded-b-lg border-t-0" />
              <div className="absolute -bottom-3 -right-2 w-4 h-6 border-2 border-gray-600 rounded-b-lg border-t-0" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold pt-2">
              ทีมงานสภานักเรียน
            </h2>
            <p className="text-lg mt-1 opacity-90">Because We Are TK</p>
          </div>
        </motion.div>

        {/* Team members */}
        <div>
          {teamMembers.map((member, index) => (
            <MemberSection key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
