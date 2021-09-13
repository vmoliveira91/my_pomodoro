import { useEffect, useState } from 'react'

import Button from './components/button'
import Counter from './components/counter'

const App = () => {
  const [minutes, setMinutes] = useState(0)
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
  }, [started])

  return (
    <>      
      <Counter minutes={minutes} seconds={seconds}/>
      <Button text="Start" handleAction={handleStart}/>
      <Button text="Pause" handleAction={handlePause}/>
    </>
  );
}

export default App;