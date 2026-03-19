'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaRocket, FaHandshake } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Get Involved
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join us in democratizing AI access for the open-source community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Providers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-200 dark:border-indigo-800">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHandshake className="text-4xl text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                For AI Providers
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                Partner with us to support the open-source community and showcase your commitment to democratizing AI access.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0" />
                  <span>Increase visibility in the open-source community</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0" />
                  <span>Support groundbreaking AI research</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-pink-600 mt-2 mr-3 flex-shrink-0" />
                  <span>Join a consortium of industry leaders</span>
                </li>
              </ul>

              <motion.a
                href="mailto:contact@open-token.org?subject=Interest%20in%20Becoming%20an%20OpenToken%20Provider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                <FaHandshake className="text-xl" />
                Become a Provider
              </motion.a>
            </div>
          </motion.div>

          {/* For Recipients */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-800">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="text-4xl text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                For Projects
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                Apply for compute credits to power your open-source AI project, research, or initiative.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0" />
                  <span>Free AI compute for qualifying projects</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-pink-600 mt-2 mr-3 flex-shrink-0" />
                  <span>Access to multiple AI providers</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-red-600 mt-2 mr-3 flex-shrink-0" />
                  <span>Simple application process</span>
                </li>
              </ul>

              <motion.a
                href="mailto:contact@open-token.org?subject=Application%20for%20OpenToken%20Credits"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                <FaRocket className="text-xl" />
                Apply for Credits
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/open-token"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 text-lg"
          >
            <FaGithub className="text-3xl" />
            <span className="font-semibold">View on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
