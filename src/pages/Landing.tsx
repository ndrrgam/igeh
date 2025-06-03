import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/Hero'
import { VideoGenerator } from '@/components/VideoGenerator'
import { VideoGallery } from '@/components/VideoGallery'
import { VotingSection } from '@/components/VotingSection'

export function Landing() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleGenerate = async (prompt: string, options: any) => {
    console.log('Generating video with prompt:', prompt, 'and options:', options)
    // In a real app, this would call your API
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <VideoGenerator onGenerate={handleGenerate} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <VideoGallery />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <VotingSection />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}

