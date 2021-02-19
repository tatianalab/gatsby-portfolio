import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import {FaBox} from 'react-icons/fa'
import {menuData} from '../data/MenuData'
import resume from '../../public/files/Labrousse_Tatiana_CVfr.pdf'



const Header = ({toggle}) => {
  const onResumeClick = () => {
    window.open(resume)
  }
  return (
    <Nav>
    <Logo to='/'>Tatiana Labrousse</Logo>
    <Bars onClick={toggle}/>
    <NavMenu>
      {menuData.map((item, index) => {
        return (
          <NavLink to={item.link} key={index}>
          {item.title}
          </NavLink>
          )
      })}
      <ResumeLink href={resume} target="_blank">C.V</ResumeLink>
    </NavMenu>
    </Nav>
    )
}



export default Header

const ResumeLink = styled.a `
   color:#fff;
  display:flex;
  align-items:center;
  padding:0 1rem;
  height:100%;
  cursor:pointer;
  text-decoration:none;
  font-size:1.3rem;

  &:hover{
    border-bottom: 6px dotted #f26a2e;
    transition: all 0.2s ease-out;
    text-decoration:none;
  }
`

const Nav = styled.nav`
  background:transparent;
  height:80px;
  display:flex;
  justify-content:space-between;
  padding:0.5rem calc((100vw - 1300px) / 2);
  z-index:100;
  position:relative;
  background:transparent;
`
const Logo = styled(Link)`
  font-family: 'Satisfy', cursive;
  color:#fff;
  display:flex;
  align-items:center;
  padding:0 1rem;
  height:100%;
  cursor:pointer;
  text-decoration:none;
  font-size:1.5rem;

  &:hover{
    border-bottom: 6px dotted #f26a2e;
    transition: all 0.2s ease-out;
    text-decoration:none;
  }
`

const NavLink = styled(Link)`
  color:#fff;
  display:flex;
  align-items:center;
  padding:0 1rem;
  height:100%;
  cursor:pointer;
  text-decoration:none;
  font-size:1.3rem;

  &:hover{
    border-bottom: 6px dotted #f26a2e;
    transition: all 0.2s ease-out;
    text-decoration:none;
  }
`
const Bars = styled(FaBox)`
  display:none;
  color:#fff;

  @media screen and (max-width:768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%, 75%);
    font-size:1.8rem;
    cursor:pointer;
  }
`
const NavMenu = styled.div`
  display:flex;
  align-items:center;

  @media screen and (max-width:768px){
    display:none;
  }
`















