import React from 'react'
import PageLayout from './PageLayout'

import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
const Page = () => {
  return (
    <PageLayout>
      <Hero url="https://portfolio.pixbient.com/wp-content/uploads/2023/09/all_projects_compres_cut.mp4"/>
      <Features />
    </PageLayout>
  )
}

export default Page