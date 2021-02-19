import React from 'react'
import ProjectsSection from './ProjectsSection'
import {ProjectsData, ProjectsDataTwo, ProjectsDataThree, ProjectsDataFour} from '../../data/ProjectsData'
import styled from 'styled-components'

const Projects = () => {
  return (
    <div id="projects">
      <SectionHeader>
      <h2>Selected Projects</h2>

      </SectionHeader>
      <ProjectsSection {...ProjectsData}/>
      <ProjectsSection {...ProjectsDataTwo}/>
      <ProjectsSection {...ProjectsDataThree}/>
      <ProjectsSection {...ProjectsDataFour}/>
    </div>
  )
}

export default Projects

const SectionHeader = styled.div`
  width:100%;
  height:100%;
  padding-top:4rem;
  text-align:center;

  h2{
    position:relative;
    font-size:clamp(1.5rem, 6vw, 4rem);

  :before {
    content: '';
    position: absolute;
    height: 10px;
    width: 50%;
    background: rgba(242,106,46);
    bottom: 6px;
    z-index: -1;
  }

  }
`


