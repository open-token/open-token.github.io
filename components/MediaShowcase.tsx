'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiHeadphones, FiVideo } from 'react-icons/fi';

const mediaItems = [
  {
    title: 'OpenToken: AI Access for All',
    description: 'Watch our promotional video explaining how OpenToken democratizes AI access',
    type: 'video',
    icon: FiVideo,
    file: '/media/opentoken-promo.mp4',
    language: 'English',
    size: '30 MB',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Shared AI Credit Framework',
    description: 'Listen to a detailed explanation of how the OpenToken framework operates',
    type: 'audio',
    icon: FiHeadphones,
    file: '/media/opentoken-framework-en.m4a',
    language: 'English',
    size: '24 MB',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'OpenToken：AI算力公益池是乌托邦吗？',
    description: '听听关于OpenToken AI算力公益池的深入讨论',
    type: 'audio',
    icon: FiHeadphones,
    file: '/media/opentoken-utopia-zh.m4a',
    language: '中文',
    size: '30 MB',
    color: 'from-red-500 to-orange-500',
  },
];

export default function MediaShowcase() {
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
            Media & Resources
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Watch, listen, and learn about OpenToken&apos;s mission to democratize AI access
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
                    {item.type === 'video' ? (
                      <video
                        controls
                        className="w-full rounded-lg"
                        preload="metadata"
                      >
                        <source src={item.file} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <audio
                        controls
                        className="w-full"
                        preload="metadata"
                      >
                        <source src={item.file} type="audio/mp4" />
                        Your browser does not support the audio tag.
                      </audio>
                    )}
                  </div>

                  {/* Download Button */}
                  <a
                    href={item.file}
                    download
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 group-hover:shadow-lg"
                  >
                    <FiDownload className="text-xl" />
                    Download {item.type === 'video' ? 'Video' : 'Audio'}
                  </a>
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
              <strong className="text-gray-800 dark:text-gray-200">Need more information?</strong>
              <br />
              Visit our{' '}
              <a
                href="https://github.com/open-token"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
              >
                GitHub repository
              </a>
              {' '}for documentation, FAQs, and community discussions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
