'use client';

import { motion } from 'framer-motion';

export default function ImpactZh() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">我们的愿景</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">构建一个 AI 访问公平、创新人人可及的未来</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '0+', label: '目标 AI 提供商' },
            { value: '0B+', label: '愿景：启用的 Token' },
            { value: '0+', label: '目标：支持的项目' },
            { value: '$0M+', label: '潜在成本节约' },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-lg font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">由中立联盟治理</h3>
            <p className="text-white/90 text-lg">OpenToken 通过透明的治理模式运作，涉及国际组织、全球合作伙伴和社区代表，以确保公平分配和监督。</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
