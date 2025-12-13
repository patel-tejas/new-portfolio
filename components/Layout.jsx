import React from 'react'

const Layout = ({children, className}) => {
  return (
    <div className={`${className} w-full h-full inline-block bg-light px-32 z-0 dark:bg-dark xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-2`}>
        {children}
    </div>
  )
}

export default Layout