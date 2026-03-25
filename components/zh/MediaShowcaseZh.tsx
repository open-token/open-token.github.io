'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiHeadphones, FiVideo, FiShare2, FiMail, FiTwitter, FiLinkedin, FiCopy } from 'react-icons/fi';
import { useState } from 'react';

const mediaItems = [
  {
    title: 'OpenToken: AI Access for All',
    description: '观看我们的宣传视频，了解 OpenToken 如何实现 AI 访问民主化',
    type: '视频',
    icon: FiVideo,
    file: '/media/opentoken-promo.mp4',
    language: '英文',
    size: '30 MB',
    color: 'from-blue-500 to-cyan-500',
    downloadLabel: '视频',
  },
  {
    title: 'Shared AI Credit Framework',
    description: '聆听关于 OpenToken 框架如何运作的详细解释',
    type: '音频',
    icon: FiHeadphones,
    file: '/media/opentoken-framework-en.m4a',
    language: '英文',
    size: '24 MB',
    color: 'from-purple-500 to-pink-500',
    downloadLabel: '音频',
  },
  {
    title: 'OpenToken：AI算力公益池是乌托邦吗？',
    description: '听听关于OpenToken AI算力公益池的深入讨论',
    type: '音频',
    icon: FiHeadphones,
    file: '/media/opentoken-utopia-zh.m4a',
    language: '中文',
    size: '30 MB',
    color: 'from-red-500 to-orange-500',
    downloadLabel: '音频',
  },
];

export default function MediaShowcaseZh() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyLink = (file: string, index: number) => {
    const fullUrl = `https://open-token.org${file}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleShare = (platform: string, file: string, title: string) => {
    const fullUrl = `https://open-token.org${file}`;
    const encodedUrl = encodeURIComponent(fullUrl);
    const encodedTitle = encodeURIComponent(title);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'email':
        shareUrl = `mailto:?subject=${encodedTitle}&body=查看来自 OpenToken 的资源: ${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="media" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            媒体与资源
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            观看、聆听和了解 OpenToken 实现 AI 访问民主化的使命
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${item.color}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <item.icon className="text-2xl text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">
                            {item.type}
                          </span>
                          <div className="text-sm text-white/90 flex items-center gap-2">
                            <span>{item.language}</span>
                            <span>•</span>
                            <span>{item.size}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {item.description}
                  </p>

                  {/* Media Player */}
                  <div className="mb-6 bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                    {item.type === '视频' ? (
                      <video
                        controls
                        className="w-full rounded-lg"
                        preload="metadata"
                      >
                        <source src={item.file} type="video/mp4" />
                        您的浏览器不支持视频标签。
                      </video>
                    ) : (
                      <audio
                        controls
                        className="w-full"
                        preload="metadata"
                      >
                        <source src={item.file} type="audio/mp4" />
                        您的浏览器不支持音频标签。
                      </audio>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {/* Download Button */}
                    <a
                      href={item.file}
                      download
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 group-hover:shadow-lg"
                    >
                      <FiDownload className="text-xl" />
                      下载{item.downloadLabel}
                    </a>

                    {/* Share Buttons */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mr-2">
                        <FiShare2 className="text-base" />
                        <span className="hidden sm:inline">分享：</span>
                      </div>
                      
                      {/* Copy Link */}
                      <button
                        onClick={() => handleCopyLink(item.file, index)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
                        title="复制链接"
                      >
                        <FiCopy className="text-base" />
                        <span className="text-sm">
                          {copiedIndex === index ? '已复制！' : '复制'}
                        </span>
                      </button>

                      {/* Email */}
                      <button
                        onClick={() => handleShare('email', item.file, item.title)}
                        className="flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
                        title="通过邮件分享"
                      >
                        <FiMail className="text-lg" />
                      </button>

                      {/* Twitter */}
                      <button
                        onClick={() => handleShare('twitter', item.file, item.title)}
                        className="flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
                        title="在推特上分享"
                      >
                        <FiTwitter className="text-lg" />
                      </button>

                      {/* LinkedIn */}
                      <button
                        onClick={() => handleShare('linkedin', item.file, item.title)}
                        className="flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
                        title="在领英上分享"
                      >
                        <FiLinkedin className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl px-8 py-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-gray-800 dark:text-gray-200">需要更多信息？</strong>
              <br />
              访问我们的{' '}
              <a
                href="https://github.com/open-token"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
              >
                GitHub 仓库
              </a>
              {' '}获取文档、常见问题和社区讨论。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
