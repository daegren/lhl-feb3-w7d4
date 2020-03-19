import { useEffect, useRef } from 'react'

const useInterval = (callback, timeout) => {
  const callbackRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    console.log('setting up interval')
    const timer = setInterval(() => {
      console.log('interval triggered')
      callbackRef.current()
    }, timeout)

    return () => {
      console.log('interval cleared')
      clearInterval(timer)
    }
  }, [timeout])
}

export default useInterval
