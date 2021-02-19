import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
  background: ${({primary}) => (primary ? '#f26a2e' : '#448A91')};
  white-space:nowrap;
  padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
  fonnt-size: ${({big}) => (big ? '20px' : '16px')};
  color:#fff;
  outline:none;
  border:none;
  min-width:100px;
  text-decoration:none;
  transition:0.3s !important;
  border-radius: ${({round}) => (round ? '50px' : 'none')};
  box-shadow: 2px 5px 20px #164553;
  cursor:pointer;

  &:hover{
    background: ${({primary}) => (primary ? '#448A91' : '#f26a2e')};
    transform:translateY(-2px);
  }
`
