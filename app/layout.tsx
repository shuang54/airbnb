import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/Modals/LoginMOdal'
import { getCurrentUser } from './components/actions/getCurrentUser'
import RentModal from './components/Modals/RentModal'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Aribnb',
  description: 'Aribnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RentModal/>
          <LoginModal/>
          <ToasterProvider/>
          <RegisterModal />
          <Navbar currentUser={ currentUser }/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
