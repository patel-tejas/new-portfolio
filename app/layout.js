import { Inter } from 'next/font/google'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Chatbot from '../components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export const metadata = {
  title: 'Portfolio | Tejas Patel',
  description: "Hello World! I'm Tejas Patel, a software engineer specializing in web development. Explore my portfolio to see my projects and skills."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} bg-light dark:bg-dark min-h-screen w-full font-mont relative`}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <Navbar />

        {/* Main content with proper top padding for fixed navbar */}
        <main className="pt-[83px]">
          {children}

          <div className='flex h-full md:flex-col mt-32 xs:gap-5 lg:gap-5 sm:mt-10 font-mont px-24 lg:px-16 md:px-12 sm:px-6 xs:px-2 mb-20 md:items-center xs:mt-[60px]'>
            <div className='flex-col xs:gap-2 gap-5 md:items-center w-full md:justify-center'>
              <h1 className='lg:text-4xl text-dark dark:text-light font-bold xs:text-center capitalize text-5xl mb-5 sm:mb-5 md:text-center sm:text-lg xs:text-[22px]'>how about some Music? 😉</h1>
              <h3 className='text-left xs:text-center md:text-center sm:text-sm text-yellow-600 font-semibold text-xl'>Let the music play while you explore !
              </h3>
            </div>
            <div className='w-1/2 sm:w-full'>
              <iframe src="https://open.spotify.com/embed/playlist/1pWsZ0u92q0IjBIyGwHZOc?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </main>

        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}