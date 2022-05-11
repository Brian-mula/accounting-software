<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import planetChartData from '~/dummydata/chartData'
export default {
  data () {
    return {
      planetChartData
    }
  },
  mounted () {
    const ctx = document.getElementById('planet-chart')
    // eslint-disable-next-line no-new
    new Chart(ctx, this.planetChartData)
  }
}
</script>

<style>

</style>
