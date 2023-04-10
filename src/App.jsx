import { useState } from 'react'
import Modal from 'react-modal'
import { useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Container from './components/Container'
import ModalMsg from './components/ModalMsg'
import Footer from './components/Footer'


function App() {

  // Array generator for card identifiers
  function range(n) {
    return Array.from(Array(n),(x,i)=>i+1)
  }

    // State initialization
  const [score, setScore] = useState({
    currentScore: 0,
    highScore: 0,
  })
  const [clickedCards, setClickedCards] = useState([])
  const [shuffledArray, setShuffledArray] = useState(range(8))
  const [modalIsOpen, setModalIsOpen] = useState(true);

  // State setters
  function toggleModal() {
    setModalIsOpen((prevState) => !prevState)
    }

  function updateCurrentScore() {
    setScore(prevCurrentScore => {
      return {
        ...prevCurrentScore,
        currentScore: prevCurrentScore.currentScore + 1
      }
    })
  }

  function resetScore() {
    setScore(prevScore => {
      return {
        currentScore: 0,
        highScore: prevScore.highScore >= score.currentScore ? prevScore.highScore : score.currentScore
      }
    })
  }

  // Handlers
  function resetApp() {
    setClickedCards([])
      resetScore()
      setShuffledArray(range(8))
  }

  function handleClick(number) {
    if (clickedCards.includes(number)) {
      resetApp()
      return
    }
    setClickedCards([...clickedCards, number])
    updateCurrentScore()
  }

  // Effects
  useEffect(() => {
    setShuffledArray([...shuffledArray].sort(() => 0.5 - Math.random()));
  }, [clickedCards])

  useEffect(() => {
    if (clickedCards.length === shuffledArray.length) {
      setShuffledArray(range(clickedCards.length + 4))
      setClickedCards([])
    } else if (score.currentScore === 140) { // winner
      toggleModal()
    }
  }, [score])

  // Load shuffled cards into components
  const cards = shuffledArray.map((item) =>
    <Card key={item.toString()} number={item} click={handleClick} />
  )

  // Style for the Modal component
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#D3D3D3'      
    }
  };

  return (
    <div className="App">
      <Header score={score.currentScore} highScore={score.highScore} />
      <Modal style={customStyles} isOpen={modalIsOpen} onAfterClose={(score.currentScore === 140) && resetApp} onRequestClose={()=> toggleModal()}>
        <div onClick={toggleModal}>
          <ModalMsg status={(score.currentScore === 140) && 'won'}/>
        </div>
      </Modal>
      <Container>
        {cards}
      </Container>
      <Footer />
    </div>
  )
}

export default App
