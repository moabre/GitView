import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GhPolyGlot from 'gh-polyglot'

function UserData() {
  //setting up the state values
  const { user } = useParams()
  const [userData, setUserData] = useState(null)
  const [languageData, setLanguageData] = useState(null)
  const [repoData, setRepoData] = useState(null)
  // use state error to conditional render any issues
  const [error, setError] = useState({ active: false, type: 200 })

  // using git api to get user info
  const getUserInfo = () => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => {
        if (res.status === 403) {
          return setError({ active: true, type: 403 })
        }
        if (res.status === 404) {
          return setError({ active: true, type: 404 })
        }
        return res.json()
      })
      .then((json) => setUserData(json))
      .catch((err) => {
        setError({
          active: true,
          type: 400,
        })
      })
  }

  return <div>id : {id}</div>
}

export default UserData
