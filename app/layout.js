import { Inter } from 'next/font/google'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Chatbot from '../components/Chatbot'
import Layout from '@/components/Layout'

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
          <Layout>

            <div className='flex h-full md:flex-col py-10'>
              <div className='flex-col xs:gap-2 gap-5 md:items-center w-full md:justify-center'>
                {/* Terminal-style header indicator */}
                <div className='flex items-center gap-2 mb-2'>
                  <div className='w-2 h-2 rounded-full bg-green-600 dark:bg-[#00FF6A] animate-pulse'></div>
                  <span className='font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                    AUDIO_STREAM
                  </span>
                </div>

                <h1 className='lg:text-4xl text-gray-900 dark:text-white font-bold xs:text-center capitalize text-5xl mb-3 sm:mb-5 md:text-center sm:text-lg xs:text-[22px] font-mont'>
                  how about some Music? 😉
                </h1>
                <h3 className='text-left xs:text-center md:text-center sm:text-sm text-green-600 dark:text-[#00FF6A] font-semibold text-xl font-mono'>
                  $ Let the music play while you explore !
                </h3>
              </div>
              <div className='w-1/2 sm:w-full'>
                <div className='border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden'>
                  {/* Player header */}
                  <div className='flex items-center justify-between px-3 py-2 border-b border-gray-300 dark:border-gray-800 bg-white/50 dark:bg-[#0D0D0D]/30'>
                    <div className='flex items-center gap-2'>
                      <div className='w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-[#00FF6A]'></div>
                      <span className='font-mono text-xs text-gray-700 dark:text-gray-300'>STREAMING</span>
                    </div>
                    <div className='font-mono text-xs text-gray-500 dark:text-gray-400'>LIVE</div>
                  </div>

                  {/* Spotify player */}
                  <iframe
                    src="https://open.spotify.com/embed/playlist/1pWsZ0u92q0IjBIyGwHZOc?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Layout>
        </main>

        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}