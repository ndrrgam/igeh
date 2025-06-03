import React from 'react'
import { motion } from 'framer-motion'
import { Play, Menu, X } from 'lucide-react'
import { WalletConnect } from '@/components/WalletConnect'
import { Button } from '@/components/ui/Button'

interface HeaderProps {
  onMenuToggle?: () => void
  isMenuOpen?: boolean
}

export function Header({ onMenuToggle, isMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Features
            </a>
            <a 
              href="#gallery" 
              className="text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Gallery
            </a>
            <a 
              href="#voting" 
              className="text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Community
            </a>
            <a 
              href="#dashboard" 
              className="text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Dashboard
            </a>
          </nav>

          {/* Wallet Connect */}
          <div className="hidden md:block">
            <WalletConnect />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={onMenuToggle}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-gray-700/50"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-6 space-y-4">
            <nav className="space-y-4">
              <a 
                href="#features" 
                className="block text-gray-300 hover:text-neon-cyan transition-colors"
              >
                Features
              </a>
              <a 
                href="#gallery" 
                className="block text-gray-300 hover:text-neon-cyan transition-colors"
              >
                Gallery
              </a>
              <a 
                href="#voting" 
                className="block text-gray-300 hover:text-neon-cyan transition-colors"
              >
                Community
              </a>
              <a 
                href="#dashboard" 
                className="block text-gray-300 hover:text-neon-cyan transition-colors"
              >
                Dashboard
              </a>
            </nav>
            <div className="pt-4 border-t border-gray-700">
              <WalletConnect />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

