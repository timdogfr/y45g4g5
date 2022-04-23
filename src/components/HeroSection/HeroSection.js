import React, { useState } from 'react'
import { HeroContainer, HeroBg,ImageBg, VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight,Button } from './HeroSection.elements';
function HeroSection() {


    const [hover,setHover]= useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <>
           <HeroContainer>
                <HeroContent>               
                    {/* <HeroP>.
learn how to get access in <span style={{color:"#dbac36"}}>our discord</span> </HeroP> */}
                </HeroContent>
           </HeroContainer> 
        </>
    )
}

export default HeroSection
