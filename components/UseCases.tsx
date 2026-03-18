'use client';

import { motion } from 'framer-motion';
import { FaFlask, FaShieldAlt, FaDatabase, FaTrophy, FaCode, FaChartLine } from 'react-icons/fa';

const useCases = [
  {
    title: 'Open-Source Research',
    description: 'Support groundbreaking AI research in academic labs and open-source foundations without budget constraints.',
    icon: FaFlask,
    color: 'from-blue-500 to-cyan-500',
    examples: ['Training new models', 'Fine-tuning experiments', 'Academic publications'],
  },
  {
    title: 'AI Safety & Standards',
    description: 'Enable critical work on AI safety, ethics, and standards development for a responsible AI future.',
    icon: FaShieldAlt,
    color: 'from-green-500 to-emerald-500',
    examples: ['Safety benchmarking', 'Ethics research', 'Policy development'],
  },
  {
    title: 'Dataset Creation',
    description: 'Build high-quality datasets and benchmarks that advance the entire AI ecosystem.',
    icon: FaDatabase,
    color: 'from-purple-500 to-pink-500',
    examples: ['Data annotation', 'Benchmark creation', 'Quality validation'],
  },
  {
    title: 'Hackathons & Events',
    description: 'Power public good initiatives like Google Summer of Code with free AI access for participants.',
    icon: FaTrophy,
    color: 'from-orange-500 to-red-500',
    examples: ['GSoC projects', 'AI hackathons', 'Educational programs'],
  },
  {
    title: 'Tooling Development',
    description: 'Create essential developer tools and libraries that make AI more accessible to everyone.',
    icon: FaCode,
    color: 'from-indigo-500 to-purple-500',
    examples: ['SDK development', 'Testing frameworks', 'DevOps tools'],
  },
  {
    title: 'Model Benchmarking',
    description: 'Comprehensive evaluation and comparison of AI models to guide the community.',
    icon: FaChartLine,
    color: 'from-teal-500 to-blue-500',
    examples: ['Performance testing', 'Cost analysis', 'Quality metrics'],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Use Cases
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From research to production, OpenToken powers innovation across the AI ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="text-3xl text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  {useCase.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {useCase.description}
                </p>

                <div className="space-y-2">
                  {useCase.examples.map((example) => (
                    <div
                      key={example}
                      className="flex items-center text-sm text-gray-500 dark:text-gray-500"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
