import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  width: 400px;
`
export default function Container ({ children }) {
  return (
    <StyledGrid>
      {children}
    </StyledGrid>
  )
}