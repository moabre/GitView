import React, { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
import './styles/Repos.scss'
import {
  RepoIcon,
  StarIcon,
  RepoForkedIcon,
  TriangleDownIcon,
} from '@primer/octicons-react'
import { languageColors } from '../../Utils'

const Repos = ({ repoData }) => {
  //setting the state for the repo, repotype, and boolean for conditional rendering
  const [dropDown, setDropDown] = useState(false)
  const [repo, setRepo] = useState([])
  const [repoType, setRepoType] = useState('stars')

  // function to filter
  const filterRepos = (filter) => {
    //number of repos to filter for
    const LIMIT = 8

    //setting out what each filter equals to for data from api
    const type = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size',
    }
    //setting the sort type specific to the one passed in
    const sortType = type[filter]
    //sorted data
    const sortedData = repoData
      .filter((r) => !r.fork)
      .sort((a, b) => b[sortType] - a[sortType])
      .slice(0, LIMIT)
    //setting the sorted data to repo
    setRepo(sortedData)
  }
  useEffect(() => {
    if (repoData.length) {
      filterRepos()
    }
  }, [])
  useEffect(() => {
    filterRepos(repoType)
  }, [repoType])

  console.log(repo)

  const toggleDropDown = () => {
    setDropDown(!dropDown)
  }

  const diffRepoSort = (sortType) => {
    setRepoType(sortType)
    toggleDropDown()
  }

  const sortTypes = ['stars', 'forks', 'size']

  return (
    <section className='repos'>
      <div className='repocontainer'>
        <header className='repocontainer__header'>
          <h2>Top Repos</h2>
          <div className='dropdown'>
            <span className='dropdown__label'>by</span>
            <div className='dropwrapper'>
              <button
                className={dropDown ? 'button__active' : 'dropdown__button'}
                onClick={() => toggleDropDown()}
              >
                {repoType}
                <TriangleDownIcon
                  size='small'
                  className={dropDown ? 'button__svg' : 'dropdown__svg'}
                />
              </button>
              <ul className={dropDown ? 'list__active' : 'dropdown__list'}>
                {sortTypes.map((type, i) => (
                  <li className='dropdown__list-item' key={i}>
                    <button
                      className='dropdown__list-item__button'
                      onClick={() => diffRepoSort(type)}
                    >
                      {type}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>
        <div className='repo-list'>
          {repo.length > 0 ? (
            <FlipMove typeName='ul'>
              {repo.map((r) => {
                return (
                  <li key={r.id}>
                    <a
                      href={r.html_url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='repo'
                    >
                      <div className='repo__top'>
                        <div className='repo__name'>
                          <RepoForkedIcon size='small' />
                          <h3>{r.name}</h3>
                        </div>
                        <p>{r.description}</p>
                      </div>
                      <div className='repo__stats'>
                        <div className='repo__stats--left'>
                          <span>
                            <div
                              className='language'
                              style={{
                                backgroundColor: languageColors[r.language],
                              }}
                            />
                            {r.language}
                          </span>
                          <span>
                            <StarIcon size='small' />
                            {r.stargazers_count}
                          </span>
                          <span>
                            <RepoForkedIcon size='small' />
                            {r.forks}
                          </span>
                        </div>
                        <div className='repo__stats--right'>
                          <span>{r.size} KB</span>
                        </div>
                      </div>
                    </a>
                  </li>
                )
              })}
            </FlipMove>
          ) : (
            <p>No available repositories!</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Repos
