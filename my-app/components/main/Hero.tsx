import React from 'react'
import HeroConent from '../sub/HeroContent'

const Hero = () => {
    return (
        <div className= 'relative flex flex-col h-full w-full'>
            <video
            autoPlay
            muted
            loop
            className= 'rotate-180 absolute top-[-340] left-0 z-[1] w-full h-full object-co'>
                <source src= '/blackhole.webm' type= 'video/webm' />
            </video>
            <HeroConent />
        </div>
    )
}

export default Hero