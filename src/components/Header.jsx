import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-height: 60px;
  background-color: #D3D3D3;
  margin: 0;
  width: 100vw;
`

export default function Header({ score, highScore }) {
  return (
    <StyledHeader>
      <h4>
        Score: {score}
      </h4>
      <h4>
        Highest Score: {highScore}
      </h4>    
    </StyledHeader>
  );
}