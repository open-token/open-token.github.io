'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMail, FiCopy, FiCheck } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'provider' | 'project';
}

export default function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  const email = 'contact@open-token.org';
  const subject = type === 'provider' 
    ? 'Interest in Becoming an OpenToken Provider'
    : 'Application for OpenToken Credits';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <FiX className="text-xl text-gray-600 dark:text-gray-400" />
              </button>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                <FiMail className="text-3xl text-white" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
                {type === 'provider' ? 'Become a Provider' : 'Apply for Credits'}
              </h2>

              {/* Description */}
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                {type === 'provider' 
                  ? 'Interested in contributing compute credits to the OpenToken initiative? Send us an email!'
                  : 'Need AI compute credits for your open-source project? Send us an email with your project details!'}
              </p>

              {/* Email display */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 mb-4 border-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FiMail className="text-indigo-600 dark:text-indigo-400 text-xl" />
                    <a 
                      href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                      className="text-gray-800 dark:text-gray-100 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <FiCheck className="text-green-600 dark:text-green-400" />
                    ) : (
                      <FiCopy className="text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Suggested subject line */}
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                <strong>Suggested subject:</strong>
                <p className="mt-1 text-gray-700 dark:text-gray-300">{subject}</p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <motion.a
                  href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                >
                  Open Email
                </motion.a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
