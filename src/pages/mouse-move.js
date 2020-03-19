import React, { useState, useRef, useCallback } from 'react'
import './mouse-move.css'
import useMouseMove from '../hooks/useMouseMove'

const MouseMove = () => {
  // const [coords, setCoords] = useState({ x: 0, y: 0 })

  const mouseBoxRef = useRef()
  const coords = useMouseMove(mouseBoxRef.current)

  // const handleMouseMove = useCallback((e) => {
  //   setCoords({ x: e.clientX, y: e.clientY })
  // }, [setCoords])

  // useEventListener('mousemove', handleMouseMove, mouseBoxRef.current)

  return (
    <>
      <div>X: {coords.x}, Y: {coords.y}</div>
      <div className='mouse-box' ref={mouseBoxRef} />
    </>
  )
}

export default MouseMove
