import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import Video from '../assets/videos/bg-video.mp4'
import {motion} from 'framer-motion'
import shape1 from '../images/shape1.svg'
import shape2 from '../images/shape2.svg'
import shape3 from '../images/shape3.svg'


const Hero = () => {
  const fadeLeft = {
    hidden: { opacity:0, x: -100},
    visible: { opacity:1, x:0 }
  }
  return (
    <HeroContainer>
      <HeroBg>
      <VideoBg src={Video} type='video/mp4' autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
      <ColumnOne>
        <HeroItems>
          <HeroH1
          variants={fadeLeft}
          initial='hidden'
          animate='visible'
          transition={{duration:1}}
          >
          Hey, I'm Tatiana
          </HeroH1>
          <HeroP
          variants={fadeLeft}
          initial='hidden'
          animate='visible'
          transition={{duration:2}}
          >
          a Front-end developer.</HeroP>
          <HeroP
          variants={fadeLeft}
          initial='hidden'
          animate='visible'
          transition={{duration:3}}
          >I enjoy building things for the web with React</HeroP>
          <Button to='/contact' primary="true" big="true" round="false">
          Get in touch!
          </Button>
        </HeroItems>
      </ColumnOne>
      <ColumnTwo>
        <Image src={shape2} whileTap={{scale:0.9}}
        drag={true}
        dragConstraints={{ left:0, right:20, top:0, bottom:50 }}
        initial={{opacity:0, y:-100}}
        animate={{opacity:0.5, y:0, transition:{duration:1} }}/>

        <Image src={shape3} whileTap={{scale:0.9}}
        drag={true}
        dragConstraints={{ left:0, right:20, top:0, bottom:50 }}
        initial={{opacity:0, x:200}}
        animate={{opacity:0.5, x:0, transition:{duration:2} }} />

        <Image src={shape3} whileTap={{scale:0.9}}
        drag={true}
        dragConstraints={{ left:0, right:20, top:0, bottom:50 }}
        initial={{opacity:0, y:-100}}
        animate={{opacity:0.5, y:0, transition:{duration:1} }} />

        <Image src={shape2} whileTap={{scale:0.9}}
        drag={true}
        dragConstraints={{ left:0, right:20, top:0, bottom:50 }}
        initial={{opacity:0, y:-500}}
        animate={{opacity:0.5, y:0, transition:{duration:3} }} />
      </ColumnTwo>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const Image = styled(motion.img) `
  position:absolute;
  width:100%;
  height:100%
  max-height:200px;
  max-width:200px;
  min-height:150px;
  min-width:150px;
  opacity:0.5;
`
const ColumnOne = styled.div`
  z-index:10;
`
const ColumnTwo = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:2rem;
position:relative;

${Image}:nth-child(1){
  top:30px;
  right:20px;
}
${Image}:nth-child(2){
  top:100px;
  right:200px;
}
${Image}:nth-child(3){
  top:400px;
  right:50px;
}
${Image}:nth-child(4){
  bottom:100px;
  right:140px;
}

`

const HeroContainer = styled.div`
  background:#0c0c0c;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#fff;
  width:100vw;
  height:100vh;
  padding:0 1rem;
  position:relative;
  margin-top:-80px;

  :before{
    content:'';
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:2;
    background:linear-gradient(
    180deg,
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.6) 100%),
    linear-gradient(
    180deg,
    rgba(0,0,0,0.2) 0%,
    transparent 100%);
  }
`


const HeroBg = styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
width:100%;
height:100%;
overflow:hidden;
`
const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`

const HeroContent = styled.div`
  display:grid;
  grid-template-columns:2fr 1fr;
  z-index:3;
  height:calc(100vh - 80px);
  max-height:100%;
  padding: 0rem calc((100vw - 1300px) /2);

  @media screen and (max-width:768px){
    display:flex;
  }
`
const HeroItems = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  height:100vh;
  max-height:100%;
  padding:0;
  line-height:1.1;
  font-weight:bold;
`
const HeroH1 = styled(motion.h1)`
  font-size:clamp(3rem, 3vw, 4rem);
  margin-bottom:1.5rem;
  letter-spacing:3px;
  padding:0 1rem;
  font-family: 'Dosis', sans-serif;
  text-shadow:#000 1px 0 10px;
`
const HeroP = styled(motion.p)`
  font-size:clamp(1rem, 3vw, 3.5rem);
  margin-bottom:2rem;
  font-weight:400;
  text-shadow:#000 1px 0 10px;
`



















