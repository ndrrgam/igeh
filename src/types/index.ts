export interface Video {
  id: string
  title: string
  prompt: string
  url: string
  thumbnail: string
  duration: number
  createdAt: string
  creator: string
  likes: number
  views: number
  status: 'generating' | 'completed' | 'failed'
}

export interface User {
  address: string
  ensName?: string
  avatar?: string
  videos: Video[]
  totalViews: number
  totalLikes: number
}

export interface VotingProposal {
  id: string
  title: string
  description: string
  options: VotingOption[]
  totalVotes: number
  endDate: string
  status: 'active' | 'ended'
  createdBy: string
}

export interface VotingOption {
  id: string
  text: string
  votes: number
  percentage: number
}

export interface GenerationRequest {
  prompt: string
  style?: string
  duration?: number
  aspectRatio?: '16:9' | '9:16' | '1:1'
}

export interface WalletState {
  isConnected: boolean
  address?: string
  ensName?: string
  avatar?: string
  chainId?: number
}

export interface LoadingState {
  isLoading: boolean
  message?: string
  progress?: number
}

