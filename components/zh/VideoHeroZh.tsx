'use client';

import { motion } from 'framer-motion';
import { FiArrowDown, FiPlay, FiVolume2 } from 'react-icons/fi';
import { useState, useRef } from 'react';

export default function VideoHeroZh() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-60"
          loop
          muted={isMuted}
          playsInline
          poster="/media/video-poster.jpg"
        >
          <source src="/media/opentoken-promo.mp4" type="video/mp4" />
          您的浏览器不支持视频标签。
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Video Controls */}
      <div className="absolute top-8 right-8 z-20 flex gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label={isPlaying ? '暂停视频' : '播放视频'}
        >
          {isPlaying ? (
            <div className="w-3 h-3 flex gap-1">
              <div className="w-1 h-3 bg-white rounded-sm" />
              <div className="w-1 h-3 bg-white rounded-sm" />
            </div>
          ) : (
            <FiPlay className="text-xl ml-0.5" />
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label={isMuted ? '取消静音' : '静音'}
        >
          {isMuted ? (
            <div className="relative">
              <FiVolume2 className="text-xl" />
              <div className="absolute inset-0 w-full h-0.5 bg-white rotate-45 top-1/2 -translate-y-1/2" />
            </div>
          ) : (
            <FiVolume2 className="text-xl" />
          )}
        </motion.button>
      </div>

      {/* Language Switcher */}
      <div className="absolute top-8 left-8 z-20">
        <a
          href="/"
          className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/30 transition-all duration-300"
        >
          English
        </a>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            OpenToken
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl font-semibold mb-4 text-white drop-shadow-lg"
          >
            人人可用的 AI 算力
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 drop-shadow-lg"
          >
            通过领先 AI 提供商捐赠的算力额度，赋能开源社区。构建一个创新无界的未来。
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 drop-shadow-lg"
          >
            <a
              href="https://aosf.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/50 hover:decoration-indigo-300 transition-colors duration-300"
            >
              代理开源基金会
            </a>
            {' '}的倡议
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#media"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
            >
              观看与聆听
            </a>
            <a
              href="#providers"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              探索提供商
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown className="text-4xl text-white drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
}
