
export const planetChartData = {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [100, 90, 80, 60, 30, 50, 70, 75, 80, 85, 90, 100],
        backgroundColor: 'rgba(54,73,93,.5)',
        borderColor: '#16A34A',
        borderWidth: 3
      },
      {
        label: 'Expenses',
        data: [20, 40, 50, 100, 90, 70, 60, 50, 45, 30, 20, 10],
        backgroundColor: 'rgba(71, 183,132,.5)',
        borderColor: '#DC2626',
        borderWidth: 3
      },
      {
        label: 'Debts',
        data: [10, 30, 50, 60, 80, 70, 60, 50, 60, 80, 85, 90],
        backgroundColor: 'rgba(71, 183,132,.5)',
        borderColor: '#2563EB',
        borderWidth: 3
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25

          }
        }
      ]
    }
  }
}

export default planetChartData
