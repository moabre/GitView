import React from 'react'
import { ArrowLeftIcon } from '@primer/octicons-react'
import logo from '../../../Assets/Mark.svg'
import '../UserComponents/styles/BackArrow.scss'

function BackArrow() {
  const returnHome = () => {
    console.log('here')
    window.location.href = `/`
  }
  const gitProfile = () => {}
  return (
    <div className='back'>
      <button onClick={() => returnHome()} className='back__button'>
        <ArrowLeftIcon size='medium' className='back__arrow' />
      </button>
      <a
        className='back__link'
        href='https://github.com/moabre/GitView'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='View source on GitHub'
      >
        <img src={logo} alt='git logo' className='back__img' />
      </a>
    </div>
  )
}

export default BackArrow
