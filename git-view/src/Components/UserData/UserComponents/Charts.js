import React, { useState, useEffect } from 'react'
import ConstructCharts from '../UserComponents/ConstructChart'
import { languageColors, backgroundColor, borderColor } from '../../Utils'
import { RepoIcon } from '@primer/octicons-react'
import './styles/Charts.scss'

function Charts({ langData, repoData }) {
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
      const scale = true
      const legend = false
      const config = {
        ctx,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        scale,
        legend,
      }
      ConstructCharts(config)
    }
  }
  // creating the code block for most used languages

  // creating state to check for errors
  const [chartLangData, setChartLangData] = useState(null)

  //function to render the language piechart
  const createLangChart = () => {
    const ctx = document.getElementById('langChart')
    const labels = langData.map((lang) => lang.label)
    const data = langData.map((lang) => lang.value)

    setChartLangData(data)

    if (data.length > 0) {
      const chartType = 'pie'
      const scale = false
      const legend = true
      // converting color from the langData to alpha hex values
      const backgroundColor = langData.map(
        ({ color }) =>
          `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`
      )
      const borderColor = langData.map((lang) => `${lang.color}`)
      console.log(backgroundColor)
      const config = {
        ctx,
        chartType,
        data,
        labels,
        scale,
        legend,
        borderColor,
        backgroundColor,
      }
      ConstructCharts(config)
    }
  }
  // creating the code block for most stars per language

  // creating state to check for errors
  const [starLangData, setStarLangData] = useState(null)

  //function to render the most stared language piechart
  const starLang = () => {
    const ctx = document.getElementById('starLangChart')
    // getting own repos and starred
    const filteredRepo = repoData.filter(
      (repo) => !repo.fork && repo.stargazers_count > 0
    )
    // getting all the unique languages from our filtered data
    const nullLang = filteredRepo.filter((repo) => repo.language === 'HTML')
    const uniqueLang = new Set(filteredRepo.map((repo) => repo.language))
    //creating the labels for the donut chart
    const labels = [...uniqueLang].filter((l) => l)
    //creating the data points for the most stars per language
    const data = labels.map((l) => {
      // filter repo by language data
      const repos = filteredRepo.filter((repo) => repo.language === l)
      // place star count in a new array for language
      const starData = repos.map((r) => r.stargazers_count)
      // sum total value of stars of the specific language
      const starSum = starData.reduce((a, b) => a + b, 0)
      //return value
      return starSum
    })
    setStarLangData(data)

    if (data.length > 0) {
      const chartType = 'doughnut'
      const scale = false
      const legend = true
      // get colors for each of the languages
      const borderColor = labels.map((l) => languageColors[l])
      // change color values to alpha hex with 70%
      const backgroundColor = borderColor.map((color) => `${color}B3`)
      const config = {
        ctx,
        chartType,
        data,
        labels,
        scale,
        legend,
        borderColor,
        backgroundColor,
      }
      ConstructCharts(config)
    }
  }
  // chartsize and error boolean
  const chartSize = 300
  const languageError = !(chartLangData && chartLangData.length > 0)
  const starError = !(starData && starData.length > 0)
  const starLangError = !(starLangData && starLangData.length > 0)

  useEffect(() => {
    if (langData.length && repoData.length) {
      starChart()
      createLangChart()
      starLang()
    }
  }, [])

  return (
    <div className='chartmain'>
      <div className='chartwrapper'>
        <div className='chart'>
          <header>
            <h2>Most Starred</h2>
          </header>
          <div className='chart__container'>
            {starError && <p>No data</p>}
            <canvas id='starChart' width={chartSize} height={chartSize} />
          </div>
        </div>
        <div className='chart'>
          <header>
            <h2>Languages Used</h2>
          </header>
          <div className='chart__container'>
            {languageError && <p>No data</p>}
            <canvas id='langChart' width={chartSize} height={chartSize} />
          </div>
        </div>
        <div className='chart'>
          <header>
            <h2>Stars per Language</h2>
          </header>
          <div className='chart__container'>
            {starLangError && <p>No data</p>}
            <canvas id='starLangChart' width={chartSize} height={chartSize} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts
