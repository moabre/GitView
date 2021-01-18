import React, { useState, useEffect } from 'react'
import ConstructCharts from '../UserComponents/ConstructChart'
import { languageColors, backgroundColor, borderColor } from '../../Utils'

function Charts({ langData, repoData }) {
  console.log(langData)
  console.log(repoData)

  //Creating the most star chart block of code

  //creating state to check for errors
  const [starData, setStarData] = useState(null)

  //function to render star chart
  const starChart = () => {
    const ctx = document.getElementById('starChart')
    const LIMIT = 5
    const sortProperty = 'stargazers_count'
    const getMostStarred = repoData
      // filtering for all repos the user didn't fork
      .filter((repo) => !repo.fork)
      // sorting the filtered repos by the most stars
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      // filtering the new array for the number of repos needed to appear
      .slice(0, LIMIT)
    // getting the names of the top 5 repos in an array
    const labels = getMostStarred.map((repo) => repo.name)
    // getting the star count in an array
    const data = getMostStarred.map((repo) => repo[sortProperty])
    // setting the starData to ensure no errors in rendering cause complete shut down of program
    setStarData(data)

    if (data.length > 0) {
      const chartType = 'bar'
      const scales = true
      const legend = false
      const config = {
        ctx,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        scales,
        legend,
      }
    }
  }
  useEffect(() => {
    starChart()
  }, [])

  return <div></div>
}

export default Charts
