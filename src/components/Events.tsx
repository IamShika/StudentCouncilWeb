'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const events = [
  {
    title: "กิจกรรมรับน้อง",
    date: "มิถุนายน 2567",
    description: "ต้อนรับน้องใหม่เข้าสู่รั้ว TK",
    emoji: "🎉",
    color: "bg-accent-pink",
  },
  {
    title: "กีฬาสี",
    date: "สิงหาคม 2567",
    description: "การแข่งขันกีฬาภายใน",
    emoji: "🏆",
    color: "bg-accent-blue",
  },
  {
    title: "งานเปิดบ้าน TK",
    date: "พฤศจิกายน 2567",
    description: "Open House เปิดบ้านต้อนรับ",
    emoji: "🏫",
    color: "bg-accent-purple",
  },
  {
    title: "งานปีใหม่",
    date: "ธันวาคม 2567",
    description: "เฉลิมฉลองปีใหม่ร่วมกัน",
    emoji: "🎄",
    color: "bg-accent-green",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-pastel-blue/20 to-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Section title - Clapperboard style */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block relative">
            {/* Clapperboard top */}
            <div className="bg-gray-900 text-white px-6 py-2 rounded-t-lg relative">
              <div className="absolute inset-0 flex">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-white"
                    style={{
                      clipPath: i % 2 === 0
                        ? 'polygon(0 0, 100% 0, 80% 100%, 0 100%)'
                        : 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)'
                    }}
                  />
                ))}
              </div>
              <span className="relative z-10 font-marker text-sm">SCENE: Events</span>
            </div>
            {/* Clapperboard body */}
            <div className="bg-gray-800 text-white px-8 py-4 rounded-b-lg">
              <h2 className="text-3xl md:text-4xl font-marker">
                <span className="rainbow-text">กิจกรรม</span>
              </h2>
              <p className="font-handwritten text-lg text-gray-300">Activities & Events</p>
            </div>
          </div>
        </motion.div>

        {/* Events timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-pink via-accent-purple to-accent-blue rounded-full" />

          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-accent-pink flex items-center justify-center z-10 shadow-lg">
                <span className="text-sm">{event.emoji}</span>
              </div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="polaroid transform hover:scale-105 transition-transform duration-300" style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}>
                  {/* Tape */}
                  <div className="tape absolute -top-2 left-1/2 -translate-x-1/2" />

                  <div className={`${event.color} text-white p-4 rounded-lg mb-3`}>
                    <span className="text-3xl">{event.emoji}</span>
                  </div>

                  <h3 className="font-bold text-lg text-gray-800 mb-1">{event.title}</h3>
                  <p className="text-sm text-accent-pink font-handwritten">{event.date}</p>
                  <p className="text-gray-600 text-sm mt-2">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 text-4xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🎬
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="sticker bg-accent-yellow text-gray-800 font-marker">
            Coming Soon!
          </div>
        </motion.div>
      </div>
    </section>
  );
}
