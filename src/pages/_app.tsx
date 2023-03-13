import type { AppProps } from 'next/app'
import { Lexend } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';

const lexend = Lexend({
<<<<<<< HEAD
  weight: ['100','200', '300', '400','600','700'],
=======
  weight: ['100','400','700'],
>>>>>>> e75f040465ca55c6f2ad7708d0f01c596b5dd7b9
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
