import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none'
    
    const variants = {
      primary: 'bg-neon-cyan text-background hover:bg-neon-cyan/90 focus:ring-neon-cyan',
      secondary: 'bg-card text-text hover:bg-card/80 border border-gray-700',
      outline: 'border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background',
      ghost: 'text-text hover:bg-card/50',
      neon: 'bg-gradient-to-r from-neon-cyan to-neon-purple text-background hover:shadow-lg hover:shadow-neon-cyan/25 button-glow animate-glow'
    }
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-13 px-8 text-lg',
      xl: 'h-16 px-10 text-xl'
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }

