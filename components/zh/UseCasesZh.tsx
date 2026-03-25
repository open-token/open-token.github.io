'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiShield, FiDatabase, FiAward, FiCode, FiTrendingUp } from 'react-icons/fi';

const useCases = [
  { title: '开源研究', description: '支持学术实验室和开源基金会的突破性 AI 研究，无需预算限制。', icon: FiTarget, items: ['训练新模型', '微调实验', '学术出版'], color: 'from-blue-500 to-cyan-500' },
  { title: 'AI 安全与标准', description: '支持关键的 AI 安全、伦理和标准开发工作，构建负责任的 AI 未来。', icon: FiShield, items: ['安全基准测试', '伦理研究', '政策制定'], color: 'from-green-500 to-emerald-500' },
  { title: '数据集创建', description: '构建高质量数据集和基准，推动整个 AI 生态系统发展。', icon: FiDatabase, items: ['数据标注', '基准创建', '质量验证'], color: 'from-purple-500 to-pink-500' },
  { title: '黑客松与活动', description: '为 Google Summer of Code 等公益倡议提供免费 AI 访问。', icon: FiAward, items: ['GSoC 项目', 'AI 黑客松', '教育项目'], color: 'from-orange-500 to-red-500' },
  { title: '工具开发', description: '创建基本的开发者工具和库，让每个人都能更容易地使用 AI。', icon: FiCode, items: ['SDK 开发', '测试框架', 'DevOps 工具'], color: 'from-indigo-500 to-purple-500' },
  { title: '模型基准测试', description: '全面评估和比较 AI 模型，为社区提供指导。', icon: FiTrendingUp, items: ['性能测试', '成本分析', '质量指标'], color: 'from-teal-500 to-blue-500' },
];

export default function UseCasesZh() {
  return (
    <section id="use-cases" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">使用场景</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">从研究到生产，OpenToken 为整个 AI 生态系统的创新提供动力</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div key={useCase.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="group">
              <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.items.map(item => (
                    <div key={item} className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2"></span>
                      {item}
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
