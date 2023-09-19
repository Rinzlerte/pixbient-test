import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import profilePic from '../../../public/poster.webp'

const Features = () => {
  return (
    <section id="features" className='features'>
      <div className='container fluid'>
        <div className='wrapper-grid'>
          <div className='wrapper-side'>
            <Link href="/" className='project-card'>

              <div className='project-card__img'>
                <Image
                  src={profilePic}
                  alt="name"
                  width={1300}
                  height={900}
                  className="project-image"
                />
              </div>

              <div className='project-card__details'>
                <h3 className='project-card_title'>Apart Complex</h3>
              </div>

            </Link>
          </div>

          <div className='wrapper-side'>
            <Link href="/" className='project-card'>

              <div className='project-card__img'>
                <Image
                  src={profilePic}
                  alt="name"
                  width={1300}
                  height={900}
                  className="project-image"
                />
              </div>

              <div className='project-card__details'>
                <h3 className='project-card_title'>Wooden House	</h3>
              </div>

            </Link>
          </div>
          <div className='wrapper-side'>
            <Link href="/" className='project-card'>

              <div className='project-card__img'>
                <Image
                  src={profilePic}
                  alt="name"
                  width={1300}
                  height={900}
                  className="project-image"
                />
              </div>

              <div className='project-card__details'>
                <h3 className='project-card_title'>
                  Bisnesslab</h3>
              </div>

            </Link>
          </div>
          <div className='wrapper-side'>
            <Link href="/" className='project-card'>

              <div className='project-card__img'>
                <Image
                  src={profilePic}
                  alt="name"
                  width={1300}
                  height={900}
                  className="project-image"
                />
              </div>

              <div className='project-card__details'>
                <h3 className='project-card_title'>	Micro-Office Hub</h3>
              </div>

            </Link>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Features