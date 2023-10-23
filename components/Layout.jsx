import React from 'react'

const Layout = ({children, className}) => {
  return (
    <div className={`${className} w-full h-full inline-block bg-light p-32 z-0 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 xs:p-6`}>
        {children}
    </div>
  )
}

export default Layout