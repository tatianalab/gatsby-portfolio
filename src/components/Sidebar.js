import React from 'react'
import {BiPhoneCall} from 'react-icons/bi';
import styled from 'styled-components';
import {Link } from 'gatsby';
import {FaBoxOpen} from 'react-icons/fa'
import {menuData} from '../data/MenuData'
import resume from '../../public/files/labroussetatiana-cv-fr.pdf'

const Sidebar = ({isOpen, toggle}) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>

     <Icon onClick={toggle}>
      <CloseIcon />
     </Icon>
     <SidebarWrapper>
      <SidebarMenu>
      {menuData.map((item, index) => {
        return (
          <SidebarLink to={item.link} key={index}>
          {item.title}
          </SidebarLink>
          )
      })}
      <ResumeLink href={resume} target="_blank">C.V</ResumeLink>
      </SidebarMenu>
     </SidebarWrapper>
    </SidebarContainer>
    )

}

export default Sidebar

const ResumeLink = styled.a `
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.5rem;
  text-decoration:none;
  list-style:none;
  transition:0.2s ease-in-out;
  text-decoration:none;
  color:#fff;
  cursor:pointer;


  &:hover{
    border: 6px dotted #f26a2e;
    transition: all 0.4s ease-out;
    text-decoration:none;
`

const SidebarContainer = styled.aside`
  position:fixed;
  z-index:999;
  width:100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items:center;
  top:0;
  left:0;
  transition: 0.3s ease-in-out;
  opacity:${({isOpen}) => (isOpen ? '100%' : '0')};
  top:${({isOpen}) => (isOpen? '0' : '-100%')};

`

const CloseIcon = styled(FaBoxOpen)`
  color:#fff;
`
const Icon = styled.div`
  position:absolute;
  top:1.2rem;
  right:1.5rem;
  backgroun:transparent;
  font-size:2rem;
  cursor:pointer;
  outline:none;
`;
const SidebarWrapper = styled.div`
  color:#fff;

`;


const SidebarMenu = styled.ul`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6,80px);
  text-align:center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6,60px);
  }
`;

const SidebarLink = styled(Link)`
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.5rem;
  text-decoration:none;
  list-style:none;
  transition:0.2s ease-in-out;
  text-decoration:none;
  color:#fff;
  cursor:pointer;


  &:hover{
    border: 6px dotted #f26a2e;
    transition: all 0.4s ease-out;
    text-decoration:none;
`;
