'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Particles from './Particles';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center stars-bg">
      {/* Particles background - more on PC */}
      <Particles count={50} colors={['#ff69b4', '#ffc0cb', '#dda0dd', '#87ceeb', '#ffd700']} />

      {/* Logo/Icon */}
      <motion.div
        className="absolute top-6 left-6 md:top-10 md:left-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <Image
            src="/images/wearetkicon.jpg"
            alt="Because We Are TK"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* CD disc decoration - always visible on desktop */}
      <div
        className="absolute top-28 left-8 md:top-32 md:left-10 hidden md:block"
        style={{ zIndex: 50 }}
      >
        <motion.div
          className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full shadow-2xl relative border-4 border-white/50"
          style={{
            background: 'conic-gradient(from 0deg, #e879f9, #a78bfa, #60a5fa, #34d399, #fbbf24, #f87171, #e879f9)',
          }}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-pink-100 via-white to-purple-100" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white border-2 border-gray-400" />
        </motion.div>
      </div>

      {/* Vintage camera */}
      <div
        className="absolute top-16 right-8 md:right-16 lg:right-24 hidden md:block"
        style={{ zIndex: 50 }}
      >
        <motion.div
          className="w-24 h-20 md:w-28 md:h-24 lg:w-36 lg:h-28 bg-gradient-to-b from-pink-200 to-pink-300 rounded-xl p-3 shadow-2xl relative border-2 border-pink-100"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-pink-400 rounded-t-lg" />
          <div className="absolute -top-1 right-4 w-3 h-3 rounded-full bg-red-400 shadow" />
          <div className="w-full h-12 md:h-14 lg:h-16 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue-400 via-gray-600 to-gray-900 border-2 border-gray-400" />
          </div>
        </motion.div>
      </div>

      {/* Film strip decoration */}
      <div
        className="absolute top-44 md:top-48 right-4 md:right-8 lg:right-16 hidden md:block"
        style={{ zIndex: 50 }}
      >
        <motion.div
          className="w-16 h-48 md:w-20 md:h-56 lg:w-24 lg:h-64 rounded-lg shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="w-full h-full bg-gray-900 rounded-lg relative overflow-hidden">
            {/* Film frames */}
            <div className="absolute inset-x-3 inset-y-2 flex flex-col gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex-1 bg-gradient-to-br from-pink-200 to-purple-200 rounded-sm" />
              ))}
            </div>
            {/* Sprocket holes left */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-black flex flex-col justify-around py-2">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white mx-auto rounded-sm" />
              ))}
            </div>
            {/* Sprocket holes right */}
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-black flex flex-col justify-around py-2">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white mx-auto rounded-sm" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Polaroid on left */}
      <div
        className="absolute bottom-28 md:bottom-32 left-8 md:left-16 hidden md:block"
        style={{ zIndex: 50 }}
      >
        <motion.div
          className="bg-white p-2 shadow-2xl rounded"
          initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -8, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="w-20 h-24 md:w-24 md:h-28 bg-gradient-to-br from-pink-300 to-purple-300 rounded-sm" />
          <p className="text-center text-xs mt-2 font-handwritten text-gray-600">memories ♥</p>
        </motion.div>
      </div>

      {/* Cassette tape decoration */}
      <div
        className="absolute top-1/3 left-8 md:left-20 hidden lg:block"
        style={{ zIndex: 50 }}
      >
        <motion.div
          className="w-28 h-16 md:w-32 md:h-20 bg-gradient-to-b from-pink-400 to-pink-500 rounded-lg p-2 shadow-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="w-full h-full bg-pink-100 rounded flex items-center justify-center gap-2 md:gap-3">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-pink-400 bg-white" />
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-pink-400 bg-white" />
          </div>
        </motion.div>
      </div>

      {/* Sticker decorations for PC */}
      <div
        className="absolute top-1/4 right-1/4 hidden lg:block"
        style={{ zIndex: 50 }}
      >
        <motion.span
          className="sticker bg-pink-500 text-white text-lg font-bold shadow-xl inline-block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          LOVE!
        </motion.span>
      </div>

      <div
        className="absolute bottom-1/3 right-12 md:right-20 hidden lg:block"
        style={{ zIndex: 50 }}
      >
        <motion.span
          className="sticker bg-cyan-500 text-white text-lg font-bold shadow-xl inline-block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 12 }}
          transition={{ delay: 1.6, type: "spring" }}
        >
          #1
        </motion.span>
      </div>

      {/* Main title */}
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="rainbow-text font-marker">Because</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-700 mb-2">
            <span className="font-handwritten">we are</span>
          </h2>
          <h1 className="text-8xl md:text-[12rem] font-bold">
            <span className="rainbow-text font-marker">TK</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          เราทำได้ เพราะเราคือทีเค
        </motion.p>

        {/* Vote badge */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <span className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
            🗳️ เบอร์ 1
          </span>
        </motion.div>

        {/* OMG Sticker */}
        <motion.div
          className="absolute bottom-40 left-10 sticker bg-accent-yellow text-2xl font-marker hidden md:block"
          initial={{ opacity: 0, rotate: -20, scale: 0 }}
          animate={{ opacity: 1, rotate: -10, scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          OMG!
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
          </div>
          <p className="text-sm text-gray-500 mt-2 font-handwritten">scroll down</p>
        </motion.div>
      </div>

      {/* Heart decorations */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 text-2xl"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 1 + i * 0.1 }}
        >
          ♥
        </motion.div>
      ))}

      {/* Star decorations - fixed positions to avoid hydration issues */}
      {[15, 25, 40, 55, 70, 30, 45, 60].map((top, i) => (
        <motion.div
          key={i}
          className="absolute text-accent-pink text-xl"
          style={{
            top: `${top}%`,
            right: `${5 + i * 4}%`,
          }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.8, rotate: 360 }}
          transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
        >
          ★
        </motion.div>
      ))}
    </section>
  );
}
