import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import ContactForm from '../components/ContactForm'

const Contact = () => {

  const data = useStaticQuery(graphql`
    query{
       file(relativePath:{eq:"contactbg.jpg"}){
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)
  return (
    <Layout>
    <SEO title="contact" />
    <ContactBackgroundImage Tag="hero"
    fluid={data.file.childImageSharp.fluid}>
    <ContactForm />
    </ContactBackgroundImage>
    </Layout>

  )
}

export default Contact

const ContactBackgroundImage = styled(BackgroundImage)`
  color:white;
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
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
`
