import React from 'react'
import { motion } from 'framer-motion'
import { Vote, Users, Clock, CheckCircle, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { VotingProposal } from '@/types'

interface VotingSectionProps {
  proposals?: VotingProposal[]
}

// Mock data for demonstration
const mockProposals: VotingProposal[] = [
  {
    id: '1',
    title: 'Add 3D Animation Style',
    description: 'Introduce a new 3D animation style for creating more dynamic and immersive videos with depth and realistic lighting.',
    options: [
      { id: '1a', text: 'Yes, add 3D style', votes: 1247, percentage: 78 },
      { id: '1b', text: 'No, focus on current styles', votes: 352, percentage: 22 },
    ],
    totalVotes: 1599,
    endDate: '2024-02-15T23:59:59Z',
    status: 'active',
    createdBy: '0x1234...5678'
  },
  {
    id: '2',
    title: 'Increase Video Duration Limit',
    description: 'Should we increase the maximum video duration from 30 seconds to 60 seconds for premium users?',
    options: [
      { id: '2a', text: 'Yes, increase to 60s', votes: 892, percentage: 65 },
      { id: '2b', text: 'Keep at 30s', votes: 234, percentage: 17 },
      { id: '2c', text: 'Increase to 45s', votes: 247, percentage: 18 },
    ],
    totalVotes: 1373,
    endDate: '2024-02-20T23:59:59Z',
    status: 'active',
    createdBy: '0xabcd...efgh'
  },
  {
    id: '3',
    title: 'Community Marketplace',
    description: 'Create a marketplace where users can sell their AI-generated videos as NFTs and share revenue with the platform.',
    options: [
      { id: '3a', text: 'Yes, create marketplace', votes: 2156, percentage: 84 },
      { id: '3b', text: 'No, keep it free', votes: 410, percentage: 16 },
    ],
    totalVotes: 2566,
    endDate: '2024-01-30T23:59:59Z',
    status: 'ended',
    createdBy: '0x9876...5432'
  }
]

function VoteCard({ proposal, index }: { proposal: VotingProposal; index: number }) {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null)
  const [hasVoted, setHasVoted] = React.useState(false)

  const isActive = proposal.status === 'active'
  const timeLeft = new Date(proposal.endDate).getTime() - new Date().getTime()
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))

  const handleVote = async () => {
    if (!selectedOption || hasVoted) return
    
    // Simulate voting transaction
    setHasVoted(true)
    // In a real app, this would interact with smart contracts
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="glass-effect h-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2 flex items-center space-x-2">
                <Vote className="w-5 h-5 text-neon-cyan" />
                <span>{proposal.title}</span>
              </CardTitle>
              <p className="text-gray-400 text-sm leading-relaxed">
                {proposal.description}
              </p>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              isActive 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
            }`}>
              {proposal.status === 'active' ? 'Active' : 'Ended'}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Voting Options */}
          <div className="space-y-3">
            {proposal.options.map((option) => (
              <motion.div
                key={option.id}
                className={`relative p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedOption === option.id
                    ? 'border-neon-cyan bg-neon-cyan/10'
                    : 'border-gray-700 bg-card/30 hover:border-gray-600'
                } ${!isActive || hasVoted ? 'cursor-not-allowed opacity-75' : ''}`}
                onClick={() => {
                  if (isActive && !hasVoted) {
                    setSelectedOption(option.id)
                  }
                }}
                whileHover={isActive && !hasVoted ? { scale: 1.02 } : {}}
                whileTap={isActive && !hasVoted ? { scale: 0.98 } : {}}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{option.text}</span>
                  <span className="text-sm text-gray-400">
                    {option.percentage}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-neon-cyan to-neon-purple h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${option.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
                
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <span>{option.votes.toLocaleString()} votes</span>
                  {selectedOption === option.id && (
                    <CheckCircle className="w-4 h-4 text-neon-cyan" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vote Button */}
          {isActive && !hasVoted && (
            <Button
              onClick={handleVote}
              disabled={!selectedOption}
              variant="neon"
              className="w-full"
            >
              Cast Vote
            </Button>
          )}

          {hasVoted && (
            <div className="flex items-center justify-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg p-3">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Vote submitted successfully!</span>
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-700/50">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{proposal.totalVotes.toLocaleString()} votes</span>
              </div>
              {isActive && (
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{daysLeft > 0 ? `${daysLeft} days left` : 'Ending soon'}</span>
                </div>
              )}
            </div>
            <div className="text-xs">
              by {proposal.createdBy.slice(0, 6)}...{proposal.createdBy.slice(-4)}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function VotingSection({ proposals = mockProposals }: VotingSectionProps) {
  const activeProposals = proposals.filter(p => p.status === 'active')
  const endedProposals = proposals.filter(p => p.status === 'ended')

  return (
    <section id="voting" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Community <span className="gradient-text">Governance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Shape the future of our platform by participating in community votes
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { 
              label: 'Active Proposals', 
              value: activeProposals.length.toString(), 
              icon: Vote,
              color: 'text-neon-cyan'
            },
            { 
              label: 'Total Votes Cast', 
              value: proposals.reduce((sum, p) => sum + p.totalVotes, 0).toLocaleString(), 
              icon: Users,
              color: 'text-neon-purple'
            },
            { 
              label: 'Participation Rate', 
              value: '78%', 
              icon: TrendingUp,
              color: 'text-green-400'
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect text-center">
                <CardContent className="p-6">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Proposals */}
        {activeProposals.length > 0 && (
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6 flex items-center space-x-2"
            >
              <Vote className="w-6 h-6 text-neon-cyan" />
              <span>Active Proposals</span>
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeProposals.map((proposal, index) => (
                <VoteCard key={proposal.id} proposal={proposal} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Recent Results */}
        {endedProposals.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6 flex items-center space-x-2"
            >
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Recent Results</span>
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {endedProposals.slice(0, 2).map((proposal, index) => (
                <VoteCard key={proposal.id} proposal={proposal} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Create Proposal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="glass-effect max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">
                Have an idea for the platform?
              </h3>
              <p className="text-gray-400 mb-6">
                Submit your own proposal and let the community decide on new features and improvements.
              </p>
              <Button variant="neon" size="lg">
                Create Proposal
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

