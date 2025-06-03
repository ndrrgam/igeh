import '@rainbow-me/rainbowkit/styles.css'
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_ID || 'demo' }),
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'AI Video Platform',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo',
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const queryClient = new QueryClient()

const customTheme = darkTheme({
  accentColor: '#54D6FF',
  accentColorForeground: '#121212',
  borderRadius: 'large',
  fontStack: 'system',
  overlayBlur: 'small',
})

interface Web3ProviderProps {
  children: React.ReactNode
}

export function Web3Provider({ children }: Web3ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider 
          chains={chains} 
          theme={customTheme}
          showRecentTransactions={true}
        >
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  )
}

