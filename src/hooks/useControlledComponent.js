import { useState } from 'react'

const useControlledComponent = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handler = event => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue(initialValue)
  }

  return [value, handler, reset]
}

export default useControlledComponent
