import React from 'react'
import useControlledComponent from '../hooks/useControlledComponent'

const Form = () => {
  const [name, setName, resetName] = useControlledComponent('')
  const [email, setEmail, resetEmail] = useControlledComponent('')

  const submitHandler = (e) => {
    e.preventDefault()

    // TODO: actually do something with the form data

    resetName()
    resetEmail()
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' value={name} onChange={setName} />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' name='email' value={email} onChange={setEmail} />
      </div>
      <div>
        <input type='submit' value='Submit Form' />
      </div>

    </form>

  )
}

export default Form
