'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HeartIcon, InstagramIcon, heartColors } from './Icons';
import Particles from './Particles';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background particles */}
      <Particles count={25} colors={['#ff69b4', '#ffc0cb', '#dda0dd', '#87ceeb']} className="opacity-40" />

      {/* Background pattern */}
      <div className="absolute inset-0 stars-bg opacity-50" />

      <div className="max-w-4xl mx-auto relative">
        {/* Contact card - notebook paper style */}
        <motion.div
          className="bg-white rounded-lg shadow-paper relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Notebook holes - hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 flex-col justify-around py-8 hidden md:flex">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-gray-200 border-2 border-gray-300" />
            ))}
          </div>

          {/* Red margin line - hidden on mobile */}
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-red-300 hidden md:block" />

          {/* Content */}
          <div className="px-6 py-12 md:pl-24 md:pr-8">
            {/* Lined paper effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #e5e5e5 28px)',
              }}
            />

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 relative"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="rainbow-text">ติดต่อเรา</span>
              <span className="text-2xl ml-2">📬</span>
            </motion.h2>

            <div className="space-y-6 relative">
              {/* Instagram - Main contact */}
              <motion.a
                href="https://www.instagram.com/because_we.are.tk_1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl text-white hover:scale-105 transition-transform shadow-lg max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                  <InstagramIcon color="#ffffff" size={32} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-lg md:text-xl">Instagram</p>
                  <p className="text-white/90 text-sm md:text-base truncate">@because_we.are.tk_1</p>
                </div>
              </motion.a>

              {/* Message */}
              <motion.p
                className="text-center text-gray-600 text-xl mt-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                "พวกเราพร้อมรับฟังทุกความคิดเห็นของทุกคน!"
              </motion.p>

              {/* Vote reminder */}
              <motion.div
                className="text-center mt-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 }}
              >
                <p className="text-2xl font-bold text-pink-500">
                  🗳️ เข้าคูหา กาเบอร์ 1!
                </p>
              </motion.div>
            </div>
          </div>

          {/* Decorative stickers */}
          <motion.div
            className="absolute top-4 right-4 text-4xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💌
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, type: "spring" }}
          >
            <span className="sticker bg-accent-pink text-white font-bold text-sm">
              DM us!
            </span>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="inline-block">
            <p className="font-bold text-2xl rainbow-text mb-2">
              Because We're TK
            </p>
            <p className="text-gray-500 text-sm">
              © 2567 เพราะเราคือ เพราะเราทำ เพราะเราเป็น บีคอสวีอาร์ทีเค!
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Made with ❤️ by Because We're TK #1
            </p>
          </div>

          {/* Decorative hearts using SVG */}
          <div className="flex justify-center gap-3 mt-4">
            {heartColors.map((color, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
              >
                <HeartIcon color={color} size={20} />
              </motion.div>
            ))}
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
