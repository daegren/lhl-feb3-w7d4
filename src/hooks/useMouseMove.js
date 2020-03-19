import { useState, useCallback } from 'react'
import useEventListener from './useEventListener'

const useMouseMove = (element = window) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handler = useCallback((e) => {
    setCoords({ x: e.clientX, y: e.clientY })
  }, [setCoords])

  useEventListener('mousemove', handler, element)

  return coords
}

export default useMouseMove
