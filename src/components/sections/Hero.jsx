"use client"

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero = ({url}) => {
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        })
    }, []);

  return (
    <section className='hero'>
        <div className='bg-container'>
            <div className='overlay'/>
                <video 
                    autoPlay 
                    muted
                    playsInline
                    ref={videoRef}
                    loop
                    className="bg-container__el" 
                    poster="./poster.webp">
                    <source 
                        src="./video/intro.mp4"
                        type="video/mp4" 
                    />
                </video>

                <div className='hero-top'>
                    <div className='hero-title_wrapper'>
                        <h1 className='hero-title'>MAKE YOUR ARCHITECTURAL DREAMS COME TRUE</h1>
                    </div>

                     <div className="scroll-down">
                        <p className="scroll-down__text">
                            Scroll down to see more  video projects and our renderings or press buttons below			
                        </p>
                        <div className="scroll-down__buttons">
                            <Link href="/exteriors" className="btn">Exteriors</Link>
                            <Link href="/interiors" className="btn">Interiors</Link>
                        </div>
                        <div className="masthead-arrow-container">
                            <div className="masthead-arrow"/>
                        </div>
	                </div>

                </div>
            </div>
    </section>
  )
}

export default Hero