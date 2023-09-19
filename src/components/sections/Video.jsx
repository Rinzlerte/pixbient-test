"use client"

import React, { useEffect, useRef } from 'react';


const Video = () => {
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        })
    }, []);

  return (
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
  )
}

export default Video