import React from 'react'
import styled from 'styled-components'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinks>
          <FooterLink to="https://www.linkedin.com/in/tatianalab/" target="_blank" rel="noreferrer"> <FaLinkedin /></FooterLink>
          <FooterLink to="https://github.com/tatianalab" target="_blank" rel="noreferrer"> <FaGithub /></FooterLink>
        </FooterLinks>
        <FooterSignature>
        Tatiana Labrousse
        </FooterSignature>

      </FooterWrapper>

    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer `
  // margin-top:10px;
  background: #000;
  color:#fff;
`

const FooterWrapper = styled.div `
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px;
`

const FooterLinks = styled.div `
  display:flex;

`

const FooterSignature = styled.p `
  font-family:'Satisfy';
`
const FooterLink = styled(Link) `
  margin-right:15px;
  font-size:2rem;
  cursor:pointer;
  color:#fff;

  &:hover{
    color:#f26a2e;
  }
`

