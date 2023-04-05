import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.color ? props.color : "#79e0ff"} ;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.2em;
  height: 150px;
  width: 130px;
  cursor: pointer;
`

export default function Card (props) {
  return (
    <StyledCard color={props.color} onClick={()=>props.click(props.number)}>
      This is card # {props.number}
    </StyledCard>
  )
}