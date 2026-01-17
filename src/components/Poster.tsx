'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Particles from './Particles';
import { getImagePath } from '@/lib/utils';

export default function Poster() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background particles */}
      <Particles count={35} colors={['#ff69b4', '#ffc0cb', '#dda0dd', '#87ceeb']} className="opacity-40" />

      <div className="max-w-5xl mx-auto px-4">
        {/* Section title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="rainbow-text">โปสเตอร์ของพวกเรา</span>
          </h2>
          <p className="text-gray-600 mt-2">Because We Are TK - เบอร์ 1</p>
        </motion.div>

        {/* Poster frame */}
        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          {/* Polaroid-style frame */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl relative">
            {/* Tape decorations */}
            <div className="absolute -top-3 left-8 w-16 h-6 bg-gradient-to-b from-yellow-100/90 to-yellow-200/70 rotate-[-8deg] shadow-sm z-10" />
            <div className="absolute -top-3 right-8 w-16 h-6 bg-gradient-to-b from-yellow-100/90 to-yellow-200/70 rotate-[8deg] shadow-sm z-10" />

            {/* Poster image - clickable link to Instagram */}
            <a
              href="https://www.instagram.com/p/DThAdSUCZ4X/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-[3/4] w-full bg-gray-100 rounded overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <Image
                src={getImagePath("/images/poster/posterwewaretk.png")}
                alt="Because We Are TK - Poster"
                fill
                className="object-contain"
                priority
              />
            </a>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="font-handwritten text-xl text-gray-700">
                "เราทำได้ เพราะเราคือทีเค"
              </p>
              <p className="text-sm text-pink-500 mt-1 font-medium">
                🗳️ กาเบอร์ 1
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-6 -right-6 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 15 } : {}}
            transition={{ delay: 0.8, type: "spring" }}
          >
            ⭐
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -left-4 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: -10 } : {}}
            transition={{ delay: 0.9, type: "spring" }}
          >
            💫
          </motion.div>
          <motion.div
            className="absolute top-1/2 -right-8 text-2xl hidden md:block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.6 } : {}}
            transition={{ delay: 1 }}
          >
            ♥
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
