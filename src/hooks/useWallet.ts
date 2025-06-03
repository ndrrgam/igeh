import { useAccount, useConnect, useDisconnect, useEnsName, useEnsAvatar } from 'wagmi'
import { WalletState } from '@/types'

export function useWallet(): WalletState & {
  connect: () => void
  disconnect: () => void
  isConnecting: boolean
} {
  const { address, isConnected } = useAccount()
  const { connect, isLoading: isConnecting } = useConnect()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName })

  return {
    isConnected,
    address,
    ensName: ensName || undefined,
    avatar: ensAvatar || undefined,
    connect: () => connect(),
    disconnect,
    isConnecting,
  }
}

