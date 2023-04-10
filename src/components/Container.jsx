import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  margin-top: 40px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  max-width: 900px;
  grid-gap: 1.50rem;
  width: 95%;
  padding-bottom: 2.5rem;
  @media (min-width: 901px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export default function Container ({ children }) {
  return (
    <StyledGrid>
      {children}
    </StyledGrid>
  )
}