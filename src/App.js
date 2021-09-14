//import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'

import Container from './components/container'

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    background-color: #F79489;
  }
`

const App = () => {
  /*const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [started, setStarted] = useState(false)
  const [paused, setPaused] = useState(false)

  const handleStart = () => {
    setStarted(true)
    setMinutes(previousMinute => previousMinute - 1)
    setSeconds(59)
  }

  const handlePause = () => {
    setPaused(true)
    setStarted(false)
  }

  useEffect(() => {
    setMinutes(10)
    setSeconds(0)
  }, [])

  useEffect(() => {
    if(started) {
      const id = setInterval(() => {
        setSeconds((previousState) => {
          if(previousState === 0) {
            setMinutes(previousMinute => previousMinute - 1)
            return 59
          }          
          return previousState - 1
        })
      }, 1000)

      return () => clearInterval(id)
    }
  }, [started])*/

  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;