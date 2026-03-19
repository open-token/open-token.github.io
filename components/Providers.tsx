'use client';

import { motion } from 'framer-motion';
import { SiOpenai, SiGoogle } from 'react-icons/si';
import { FaBrain, FaRobot, FaMicrochip } from 'react-icons/fa';

const providers = [
  {
    name: 'OpenAI',
    icon: SiOpenai,
    description: 'GPT-4, GPT-3.5, and DALL-E models',
    color: 'from-green-400 to-emerald-600',
  },
  {
    name: 'Anthropic',
    icon: FaBrain,
    description: 'Claude 3 family of models',
    color: 'from-orange-400 to-red-600',
  },
  {
    name: 'Google',
    icon: SiGoogle,
    description: 'Gemini and PaLM models',
    color: 'from-blue-400 to-indigo-600',
  },
  {
    name: 'Mistral',
    icon: FaRobot,
    description: 'Open-source language models',
    color: 'from-purple-400 to-pink-600',
  },
  {
    name: 'Together.ai',
    icon: FaMicrochip,
    description: 'Distributed AI infrastructure',
    color: 'from-cyan-400 to-blue-600',
  },
  {
    name: 'Stability AI',
    icon: FaMicrochip,
    description: 'Stable Diffusion and generative models',
    color: 'from-pink-400 to-rose-600',
  },
  {
    name: 'Kimi',
    icon: FaBrain,
    description: 'Long-context language models',
    color: 'from-teal-400 to-cyan-600',
  },
  {
    name: 'Zhipu',
    icon: FaRobot,
    description: 'GLM series models',
    color: 'from-indigo-400 to-purple-600',
  },
  {
    name: 'Minimax',
    icon: FaMicrochip,
    description: 'Multimodal AI models',
    color: 'from-violet-400 to-fuchsia-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Providers() {
  return (
    <section id="providers" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Envisioned Contributors
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leading AI providers we envision joining this initiative to democratize AI access
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {providers.map((provider) => (
            <motion.div
              key={provider.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${provider.color} flex items-center justify-center mb-4`}>
                  <provider.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                  {provider.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {provider.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
