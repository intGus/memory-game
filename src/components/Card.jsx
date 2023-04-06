import styled from 'styled-components'
const images = Object.values(import.meta.glob('../assets/images/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.color ? props.color : "#79e0ff"} ;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  height: 100%;
  width: 100%;
  cursor: pointer;
`
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export default function Card (props) {
  return (
    <StyledCard color={props.color} onClick={()=>props.click(props.number)}>
      <StyledImg src={images[props.number-1]} />
      This is card # {props.number}
    </StyledCard>
  )
}