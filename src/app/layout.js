// import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/header' 
import Footer from '@/components/footer' 
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins w-full overflow-y-scroll no-scrollbar">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
