import numeral from 'numeral'
export const InvoiceData = {
  type: 'line',
  data: {
    labels: ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sept 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022'],
    datasets: [
      {
        label: 'Total',
        data: [10000, 15500, 17600, 19000, 20000, 19000, 17000, 15000, 10000, 9000, 7000, 9000],
        backgroundColor: 'rgba(54,73,93,.5)',
        borderColor: '#16A34A',
        borderWidth: 3
      },
      {
        label: 'Paid',
        data: [2000, 2500, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000],
        backgroundColor: 'rgba(71, 183,132,.5)',
        borderColor: '#DC2626',
        borderWidth: 3
      },
      {
        label: 'Unpaid',
        data: [50000, 30000, 50000, 60000, 80000, 70000, 60000, 50000, 60000, 80000, 85000, 90000],
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
            callback: value => numeral(value).format('Ksh0,0'),
            padding: 25
          }
        }
      ]
    }
  }
}

export default InvoiceData
