import React from 'react'
import { motion } from 'framer-motion'
import { Play, Heart, Eye, Share2, Download, Clock, User } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { VideoCardSkeleton } from '@/components/ui/Loader'
import { Video } from '@/types'
import { formatDuration } from '@/lib/utils'

interface VideoGalleryProps {
  videos?: Video[]
  isLoading?: boolean
}

// Mock data for demonstration
const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Majestic Dragon Flight',
    prompt: 'A majestic dragon flying over a medieval castle at sunset',
    url: '/videos/dragon.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    duration: 15,
    createdAt: '2024-01-15T10:30:00Z',
    creator: '0x1234...5678',
    likes: 234,
    views: 1520,
    status: 'completed'
  },
  {
    id: '2',
    title: 'Underwater Paradise',
    prompt: 'Underwater city with bioluminescent creatures swimming around',
    url: '/videos/underwater.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    duration: 12,
    createdAt: '2024-01-14T15:45:00Z',
    creator: '0xabcd...efgh',
    likes: 189,
    views: 892,
    status: 'completed'
  },
  {
    id: '3',
    title: 'Cyberpunk Streets',
    prompt: 'Futuristic cyberpunk street with neon lights and flying cars',
    url: '/videos/cyberpunk.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    duration: 20,
    createdAt: '2024-01-13T09:20:00Z',
    creator: '0x9876...5432',
    likes: 456,
    views: 2340,
    status: 'completed'
  },
  {
    id: '4',
    title: 'Magical Forest',
    prompt: 'Peaceful forest with magical floating particles and soft light',
    url: '/videos/forest.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    duration: 8,
    createdAt: '2024-01-12T14:10:00Z',
    creator: '0xfedc...ba98',
    likes: 312,
    views: 1680,
    status: 'completed'
  },
  {
    id: '5',
    title: 'Space Odyssey',
    prompt: 'Space station orbiting a colorful nebula with distant stars',
    url: '/videos/space.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop',
    duration: 25,
    createdAt: '2024-01-11T11:55:00Z',
    creator: '0x1357...2468',
    likes: 678,
    views: 3420,
    status: 'completed'
  },
  {
    id: '6',
    title: 'Ancient Temple',
    prompt: 'Mysterious ancient temple with golden light beams',
    url: '/videos/temple.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop',
    duration: 18,
    createdAt: '2024-01-10T16:30:00Z',
    creator: '0x8642...9753',
    likes: 423,
    views: 1890,
    status: 'completed'
  }
]

function VideoCard({ video, index }: { video: Video; index: number }) {
  const [isLiked, setIsLiked] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card hover glass className="group overflow-hidden">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Play Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 bg-neon-cyan/90 rounded-full flex items-center justify-center text-background hover:bg-neon-cyan transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6 ml-1 fill-current" />
            </motion.button>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{formatDuration(video.duration)}</span>
          </div>

          {/* Status Badge */}
          {video.status === 'generating' && (
            <div className="absolute top-3 left-3 bg-neon-purple/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white">
              Generating...
            </div>
          )}
        </div>

        <CardContent className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-neon-cyan transition-colors">
              {video.title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-2 mt-1">
              {video.prompt}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3" />
              <span>{video.creator.slice(0, 6)}...{video.creator.slice(-4)}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>{video.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-3 h-3" />
                <span>{video.likes}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-lg transition-colors ${
                  isLiked 
                    ? 'bg-red-500/20 text-red-500' 
                    : 'bg-card/50 text-gray-400 hover:text-red-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </motion.button>
              
              <motion.button
                className="p-2 rounded-lg bg-card/50 text-gray-400 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                className="p-2 rounded-lg bg-card/50 text-gray-400 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
              </motion.button>
            </div>

            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function VideoGallery({ videos = mockVideos, isLoading = false }: VideoGalleryProps) {
  const [filter, setFilter] = React.useState('all')
  const [sortBy, setSortBy] = React.useState('recent')

  const filters = [
    { id: 'all', label: 'All Videos' },
    { id: 'trending', label: 'Trending' },
    { id: 'recent', label: 'Recent' },
    { id: 'popular', label: 'Popular' },
  ]

  const sortOptions = [
    { id: 'recent', label: 'Most Recent' },
    { id: 'popular', label: 'Most Popular' },
    { id: 'views', label: 'Most Viewed' },
    { id: 'likes', label: 'Most Liked' },
  ]

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Community <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover amazing videos created by our community of AI artists
          </p>
        </motion.div>

        {/* Filters and Sort */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0"
        >
          <div className="flex flex-wrap gap-2">
            {filters.map((filterOption) => (
              <motion.button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === filterOption.id
                    ? 'bg-neon-cyan text-background'
                    : 'bg-card/50 text-gray-300 hover:bg-card border border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterOption.label}
              </motion.button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg bg-card/50 border border-gray-700 text-text focus:border-neon-cyan focus:outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Video Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <VideoCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </motion.div>
        )}

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Load More Videos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

