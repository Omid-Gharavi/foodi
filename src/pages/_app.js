import '@/styles/globals.css'
import { useRouter } from 'next/router'
import Header from '@/components/Header/Header'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const path = router.pathname

  return (
    <>
      {
        path === '/signup' || path === 'signin' ?
          (
            <Component {...pageProps} />
          ) :
          (
            <>
              <Header />
              <Component {...pageProps} />
            </>
          )
      }
    </>
  )
}
