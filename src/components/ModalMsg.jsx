import styled from 'styled-components'

export default function ModalMsg({ children }) {
  return(
    <>
      {children || 'No message'}
    </>
  )
}