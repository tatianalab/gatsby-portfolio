import React from 'react'
import styled from 'styled-components'
import {Button} from '../Button'

const Section = styled.div`
  width:100%;
  height:100%;
  // padding:2rem 0rem;
`;

const Container = styled.div`
  padding:2rem calc((100vw - 1300px) / 2);
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:800px;

  @media screen and (max-width:768px){
    grid-template-columns:1fr;
    grid-template-rows:auto;
  }
`;

const ColumnLeft = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  line-height:1.4;
  padding:1rem 2rem;
  order:${({reverse}) => (reverse ? '1' :'2')};

  h1{
    margin-bottom:1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p{
    margin-bottom:2rem;
  }
  @media screen and (max-width:768px){
    order:${({reverse}) => (reverse ? '2' :'1')};
    justify-content:flex-start;
  }
`
const ColumnRight = styled.div`
  padding:1rem 2rem;
  order:${({reverse}) => (reverse ? '2' :'1')};
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
  overflow:hidden;
  text-align: center;

  @media screen and (max-width:768px){
    order:${({reverse}) => (reverse ? '1' :'2')};
  }
  img{
    width:auto;
    max-height:100%;
    display:block;

    @media screen and (max-width:768px){
      width:auto;
      max-height:400px;
    }
  }
`
const Tools = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:2rem;
`
const ToolIcon = styled.img`
  width:30px;
  height: 30px;
  margin-right:5px;
`



const ProjectsSection = ({link,tools,heading, paragraphTwo,paragraphOne, buttonLabel, reverse, image}) => {
  return (
    <Section>
      <Container>

      <ColumnLeft>
        <h1>{heading}</h1>
        <Tools>
        {tools.map((item, index) =>{
          return(
          <ToolIcon key={index} src={item} />
          )
        })}
        </Tools>
        <p>{paragraphOne}</p>
        <p>{paragraphTwo}</p>
        <Button to={link} target="_blank" primary="true" round="true">{buttonLabel}</Button>
      </ColumnLeft>

      <ColumnRight reverse={reverse}>
      <img src={image} alt="" />
      </ColumnRight>

      </Container>
    </Section>
  )
}

export default ProjectsSection
