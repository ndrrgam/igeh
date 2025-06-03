import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { motion } from 'framer-motion'
import { Wallet, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function WalletConnect() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated')

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    variant="neon"
                    size="md"
                    className="flex items-center space-x-2"
                  >
                    <Wallet className="w-4 h-4" />
                    <span>Connect Wallet</span>
                  </Button>
                )
              }

              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500/10"
                  >
                    Wrong network
                  </Button>
                )
              }

              return (
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={openChainModal}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-card/50 border border-gray-700 hover:bg-card transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 20,
                          height: 20,
                          borderRadius: 999,
                          overflow: 'hidden',
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 20, height: 20 }}
                          />
                        )}
                      </div>
                    )}
                    <span className="text-sm font-medium">{chain.name}</span>
                    <ChevronDown className="w-3 h-3" />
                  </motion.button>

                  <motion.button
                    onClick={openAccountModal}
                    className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-card/50 border border-gray-700 hover:bg-card transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {account.ensAvatar && (
                      <img
                        alt="ENS Avatar"
                        src={account.ensAvatar}
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium">
                        {account.ensName || account.displayName}
                      </span>
                      <span className="text-xs text-gray-400">
                        {account.displayBalance}
                      </span>
                    </div>
                    <ChevronDown className="w-3 h-3" />
                  </motion.button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}

