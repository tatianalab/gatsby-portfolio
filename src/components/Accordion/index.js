import React, {useState} from 'react';
import styled from 'styled-components';
import {IconContext} from 'react-icons';
import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import {accordionData} from '../../data/AccordionData'
import {motion} from 'framer-motion'



const Accordion = () => {
  const [clicked,setClicked] = useState(false)
  const toggle = index => {
    if(clicked === index){
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <IconContext.Provider value={{color:'#f26a2e', size:'25px'}}>
    <AccordionSection>
    <Container>
    {accordionData.map((item, index) => {
      return (
       <>
       <Wrap onClick={() => toggle(index)} key={index}>
        <h4>{item.question}</h4>
        <span>{clicked === index ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}</span>
        </Wrap>
        {clicked === index ? (
        <Dropdown initial={{ opacity: 0}}
              animate={{ opacity:1}}
              transition={{ duration:1}}>
        <p>{item.answer}</p>
        </Dropdown>) : null }
       </>
        )
    })}
    </Container>
    </AccordionSection>
    </IconContext.Provider>

  )
}

export default Accordion

const AccordionSection =styled.div`
  display:flex;
  flex-direction:column:
  align-items:center;
  justifiy-content:center;
  height:auto;
  width:80%;
  margin:0 auto;
`

const Container = styled.div`
  margin:0 auto;
  box-shadow: 2px 5px 20px #164553;
`

const Wrap = styled.div`
  background:transparent ;
  color:#fff;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  text-align:left;
  cursor:pointer;
  border-bottom:1px dotted #f26a2e;

  h4{
    padding:2rem;
    font-size:1rem;

  }

  span{
    margin-right:1.5rem;
  }
`

const Dropdown = styled(motion.div)`
  background:transparent;
  color:#fff;
  width:100%;
  height:auto;
  display:flex:
  flex-direction:column;
  justifiy-content:center;
  align-items:center;
  border-bottom:1px dotted #f26a2e;
  padding:2rem 1rem;

  p{
    font-size:1rem;
  }
  ul{
    list-style:square inside;
  }
`
