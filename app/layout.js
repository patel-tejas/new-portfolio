
import { Inter } from 'next/font/google'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
const inter = Inter({ subsets: ['latin'] })
import 'react-toastify/dist/ReactToastify.css'
import Chatbot from '../components/Chatbot'
import Cursor from "../components/Cursor"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export const metadata = {
  title: 'Portfolio | Tejas Patel',
  description: "Hello World! I'm Tejas Patel, a software engineer specializing in web development. Explore my portfolio to see my projects and skills."
  
}




export default function RootLayout({ children }) {
  // const mouseMove = () => {
  //   const cursorDot = document.querySelector("[data-cursor-dot]")
  //   const cursorOutline = document.querySelector("[data-cursor-outline]")

  //   window.addEventListener("mousemove", function (e) {
  //     const posX = e.clientX
  //     const posY = e.clientY

  //     cursorDot.style.left = `${posX}px`
  //     cursorDot.style.top = `${posY}px`

  //     cursorOutline.style.left = `${posX}px`
  //     cursorOutline.style.top = `${posY}px`
  //   })
  // }
  return (
    <html lang="en" >
      <body className={`${inter.className} ${montserrat.variable} bg-light dark:bg-dark  min-h-screen w-full font-mont  relative`} >
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
        <div className="">
          <Cursor />
        </div>
        <Navbar />
        {/* <CursorEffect /> */}
        {children}
        <div className='flex h-full md:flex-col mt-32  xs:gap-5 lg:gap-5 sm:mt-10 font-mont px-24 lg:px-16 md:px-12 sm:px-8 xs:px-6 mb-20 md:items-center xs:mt-[60px]'>
          <div className='flex-col xs:gap-2 gap-5 md:items-center w-full md:justify-center'>
            <h1 className='lg:text-4xl text-dark dark:text-light font-bold xs:text-center capitalize text-5xl mb-5 sm:mb-5 md:text-center sm:text-lg xs:text-[22px]'>how about some Music? 😉</h1>
            <h3 className='text-left xs:text-center md:text-center sm:text-sm text-yellow-600 font-semibold text-xl'>Let the music play while you explore ! 
            </h3>
          </div>
          <div className='w-1/2 sm:w-full'>
            <iframe src="https://open.spotify.com/embed/playlist/1pWsZ0u92q0IjBIyGwHZOc?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
