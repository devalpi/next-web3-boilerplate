import { Web3ReactProvider } from '@web3-react/core'

import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import {
  coinbaseWallet,
  hooks as coinbaseWalletHooks
} from '../lib/connectors/coinbaseWallet'
import { hooks as metaMaskHooks, metaMask } from '../lib/connectors/metaMask'
import { hooks as networkHooks, network } from '../lib/connectors/network'
import {
  hooks as walletConnectHooks,
  walletConnect
} from '../lib/connectors/walletConnect'

const connectors: [
  MetaMask | WalletConnect | CoinbaseWallet | Network,
  Web3ReactHooks
][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
]

type Web3ProviderProps = {
  children: React.ReactNode
}

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  return (
    <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
  )
}

export default Web3Provider
