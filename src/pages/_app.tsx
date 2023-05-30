import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from './layout'
import { Modal } from '@/components/Modal'
import { LoginModal,RegisterModal } from '@/components/Modals'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <LoginModal />
    <RegisterModal />
    {/* <Modal isOpen title='Signup' actionLabel='Submit' /> */}
    <Component {...pageProps} />
  </Layout>

}
