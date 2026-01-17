'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Particles from './Particles';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background particles */}
      <Particles count={30} colors={['#ffc0cb', '#dda0dd', '#87ceeb', '#ffd700']} className="opacity-40" />

      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-32 h-32 bg-pastel-pink rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pastel-blue rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Torn paper note style */}
        <motion.div
          className="torn-paper relative bg-white/90 rounded-lg shadow-paper"
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: -1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Binder clip */}
          <div className="binder-clip" />

          {/* Tape decorations */}
          <div className="tape -top-2 -left-4 rotate-[-15deg]" />
          <div className="tape -top-2 -right-4 rotate-[15deg]" />

          <div className="pt-8 pb-6 px-8">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="rainbow-text">เกี่ยวกับพวกเรา</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p className="font-bold text-3xl text-center text-pink-500">
                "เราเป็นใคร?"
              </p>

              <p className="text-center leading-relaxed">
                พวกเราพร้อมที่จะเป็นตัวแทนของนักเรียนทุกคน
                <br />
                ในการสร้างสรรค์กิจกรรมและพัฒนาโรงเรียนของเราให้ดียิ่งขึ้น
                <br />
                <br /><b>
                เพราะเราคือ เพราะเราทำ เพราะเราเป็น บีคอสวีอาร์ทีเค!</b>
              </p>
            </motion.div>

            {/* Vote call to action */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, type: "spring" }}
            >
              <div className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                <p className="text-2xl md:text-3xl font-bold">
                  🗳️ เข้าคูหา กาเบอร์ 1!
                </p>
              </div>
            </motion.div>

            {/* Decorative stickers */}
            <motion.div
              className="flex justify-center gap-4 mt-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              <span className="sticker bg-accent-pink text-white">Leadership</span>
              <span className="sticker bg-accent-blue text-white">Love & Unity</span>
              <span className="sticker bg-accent-yellow text-gray-800">Creativity</span>
              <span className="sticker bg-accent-green text-white">Confidence</span>
              <span className="sticker bg-accent-pink text-white">Fun!</span>
            </motion.div>
          </div>

          {/* Hand-drawn underline decoration */}
          <svg className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-4" viewBox="0 0 200 20">
            <path
              d="M 10 10 Q 50 5, 100 10 T 190 10"
              stroke="#ff6b9d"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Number 1 decoration */}
        <motion.div
          className="absolute -bottom-5 -right-5 text-6xl font-bold text-pink-400"
          initial={{ opacity: 0, rotate: 30 }}
          animate={isInView ? { opacity: 0.8, rotate: 15 } : {}}
          transition={{ delay: 1, type: "spring" }}
        >
          #1
        </motion.div>

        {/* Floating decorations */}
        <motion.div
          className="absolute -bottom-10 -left-10 text-6xl"
          initial={{ opacity: 0, rotate: -30 }}
          animate={isInView ? { opacity: 1, rotate: -15 } : {}}
          transition={{ delay: 0.9, type: "spring" }}
        >
          📌
        </motion.div>

        <motion.div
          className="absolute -top-5 -left-5 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, type: "spring" }}
        >
          ✨
        </motion.div>
      </div>
    </section>
  );
}
