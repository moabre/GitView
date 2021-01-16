import React, { useState } from 'react'

function Home() {
  const [user, setUser] = useState('')
  const userInput = (e) => {
    setUser(e.target.value)
  }
  const submission = (e) => {
    e.preventDefault()
    window.location.href = `/user/${user}`
  }
  return (
    <main>
      <form onSubmit={(e) => submission(e)}>
        <label htmlFor='username'>Git your stats</label>
        <input type='username' type='text' onChange={userInput} />
      </form>
    </main>
  )
}

export default Home
