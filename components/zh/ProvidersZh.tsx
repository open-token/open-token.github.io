'use client';

import { motion } from 'framer-motion';
import { SiOpenai, SiGoogle } from 'react-icons/si';
import { FaBrain, FaRobot, FaMicrochip } from 'react-icons/fa';

const providers = [
  { name: 'OpenAI', icon: SiOpenai, description: 'GPT-4、GPT-3.5 和 DALL-E 模型', color: 'from-green-400 to-emerald-600' },
  { name: 'Anthropic', icon: FaBrain, description: 'Claude 3 系列模型', color: 'from-orange-400 to-red-600' },
  { name: 'Google', icon: SiGoogle, description: 'Gemini 和 PaLM 模型', color: 'from-blue-400 to-indigo-600' },
  { name: 'Mistral', icon: FaRobot, description: '开源语言模型', color: 'from-purple-400 to-pink-600' },
  { name: 'Together.ai', icon: FaMicrochip, description: '分布式 AI 基础设施', color: 'from-cyan-400 to-blue-600' },
  { name: 'Stability AI', icon: FaMicrochip, description: 'Stable Diffusion 和生成模型', color: 'from-pink-400 to-rose-600' },
  { name: 'Kimi', icon: FaBrain, description: '长上下文语言模型', color: 'from-teal-400 to-cyan-600' },
  { name: 'Zhipu', icon: FaRobot, description: 'GLM 系列模型', color: 'from-indigo-400 to-purple-600' },
  { name: 'Minimax', icon: FaMicrochip, description: '多模态 AI 模型', color: 'from-violet-400 to-fuchsia-600' },
];

export default function ProvidersZh() {
  return (
    <section id="providers" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">愿景贡献者</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">我们期待这些领先的 AI 提供商加入这一倡议，共同实现 AI 访问民主化</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <motion.div key={provider.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="relative group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${provider.color} flex items-center justify-center mb-4`}>
                  <provider.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{provider.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{provider.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
