'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaRocket, FaGithub } from 'react-icons/fa';
import ContactModalZh from './ContactModalZh';

export default function CallToActionZh() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'provider' | 'project'>('provider');

  const openModal = (type: 'provider' | 'project') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">参与其中</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">加入我们，为开源社区实现 AI 访问民主化</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="group">
            <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-200 dark:border-indigo-800">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHandshake className="text-4xl text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">面向 AI 提供商</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">与我们合作，支持开源社区，展示您对 AI 访问民主化的承诺。</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-700 dark:text-gray-300"><span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0"></span><span>提高在开源社区中的知名度</span></li>
                <li className="flex items-start text-gray-700 dark:text-gray-300"><span className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span>支持突破性的 AI 研究</span></li>
                <li className="flex items-start text-gray-700 dark:text-gray-300"><span className="w-2 h-2 rounded-full bg-pink-600 mt-2 mr-3 flex-shrink-0"></span><span>加入行业领导者联盟</span></li>
              </ul>
              <button 
                onClick={() => openModal('provider')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                <FaHandshake className="text-xl" />
                成为提供商
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="group">
            <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-800">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="text-4xl text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">面向项目</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">申请算力额度，为您的开源 AI 项目、研究或倡议提供动力。</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-700 dark:text-gray-300"><span className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span>符合条件的项目免费获得 AI 算力</span></li>
                <li className="flex items-start text-gray-700 dark:text-gray-300"><span className="w-2 h-2 rounded-full bg-pink-600 mt-2 mr-3 flex-shrink-0"></span><span>访问多个 AI 提供商</span></li>
                <li className="flex items-start text-gray-700 dark:text-gray-300"><span className="w-2 h-2 rounded-full bg-red-600 mt-2 mr-3 flex-shrink-0"></span><span>简单的申请流程</span></li>
              </ul>
              <button 
                onClick={() => openModal('project')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                <FaRocket className="text-xl" />
                申请算力额度
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="text-center mt-16">
          <a href="https://github.com/open-token" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 text-lg">
            <FaGithub className="text-3xl" />
            <span className="font-semibold">在 GitHub 上查看</span>
          </a>
        </motion.div>
      </div>
      
      <ContactModalZh 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </section>
  );
}
