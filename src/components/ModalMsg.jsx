import styled from 'styled-components'

export default function ModalMsg({ status }) {
  const initialMessage = <div>Welcome! Click on each image to get points, but don't click more than once.<br/>
                        <h5>Images from: <a href='https://pixabay.com/'>https://pixabay.com/</a></h5></div>

  const winnerMessage = <div>You have a great memory! Click anywhere to start over</div>

  console.log(status)

  return(
    <>
      {status ? winnerMessage : initialMessage }
    </>
  )
}