import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { DefaultLayout } from '../components/templates/DefaultLayout'
import Web3Provider from '../providers/web3React'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Web3Provider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Web3Provider>
    </NextUIProvider>
  )
}

export default MyApp
