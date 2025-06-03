import React from 'react'
import { motion } from 'framer-motion'
import { Wand2, Send, Sparkles, Clock, Palette, Ratio } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Loader } from '@/components/ui/Loader'

interface VideoGeneratorProps {
  onGenerate?: (prompt: string, options: GenerationOptions) => void
}

interface GenerationOptions {
  style: string
  duration: number
  aspectRatio: '16:9' | '9:16' | '1:1'
}

export function VideoGenerator({ onGenerate }: VideoGeneratorProps) {
  const [prompt, setPrompt] = React.useState('')
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [options, setOptions] = React.useState<GenerationOptions>({
    style: 'cinematic',
    duration: 5,
    aspectRatio: '16:9'
  })

  const styles = [
    { id: 'cinematic', name: 'Cinematic', icon: '🎬' },
    { id: 'anime', name: 'Anime', icon: '🎌' },
    { id: 'realistic', name: 'Realistic', icon: '📸' },
    { id: 'abstract', name: 'Abstract', icon: '🎨' },
    { id: 'cartoon', name: 'Cartoon', icon: '🎪' },
    { id: 'vintage', name: 'Vintage', icon: '📼' },
  ]

  const durations = [3, 5, 10, 15, 30]
  const aspectRatios: Array<{ value: '16:9' | '9:16' | '1:1', label: string }> = [
    { value: '16:9', label: 'Landscape' },
    { value: '9:16', label: 'Portrait' },
    { value: '1:1', label: 'Square' },
  ]

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    try {
      await onGenerate?.(prompt, options)
      // Simulate generation time
      await new Promise(resolve => setTimeout(resolve, 3000))
    } finally {
      setIsGenerating(false)
    }
  }

  const promptSuggestions = [
    "A majestic dragon flying over a medieval castle at sunset",
    "Underwater city with bioluminescent creatures swimming around",
    "Futuristic cyberpunk street with neon lights and flying cars",
    "Peaceful forest with magical floating particles and soft light",
    "Space station orbiting a colorful nebula with distant stars"
  ]

  return (
    <section id="generator" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Create Your <span className="gradient-text">Masterpiece</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Describe your vision and watch AI bring it to life in stunning video format
          </p>
        </motion.div>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Wand2 className="w-6 h-6 text-neon-cyan" />
              <span>Video Generator</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Prompt Input */}
            <div className="space-y-4">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the video you want to create..."
                  className="w-full h-32 p-4 rounded-xl border border-gray-700 bg-card/50 text-text placeholder:text-gray-500 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 resize-none transition-all duration-200"
                  maxLength={500}
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                  {prompt.length}/500
                </div>
              </div>

              {/* Prompt Suggestions */}
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Try these prompts:</p>
                <div className="flex flex-wrap gap-2">
                  {promptSuggestions.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setPrompt(suggestion)}
                      className="text-xs px-3 py-1 rounded-full bg-card/50 border border-gray-700 text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {suggestion.slice(0, 40)}...
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Style Selection */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Palette className="w-4 h-4 text-neon-purple" />
                  <label className="text-sm font-medium">Style</label>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {styles.map((style) => (
                    <motion.button
                      key={style.id}
                      onClick={() => setOptions(prev => ({ ...prev, style: style.id }))}
                      className={`p-3 rounded-lg border transition-all ${
                        options.style === style.id
                          ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
                          : 'border-gray-700 bg-card/30 text-gray-300 hover:border-gray-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-lg mb-1">{style.icon}</div>
                      <div className="text-xs font-medium">{style.name}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Duration Selection */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-neon-purple" />
                  <label className="text-sm font-medium">Duration</label>
                </div>
                <div className="space-y-2">
                  {durations.map((duration) => (
                    <motion.button
                      key={duration}
                      onClick={() => setOptions(prev => ({ ...prev, duration }))}
                      className={`w-full p-2 rounded-lg border text-sm transition-all ${
                        options.duration === duration
                          ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
                          : 'border-gray-700 bg-card/30 text-gray-300 hover:border-gray-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {duration}s
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Aspect Ratio Selection */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Ratio className="w-4 h-4 text-neon-purple" />
                  <label className="text-sm font-medium">Format</label>
                </div>
                <div className="space-y-2">
                  {aspectRatios.map((ratio) => (
                    <motion.button
                      key={ratio.value}
                      onClick={() => setOptions(prev => ({ ...prev, aspectRatio: ratio.value }))}
                      className={`w-full p-2 rounded-lg border text-sm transition-all ${
                        options.aspectRatio === ratio.value
                          ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
                          : 'border-gray-700 bg-card/30 text-gray-300 hover:border-gray-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {ratio.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <div className="pt-4">
              {isGenerating ? (
                <div className="flex flex-col items-center space-y-4">
                  <Loader variant="gradient" size="lg" message="Creating your video..." />
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-neon-cyan to-neon-purple h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              ) : (
                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim()}
                  variant="neon"
                  size="lg"
                  className="w-full group"
                >
                  <span className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Video</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

