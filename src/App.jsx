import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import { useEffect } from 'react'

function App() {
  const [score, setScore] = useState({
    currentScore: 0,
    highScore: 0,
  })
  const [clickedCards, setClickedCards] = useState([])
  const [shuffledArray, setShuffledArray] = useState([ 
    [1, "blue"], [2, "yellow"], [3,"green"], [4, "red"] ,[5,"AntiqueWhite"], [6, "brown"],[7, "blueviolet"], [8, "Azure"]
  ])

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

  function handleClick(number) {
    if (!clickedCards.includes(number)) {
      setClickedCards([...clickedCards, number])
      updateCurrentScore()
      return
    }
    setClickedCards([])
    resetScore()
  }

  useEffect(() => {
    setShuffledArray([...shuffledArray].sort((a, b) => 0.5 - Math.random()));
  }, [clickedCards])

  const cards = shuffledArray.map((item) =>
    <Card key={item[0].toString()} number={item[0]} color={item[1]} click={handleClick} />
  )

  return (
    <div className="App">
      <div>Score: {score.currentScore}</div>
      <div>Best Score: {score.highScore}</div>
      <Container>
        {cards}
      </Container>
    </div>
  )
}

export default App
