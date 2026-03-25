'use client';

import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

export default function FooterZh() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">OpenToken</h3>
            <p className="text-gray-400 mb-4">通过领先提供商捐赠的算力额度，实现 AI 访问民主化。</p>
            <div className="flex gap-4">
              <a href="https://github.com/open-token" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300"><FaGithub className="text-2xl" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FaTwitter className="text-2xl" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FaLinkedin className="text-2xl" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#providers" className="text-gray-400 hover:text-white transition-colors duration-300">提供商</a></li>
              <li><a href="#use-cases" className="text-gray-400 hover:text-white transition-colors duration-300">使用场景</a></li>
              <li><a href="https://github.com/open-token" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">文档</a></li>
              <li><a href="https://github.com/open-token" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">申请算力额度</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">资源</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/open-token" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">GitHub 仓库</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">治理模型</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">社区指南</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">联系我们</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="mb-4">
            <p className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">代理开源基金会的倡议</p>
            <a href="https://aosf.ai" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 text-sm font-medium">了解更多关于 AOSF →</a>
          </div>
          <p className="text-gray-400 flex items-center justify-center gap-2">用 <FaHeart className="text-red-500" /> 为开源社区打造</p>
          <p className="text-gray-500 text-sm mt-2">© 2026 OpenToken. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}
