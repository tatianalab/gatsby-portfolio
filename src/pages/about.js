import React from 'react'
import styled from 'styled-components'
import Video from '../assets/videos/bg-video.mp4'
import Layout from "../components/layout"
import tatiana from '../images/tatianalabrousse.png'
import Accordion from '../components/Accordion'
import {motion} from 'framer-motion'
import Img from 'gatsby-image'
import {GiArrowDunk} from 'react-icons/gi'



const About = () => {
   const fadeLeft = {
    hidden: { opacity:0, x: -100},
    visible: { opacity:1, x:0 }
  }
  return (
    <Layout>
      <AboutContainer>
          <VideoBg src={Video} type='video/mp4' autoPlay loop muted playsInline />
          <AboutContent>

          <Col1>
            <ImageContainer>
              <IndicationP
                  variants={fadeLeft}
                  initial='hidden'
                  animate='visible'
                  transition={{duration:2}}
                  >
                  This is Me <Icon/>
                </IndicationP>
              <Portrait src={tatiana} alt="tatianalabrousse-portrait"
                initial={{ opacity: 0}}
                animate={{ opacity:0.8}}
                transition={{ duration:2}}
                whileHover={{ scale: 1.5, rotate: 25, duration:1 }}
              />
            </ImageContainer>

          </Col1>

          <Col2>
            <Accordion />
          </Col2>

          </AboutContent>
      </AboutContainer>
    </Layout>
  )
}

export default About

const AboutContainer = styled.div`
  background:#0A3A52;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#fff;
  width:100vw;
  min-height:100vh;
  margin-top:-80px;
  position:relative;
`

const VideoBg = styled.video`
position:absolute;
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
z-index:1;
`

const AboutContent = styled.div`
  padding:0 2rem;
  width:100%;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-gap:40px;
  color:white;
  z-index:2;

  @media screen and (max-width:768px){
    grid-template-columns:1fr;
    margin-top:100px;
  }
  @media screen and (max-width:400px){
    grid-template-columns:1fr;
    margin-top:240px;
    margin-bottom:100px;
  }
`
const Col1 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const Col2 = styled.div`
  display:flex;
  justify-content:center;
`
const ImageContainer = styled.div `
  display:flex;
  justify-content:center;
  width:100%;
  background:transparent;
  position:relative;
`
const Portrait = styled(motion.img) `
  width:60%;
  height:auto;
  border-radius:50%;
  box-shadow: 2px 5px 20px #164553;

  @media screen and (max-width:768px){
    width:60%;
  }
`
const IndicationP = styled(motion.p) `
  position:absolute;
  color:#f26a2e;
  top:-20px;
  left:60px;
  z-index:3;
  font-size:2rem;
  transform: rotate3d(1, 2.0, 3.0, 15deg);

  @media screen and (max-width:480px){
    font-size:1rem;
  }
`
const Icon = styled(GiArrowDunk)`
  color:white;
`

