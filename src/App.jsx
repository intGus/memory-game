import { useState } from 'react'
import Modal from 'react-modal'
import { useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Container from './components/Container'
import ModalMsg from './components/ModalMsg'
import Footer from './components/Footer'


function App() {
  const [score, setScore] = useState({
    currentScore: 0,
    highScore: 0,
  })
  const [clickedCards, setClickedCards] = useState([])
  const [shuffledArray, setShuffledArray] = useState(range(8))
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function displayModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  function range(n) {
    return Array.from(Array(n),(x,i)=>i+1)
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

  useEffect(() => {
    setShuffledArray([...shuffledArray].sort(() => 0.5 - Math.random()));
  }, [clickedCards])

  useEffect(() => {
    if (clickedCards.length === shuffledArray.length) {
      setShuffledArray(range(clickedCards.length + 4))
      setClickedCards([])
    } else if (score.currentScore === 140) {
      console.log('You Won')
      resetApp()
    }
  }, [score])

  const cards = shuffledArray.map((item) =>
    <Card key={item.toString()} number={item} click={handleClick} />
  )

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
      <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={()=> closeModal()}>
        <div onClick={closeModal}>
          <ModalMsg />
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
