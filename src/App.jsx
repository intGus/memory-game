import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [score, setScore] = useState({
    currentScore: 0,
    highScore: 0,
  })

  const [clickedCards, setClickedCards] = useState([])

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

  return (
    <div className="App">
      <div>Score: {score.currentScore}</div>
      <div>Best Score: {score.highScore}</div>
      <div className='container'>
        <Card number="1" click={handleClick} />
        <Card number="2" click={handleClick} />
        <Card number="3" click={handleClick} />
        <Card number="4" click={handleClick} />
        <Card number="5" click={handleClick} />
        <Card number="6" click={handleClick} />
        <Card number="7" click={handleClick} />
        <Card number="8" click={handleClick} />
      </div>
    </div>
  )
}

export default App
