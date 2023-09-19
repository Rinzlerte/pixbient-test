import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import profilePic from '../../../public/poster.webp'

import image1 from '../../../public/c1.webp'
import image2 from '../../../public/c2.webp'
import image3 from '../../../public/c3.webp'

const Features = () => {
  return (
    <section id="features" className='features'>
      <div className='container fluid'>
        <div className='wrapper-grid'>
          <div className='wrapper-side'>
            <Link href="/" className='project-card'>

              <div className='project-card__img'>
                <Image
                  src={image1}
                  alt="name"
                  layout={'fill'}
                  objectFit="cover"
                  // className="project-image"
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
                   src={image1}
                  alt="name"
                  layout={'fill'}
                  objectFit="cover"
                  // className="project-image"
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
                   src={image2}
                  alt="name"
                  layout={'fill'}
                  objectFit="cover"
                  // className="project-image"
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
                 src={image3}
                  alt="name"
                  layout={'fill'}
                  objectFit="cover"
                  // className="project-image"
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