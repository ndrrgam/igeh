import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'gradient' | 'pulse'
  className?: string
  message?: string
}

export function Loader({ size = 'md', variant = 'spinner', className, message }: LoaderProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  if (variant === 'spinner') {
    return (
      <div className={cn('flex flex-col items-center space-y-4', className)}>
        <div className={cn(
          'border-2 border-gray-600 border-t-neon-cyan rounded-full animate-spin',
          sizes[size]
        )} />
        {message && <p className="text-sm text-gray-400">{message}</p>}
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex flex-col items-center space-y-4', className)}>
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-neon-cyan rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
        {message && <p className="text-sm text-gray-400">{message}</p>}
      </div>
    )
  }

  if (variant === 'gradient') {
    return (
      <div className={cn('flex flex-col items-center space-y-4', className)}>
        <div className={cn(
          'bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan bg-[length:200%_100%] animate-gradient rounded-full',
          sizes[size]
        )} />
        {message && <p className="text-sm text-gray-400">{message}</p>}
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div className={cn('flex flex-col items-center space-y-4', className)}>
        <div className={cn(
          'bg-neon-cyan rounded-full animate-pulse-slow',
          sizes[size]
        )} />
        {message && <p className="text-sm text-gray-400">{message}</p>}
      </div>
    )
  }

  return null
}

export function SkeletonLoader({ className }: { className?: string }) {
  return (
    <div className={cn('animate-pulse', className)}>
      <div className="bg-gray-700 rounded-xl shimmer" />
    </div>
  )
}

export function VideoCardSkeleton() {
  return (
    <div className="space-y-4">
      <SkeletonLoader className="h-48 w-full" />
      <div className="space-y-2">
        <SkeletonLoader className="h-4 w-3/4" />
        <SkeletonLoader className="h-3 w-1/2" />
      </div>
    </div>
  )
}

