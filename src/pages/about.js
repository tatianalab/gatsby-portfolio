import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import tatiana from '../images/tatianalabrousse.png'
import {GiArrowDunk} from 'react-icons/gi'
import Accordion from '../components/Accordion'
import {motion} from 'framer-motion'
import shape1 from '../images/shape1.svg'
import shape2 from '../images/shape2.svg'
import shape3 from '../images/shape3.svg'

const About = () => {
  const data = useStaticQuery(graphql`
    query{
       file(relativePath:{eq:"aboutbg.jpg"}){
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)
  const fadeLeft = {
    hidden: { opacity:0, x: -100},
    visible: { opacity:1, x:0 }
  }

  return(
    <Layout>
      <SEO title="about" />
        <AboutBackgroundImage Tag="hero"
        fluid={data.file.childImageSharp.fluid}>
          <AboutContainer>
            <ColLeft>

            <ImageContainer>
            <IndicationP
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{duration:2}}
            >
            That's Me <Icon/></IndicationP>
            <Portrait src={tatiana} alt="tatianalabrousse-portrait"
              initial={{ opacity: 0}}
              animate={{ opacity:1}}
              transition={{ duration:2}}
              whileHover={{ scale: 1.5, rotate: 25, duration:1 }}

            />

            </ImageContainer>


            </ColLeft>
            <ColRight>

            <Accordion />
            </ColRight>
          </AboutContainer>
        </AboutBackgroundImage>
    </Layout>

    )
}

export default About

const Shapes = styled.div `

`

const AboutContainer = styled.div `
  // margin-top:120px;
  padding:3rem calc((100vw - 1300px) / 2);
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:80vh;
  color:white;

  @media screen and (max-width:768px){
    grid-template-columns:1fr;
  }
`
const AboutBackgroundImage = styled(BackgroundImage)`
  opacity: 1 !important;
  background-size: cover;
  background-position:center;
  background-repeat:no-repeat;
  width:100%;
  min-height:100vh;
  margin-top:-80px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const ColLeft = styled.div `
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  line-height:1.4;
  padding:1rem 2rem;

  h1{
    margin-bottom:1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p{
    margin-bottom:2rem;
  }
`;

const ColRight = styled.div `
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  line-height:1.4;
  padding:1rem 2rem;

  h1{
    margin-bottom:1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p{
    margin-bottom:2rem;
  }
`

const ImageContainer = styled.div `
  width:60%;
  position:relative;
  background:transparent;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.9);

`

const Portrait = styled(motion.img) `
  width:100%;
  height:auto;
  opacity:0.7;
  border-radius:50%;
  box-shadow: 2px 5px 20px #164553;

`
const IndicationP = styled(motion.p) `
  position:absolute;
  color:#f26a2e;
  top:-20px;
  left:-60px;
  z-index:3;
  font-size:2rem;
  transform: rotate3d(1, 2.0, 3.0, 15deg);
`
const Icon = styled(GiArrowDunk)`
  color:white;
`


















