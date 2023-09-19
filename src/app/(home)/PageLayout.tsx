import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer'

const PageLayout = ({children}: {children : React.ReactNode}) => {
  return (
    <>
        <Header />
          <main className='main'>
          {children}
          </main>
        <Footer />
    </>
  )
}

export default PageLayout