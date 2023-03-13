import type { AppProps } from 'next/app'
import { Lexend } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';

const lexend = Lexend({
  weight: ['100','200', '300', '400','600','700'],
  style:['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {


  return (
    <main className={lexend.className}>
      <Component {...pageProps} />
    </main>
  )
}
