import Chart from 'chart.js'
import FontColors from '../../Utils/FontColors'
const { fonts } = FontColors

const buildAxes = (scale) => {
  const axes = {
    xAxes: [
      {
        ticks: {
          fontFamily: fonts.inter,
          fonSize: 14,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontFamily: fonts.inter,
          fontSize: 14,
        },
      },
    ],
  }

  return scale ? axes : null
}
const ConstructCharts = (config) => {}

export default ConstructCharts
