import React, { useRef } from 'react'
import './mouse-move.css'
import useMouseMove from '../hooks/useMouseMove'

const MouseMove = () => {
  const mouseBoxRef = useRef()
  const coords = useMouseMove(mouseBoxRef.current)

  return (
    <>
      <div>X: {coords.x}, Y: {coords.y}</div>
      <div className='mouse-box' ref={mouseBoxRef} />
    </>
  )
}

export default MouseMove
