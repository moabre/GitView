import Chart from 'chart.js'
import { FontColors } from '../../Utils'
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

const buildLegend = (legend) => {
  const laagend = {
    position: 'right',
    labels: {
      fontFamily: fonts.inter,
    },
  }

  return legend ? laagend : null
}

const ConstructCharts = (config) => {
  const {
    ctx,
    chartType,
    labels,
    data,
    backgroundColor,
    borderColor,
    scale,
    legend,
  } = config
  return new Chart(ctx, {
    type: chartType,
    responsive: true,
    maintainAspectRati: false,
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          borderColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: buildAxes(scale),
      legend: buildLegend(legend),
      tooltips: {
        titleFontFamily: fonts.inter,
        bodyFontFamily: fonts.inter,
        cornerRadius: 3,
      },
    },
  })
}

export default ConstructCharts
