import React from 'react'
import PageLayout from './PageLayout'

import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
const Page = () => {
  return (
    <PageLayout>
      <Hero />
      <Features />
    </PageLayout>
  )
}

export default Page