import React, { useState } from 'react'
import Particles from 'react-tsparticles'
import ParticleOptions from './ParticleOptions'
import './Home.scss'
import logo from '../../Assets/Mark.svg'

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
    <main className='front'>
      <Particles id='tsparticles' options={ParticleOptions} />
      <img src={logo} alt='github logo' className='logo' />
      <div className='home'>
        <form onSubmit={(e) => submission(e)} className='homeform'>
          <label htmlFor='username' className='homeform__label'>
            Find Git Stats
          </label>
          <input
            type='text'
            onChange={userInput}
            className='homeform__input'
            placeholder='Enter Username'
          />
        </form>
      </div>
    </main>
  )
}

export default Home
