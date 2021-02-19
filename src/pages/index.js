import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import styled from 'styled-components'
import {BiUpArrow} from 'react-icons/bi'

const IndexPage = () => {
  const [scrollTop, setScrollTop] = useState(false)

  const toTop = () => {
    if(window.scrollY >= 80){
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  }

  useEffect(() => {
window.addEventListener('scroll', toTop)
  }, []);

  return(
   <Layout>
    <SEO title="Home" />
    <Hero />
    <ToTop to='/' scrolltop={scrollTop} ><BiUpArrow /></ToTop >
    <Projects />
    </Layout>
  )

}

export default IndexPage

const ToTop = styled(Link)`
  background:#448A91;
  position:fixed;
  bottom:16px;
  right:32px;
  width:50px;
  height:50px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:32px;
  color:white;
  text-decoration:none;
  cursor:pointer;
  transition:all o.3s;
  opacity:${({scrolltop}) => (scrolltop ? '0.8' : '0') };

  &:hover{
  opacity:${({scrolltop}) => (scrolltop ? '1' : '0') };
  }
`
