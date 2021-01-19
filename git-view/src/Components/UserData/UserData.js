import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GhPolyGlot from 'gh-polyglot'
import UserInfo from './UserComponents/UserInfo'
import Charts from './UserComponents/Charts'
import Repos from './UserComponents/Repos'
import Footer from './UserComponents/Footer'

function UserData() {
  //setting up the state values
  const { id } = useParams()
  const [userData, setUserData] = useState(null)
  const [languageData, setLanguageData] = useState(null)
  const [repoData, setRepoData] = useState(null)
  // use state error to conditional render any issues
  const [error, setError] = useState({ active: false, type: 200 })

  // using git api to get user info
  const getUserInfo = () => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => {
        if (res.status === 403) {
          return setError({ active: true, type: 403 })
        }
        if (res.status === 404) {
          return setError({ active: true, type: 404 })
        } else {
          return res.json()
        }
      })
      .then((json) => {
        setUserData(json)
      })
      .catch((err) => {
        setError({
          active: true,
          type: 400,
        })
      })
  }
  // using GhPolyglot to get the language details of a user
  const getLanguageInfo = () => {
    const lang = new GhPolyGlot(`${id}`)
    lang.userStats((error, response) => {
      if (error) {
        setError({ active: true, type: 400 })
      }
      setLanguageData(response)
    })
  }

  // Using git api to get repo infomation

  const getRepoInfo = () => {
    fetch(`https://api.github.com/users/${id}/repos?per_page=100`)
      .then((res) => {
        if (res.status === 403) {
          return setError({ active: true, type: 403 })
        }
        if (res.status === 404) {
          return setError({ active: true, type: 404 })
        }
        return res.json()
      })
      .then((json) => setRepoData(json))
      .catch((err) => {
        setError({ active: true, type: 200 })
      })
  }

  useEffect(() => {
    getUserInfo()
    getRepoInfo()
    getLanguageInfo()
  }, [])

  return (
    <main>
      <UserInfo userData={userData} />
      {languageData && repoData && (
        <Charts langData={languageData} repoData={repoData} />
      )}
      {repoData && <Repos repoData={repoData} />}
      <Footer />
    </main>
  )
}

export default UserData
