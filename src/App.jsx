import { useState } from 'react'
import Modal from 'react-modal'
import { useEffect } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import ModalMsg from './components/ModalMsg'


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

  return (
    <div className="App">
      <Modal isOpen={modalIsOpen} onRequestClose={()=> closeModal()}>
        <div onClick={closeModal}>
          <ModalMsg />
        </div>
      </Modal>
      <div>Score: {score.currentScore}</div>
      <div>Best Score: {score.highScore}</div>
      <Container>
        {cards}
      </Container>
    </div>
  )
}

export default App
