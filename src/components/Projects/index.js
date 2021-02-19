import React from 'react'
import ProjectsSection from './ProjectsSection'
import {ProjectsData, ProjectsDataTwo, ProjectsDataThree, ProjectsDataFour} from '../../data/ProjectsData'
import styled from 'styled-components'

const Projects = () => {
  return (
    <div id="projects">
      <HeaderH2>Selected Projects</HeaderH2>
      <ProjectsSection {...ProjectsData}/>
      <ProjectsSection {...ProjectsDataTwo}/>
      <ProjectsSection {...ProjectsDataThree}/>
      <ProjectsSection {...ProjectsDataFour}/>
    </div>
  )
}

export default Projects


const HeaderH2 = styled.h2 `
    position:relative;
    font-size:clamp(1.5rem, 6vw, 4rem);
    text-align:center;
    margin:5rem 0;

    &:before {
    content: '';
    position: absolute;
    height: 10px;
    width: 50%;
    background: rgba(242,106,46);
    bottom: 6px;
    z-index: -1;
  }

  @media screen and (max-width:768px){
    margin:2rem 0;
  }
`

