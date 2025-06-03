import React from 'react'
import { motion } from 'framer-motion'
import { Play, Sparkles, ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-card/50 border border-neon-cyan/30 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-medium text-neon-cyan">
              Powered by Advanced AI
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Transform{' '}
              <span className="gradient-text">Ideas</span>
              <br />
              Into{' '}
              <span className="gradient-text">Videos</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Create stunning videos from simple text prompts using cutting-edge AI technology. 
              No editing skills required.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Button
                variant="neon"
                size="xl"
                className="group relative overflow-hidden"
              >
                <span className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Start Creating</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </Button>
            </motion.div>

            <Button
              variant="outline"
              size="xl"
              className="group"
            >
              <span className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>View Gallery</span>
              </span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
          >
            {[
              { label: 'Videos Created', value: '10K+' },
              { label: 'Active Creators', value: '2.5K+' },
              { label: 'AI Models', value: '15+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}

