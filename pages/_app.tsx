import '../styles/global/index.css'
import type { AppProps } from 'next/app'
import Portal from '../src/components/Portal'
import GlobalProvider from '../src/contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Portal />
      <main>
        <Component {...pageProps} />
      </main>
    </GlobalProvider>
  )
}
