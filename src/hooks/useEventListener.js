import { useRef, useEffect } from 'react'

const useEventListener = (eventName, callback, element = window) => {
  const callbackRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const handler = (event) => {
      callbackRef.current(event)
    }

    element.addEventListener(eventName, handler)

    return () => {
      element.removeEventListener(eventName, handler)
    }
  }, [element, eventName])
}

export default useEventListener
