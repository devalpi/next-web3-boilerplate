import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import '../../styles/globals.css'
import Web3Provider from '../providers/web3React'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </NextUIProvider>
  )
}

export default MyApp
