import type { AppProps } from 'next/app'
import { Lexend } from 'next/font/google'

const roboto = Lexend({
  weight: ['400','700'],
  style:['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {


  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
