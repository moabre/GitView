import React from 'react'
import logo from '../../../Assets/Mark.svg'
import Particles from 'react-tsparticles'
import ParticleOptions from '../UserComponents/styles/ErrorParticle'

const Error = ({ error }) => {
  return (
    <div className='error'>
      <Particles id='tsparticles' options={ParticleOptions} />
      <img src={logo} alt='github logo' className='error__img' />
      <h1 className='error__title'>GitView</h1>

      {error && (
        <div className='error__body'>
          {error.type === 400 ? (
            <p>User has no repos</p>
          ) : error.type === 404 ? (
            <p>User not found!</p>
          ) : (
            <p>Something went wrong. Try again later!</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Error
