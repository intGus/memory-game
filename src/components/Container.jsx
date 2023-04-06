import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1.50rem;
  margin: 0;
  padding: 0;
  width: 95vw;

  
  
`
export default function Container ({ children }) {
  return (
    <StyledGrid>
      {children}
    </StyledGrid>
  )
}