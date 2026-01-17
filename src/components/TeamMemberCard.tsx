'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TeamMember } from '@/data/members';
import { getImagePath } from '@/lib/utils';

interface Props {
  member: TeamMember;
  index: number;
}

const rotations = [-3, 2, -2, 3, -1, 2, -3, 1, -2, 3, -1];
const tapePositions = ['left', 'right', 'center', 'left', 'right'] as const;

export default function TeamMemberCard({ member, index }: Props) {
  const rotation = rotations[index % rotations.length];
  const tapePos = tapePositions[index % tapePositions.length];

  return (
    <motion.div
      className="relative hover-float"
      initial={{ opacity: 0, scale: 0.8, rotate: rotation * 2 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.2 }
      }}
    >
      {/* Camera frame style card */}
      <div className="camera-frame bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-xl shadow-polaroid relative">
        {/* Camera lens decoration */}
        <div className="camera-lens -top-2 -right-2 w-6 h-6" />

        {/* Small lens */}
        <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-gradient-to-br from-pink-300 to-pink-500" />

        {/* Photo frame */}
        <div className="relative bg-white p-2 rounded-lg overflow-hidden">
          {/* Image container */}
          <div className="relative aspect-[3/4] bg-gray-100 rounded overflow-hidden">
            {member.portrait ? (
              <>
                {/* Background layer */}
                {member.background && (
                  <Image
                    src={getImagePath(member.background)}
                    alt=""
                    fill
                    className="object-cover opacity-30 blur-sm"
                  />
                )}
                {/* Portrait layer */}
                <Image
                  src={getImagePath(member.portrait)}
                  alt={member.name}
                  fill
                  className="object-cover relative z-10"
                />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pastel-pink to-pastel-blue">
                <span className="text-6xl">👤</span>
              </div>
            )}
          </div>

          {/* Tape decoration */}
          <div
            className={`tape ${
              tapePos === 'left' ? '-top-1 left-2 rotate-[-10deg]' :
              tapePos === 'right' ? '-top-1 right-2 rotate-[10deg]' :
              '-top-1 left-1/2 -translate-x-1/2 rotate-[2deg]'
            }`}
          />
        </div>

        {/* Info section - torn paper style */}
        <div className="mt-3 bg-[#fffef5] p-3 rounded relative shadow-paper">
          {/* Mini binder clip */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-4 bg-gradient-to-b from-pink-400 to-pink-500 rounded-t" />

          <p className="text-xs text-accent-pink font-bold text-center mb-1">
            {member.role}
          </p>

          <p className="font-bold text-gray-800 text-center text-sm">
            {member.name}
          </p>

          {member.class && (
            <p className="text-xs text-gray-500 text-center">
              {member.class}
            </p>
          )}

          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="font-handwritten text-lg text-accent-purple">
              {member.nickname}
            </span>
            <span className="text-xs text-gray-400">
              ({member.nicknameEn})
            </span>
          </div>

          {/* Instagram handle if available */}
          {member.instagram && (
            <p className="text-xs text-center mt-1 font-handwritten text-gray-500">
              Ig: {member.instagram}
            </p>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      {index % 3 === 0 && (
        <span className="absolute -top-4 -right-4 text-2xl animate-pulse">✨</span>
      )}
      {index % 4 === 1 && (
        <span className="absolute -bottom-2 -left-2 text-xl">💖</span>
      )}
    </motion.div>
  );
}
