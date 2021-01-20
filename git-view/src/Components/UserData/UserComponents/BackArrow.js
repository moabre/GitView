import React from 'react'
import { ArrowLeftIcon } from '@primer/octicons-react'
import logo from '../../../Assets/Mark.svg'
import '../UserComponents/styles/BackArrow.scss'

function BackArrow() {
  const returnHome = () => {
    console.log('here')
    window.location.href = `/`
  }
  return (
    <div className='back'>
      <button onClick={() => returnHome()} className='back__button'>
        <ArrowLeftIcon size='medium' className='back__arrow' />
      </button>

      <img src={logo} alt='' className='back__img' />
    </div>
  )
}

export default BackArrow
