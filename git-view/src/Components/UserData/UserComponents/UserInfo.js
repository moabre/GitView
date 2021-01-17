import React from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  LocationIcon,
} from '@primer/octicons-react'
import './styles/UserInfo.scss'

function UserInfo({ userData }) {
  return (
    <section className='header'>
      {userData && (
        <div className='userInfo'>
          {userData.avatar_url && (
            <div className='avatar'>
              {' '}
              <img
                src={userData.avatar_url}
                alt='users git avatar'
                className='avatar__image'
              />
            </div>
          )}
          {userData.name && <h1 className='userInfo__name'>{userData.name}</h1>}
          {userData.login && (
            <h2 className='userInfo__title'>
              <a
                href={userData.html_url}
                className='userInfo__link'
                target='_blank'
              >
                @{userData.login}
              </a>
            </h2>
          )}
          <div className='keydetails'>
            {userData.company && (
              <span className='keydetails__info'>
                <BriefcaseIcon size='small' className='keydetails__img' />
                {userData.company}
              </span>
            )}
            {userData.location && (
              <span className='keydetails__info'>
                <LocationIcon size='small' className='keydetails__img' />
                {userData.location}
              </span>
            )}
            {userData.created_at && (
              <span className='keydetails__info'>
                <CalendarIcon size='small' className='keydetails__img' />
                Joined{' '}
                {new Date(userData.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            )}
          </div>

          <div className='stats'>
            <div className='stats__item'>
              <span className='stats__num'>{userData.public_repos}</span>
              <span className='stats__label'>Repositories</span>
            </div>
            <div className='stats__item'>
              <span className='stats__num'>{userData.followers}</span>
              <span className='stats__label'>Followers</span>
            </div>
            <div className='stats__item'>
              <span className='stats__num'>{userData.following}</span>
              <span className='stats__label'>Following</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default UserInfo
