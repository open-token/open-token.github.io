'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

const stats: Stat[] = [
  { label: 'Target AI Providers', value: 10, suffix: '+' },
  { label: 'Vision: Tokens Enabled', value: 10, suffix: 'B+' },
  { label: 'Goal: Projects Supported', value: 1000, suffix: '+' },
  { label: 'Potential Cost Savings', value: 10, suffix: 'M+', prefix: '$' },
];

function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.floor(value * easeOutQuart));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

export default function Impact() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Vision
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Building a future where AI access is equitable and innovation is accessible to all
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <motion.div
                  className="text-5xl md:text-6xl font-bold text-white mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.prefix}
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </motion.div>
                <div className="text-white/80 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Governed by a Neutral Consortium
            </h3>
            <p className="text-white/90 text-lg">
              OpenToken operates through a transparent governance model involving international organizations, 
              global partners, and community representatives to ensure fair distribution and oversight.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
