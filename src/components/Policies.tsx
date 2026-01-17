'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Particles from './Particles';

const policies = [
  {
    id: 1,
    title: "From Your Clothes to Someone's Hope",
    titleTh: "เสื้อจากตู้เรา สู่เขาคนถัดไป",
    emoji: "🧺👚",
    color: "from-pink-400 to-rose-400",
    description: `เราจะมีการประชาสัมพันธ์ก่อนปิดภาคเรียนทุกภาคเรียนประมาณ 2 สัปดาห์ก่อนปิดเทอม โดยจะมีการเปิดรับช่วงเวลา 07:00-07:45 น. และช่วงเย็น 15:10-16:30 น. โดยเสื้อผ้าที่มาบริจาคต้องอยู่ในสภาพที่ดี สามารถนำไปใช้ต่อได้ คนที่รับบริจาคจะต้องกรอกแบบฟอร์มการรับบริจาค หากมีความต้องการหลายคนจะพิจารณาข้อมูลจากการเยี่ยมบ้าน`,
    status: "✅",
  },
  {
    id: 2,
    title: "รุ่นพี่เริ่ม รุ่นเราสานต่อ",
    titleTh: "",
    emoji: "✊️🗯",
    color: "from-blue-400 to-cyan-400",
    description: `เราจะสานต่อกิจกรรมที่รุ่นพี่เคยทำ เช่น ทีเคมิวสิค ทีเคฟุตซอล ทีเคอาร์ตแกลเลอรี โดยจะพัฒนาจากการทำงานที่ดีอยู่แล้วให้ดียิ่งขึ้นผ่านการนำบทเรียนของรุ่นพี่มาปรับปรุงและปรับใช้ ⚽️🏸🎸`,
    status: "",
  },
  {
    id: 3,
    title: "Beauty Beyond Gender",
    titleTh: "สดใสตามเจน",
    emoji: "💅✨",
    color: "from-purple-400 to-pink-400",
    description: `เราจะจัดกิจกรรมเวิร์คช็อปที่ให้ความรู้เกี่ยวกับทักษะการแต่งหน้าที่เหมาะสมกับนักเรียน ทั้งนักเรียนหญิงและนักเรียนชาย เราจะทำการเชิญวิทยากรที่เป็นบิวตี้บล็อกเกอร์มาบรรยายให้ความรู้ผ่านการสาธิตและให้ลองทำจริง โดยร่วมกับการจัดกิจกรรมที่สภานักเรียนมีส่วนช่วยในการทำกิจกรรม เช่น การเล่นเกม personal color`,
    status: "",
  },
];

export default function Policies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-pastel-purple/20 to-transparent">
      {/* Background particles */}
      <Particles count={30} colors={['#dda0dd', '#ffc0cb', '#ffd700', '#87ceeb']} className="opacity-40" />

      <div className="max-w-5xl mx-auto relative">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block relative">
            {/* Clipboard style header */}
            <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-8 py-6 rounded-2xl shadow-lg relative">
              {/* Clip at top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-lg">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-3 bg-gray-700 rounded" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold pt-2">
                นโยบายของเรา
              </h2>
              <p className="text-lg mt-1 opacity-90">3 นโยบายเด่นของเรา!</p>
            </div>
          </div>
        </motion.div>

        {/* Policies cards */}
        <div className="space-y-8">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.id}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Policy card */}
              <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ${index % 2 === 0 ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]'}`}>
                {/* Header strip */}
                <div className={`bg-gradient-to-r ${policy.color} p-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{policy.emoji}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {policy.title} {policy.status}
                      </h3>
                      {policy.titleTh && (
                        <p className="text-white/80 text-sm">({policy.titleTh})</p>
                      )}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white/30">
                    {policy.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {policy.description}
                  </p>
                </div>

                {/* Decorative tape */}
                <div className="tape absolute -top-1 left-8 rotate-[-5deg]" />
                <div className="tape absolute -top-1 right-8 rotate-[5deg]" />
              </div>

              {/* Decorative pin */}
              {index === 0 && (
                <div className="absolute -top-3 -right-3 text-3xl">📌</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xl text-gray-600 font-medium">
            ยังมีเซอร์ไพรส์ที่รอให้ทุกคนในทีเคคันพบอยู่! ถ้าอยากรู้ละก็... เข้าคูหา กาเบอร์ 1!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
