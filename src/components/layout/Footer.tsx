import React from 'react'
import { motion } from 'framer-motion'
import { Play, Twitter, Github, Discord, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-gray-700/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-background fill-current" />
              </div>
              <span className="text-xl font-bold gradient-text">
                AI Video
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm max-w-xs">
              Transform your ideas into stunning videos using cutting-edge AI technology. 
              Join the future of content creation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-text font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#api" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-text font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#voting" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Governance
                </a>
              </li>
              <li>
                <a href="#docs" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-text font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Discord className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} AI Video Platform. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for creators</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

