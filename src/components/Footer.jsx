import styled from 'styled-components';
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 60px;
  background-color: #D3D3D3;
  width: 100vw;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; 
`

export default function Footer() {
  return(
    <StyledFooter>
      intGus || Copyright {new Date().getFullYear()}
      <a href="https://github.com/intgus">
        <FontAwesomeIcon icon={faGithub} style={{color: 'black', fontSize: '20px', marginLeft: '10px' }} />
      </a>
    </StyledFooter>
  );
}