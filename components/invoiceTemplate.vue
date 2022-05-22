<template>
  <div>
    <canvas id="invoice-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import InvoiceData from '~/dummydata/invoiceChart'
export default {
  data () {
    return {
      InvoiceData
    }
  },
  mounted () {
    const ctx = document.getElementById('invoice-chart')
    // eslint-disable-next-line no-new
    new Chart(ctx, this.InvoiceData)
  }
}
</script>

<style>

</style>
