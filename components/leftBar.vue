<template>
  <div>
    <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
    <div class="bg-gray-700 rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-700">
      <h3 class="p-4 text-gray-50 mt-2">Payables</h3>
      <div
        class="mx-4 my-4 flex flex-row justify-between px-2 items-center bg-gray-700 rounded-lg border shadow-md hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div
          class="h-8 w-8 rounded-lg bg-gray-800 flex justify-center items-center"
        >
          <span class="text-gray-50 las la-desktop" />
        </div>
        <div class="flex flex-col">
          <div>
            <span class="text-gray-50">Computer Check</span>
          </div>
          <div>
            <span class="text-gray-50 text-sm">Ksh.20000</span>
          </div>
        </div>
        <div>
          <span class="text-gray-50 las la-angle-right" />
        </div>
      </div>
      <!-- funds transfer -->
      <div
        class="mx-4 my-4 flex flex-row justify-between px-2 items-center bg-gray-700 rounded-lg border shadow-md hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div
          class="h-8 w-8 rounded-lg bg-gray-800 flex justify-center items-center"
        >
          <span class="text-gray-50 las la-money-bill" />
        </div>
        <div class="flex flex-col">
          <div>
            <span class="text-gray-50">Funds Transfer</span>
          </div>
          <div>
            <span class="text-gray-50 text-sm">Ksh.20000</span>
          </div>
        </div>
        <div>
          <span class="text-gray-50 las la-angle-right" />
        </div>
      </div>
      <!-- bank draft -->
      <div
        class="mx-4 my-4 flex flex-row justify-between px-2 items-center bg-gray-700 rounded-lg border shadow-md hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div
          class="h-8 w-8 rounded-lg bg-gray-800 flex justify-center items-center"
        >
          <span class="text-gray-50 las la-warehouse" />
        </div>
        <div class="flex flex-col">
          <div>
            <span class="text-gray-50">Bank draft</span>
          </div>
          <div>
            <span class="text-gray-50 text-sm">Ksh.20000</span>
          </div>
        </div>
        <div>
          <span class="text-gray-50 las la-angle-right" />
        </div>
      </div>
    </div>
    <div class="mt-3 bg-gray-700 rounded-lg border shadow-md">
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      <h3 class="p-4 text-gray-50 mt-2">Indicators</h3>
      <div class="relative overflow-x-auto shadow-md">
        <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400">
          <thead class="text-xs text-gray-100 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <th scope="col" class="px-6 py-3">Year</th>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <th scope="col" class="px-6 py-3">Debts</th>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <th scope="col" class="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in indicatorData" :key="data.year" class="bg-gray-700 border-b dark:bg-gray-700  text-gray-100 dark:border-gray-700">
              <td class="px-6 py-4">
                {{ data.year }}</td>
              <td class="px-6 py-4">
                {{ data.debt }}</td>
              <td class="px-6 py-4">
                <span class="las la-arrow-down" />
              </td>
            </tr>
            <!-- dummy data -->
            <!-- dummy data -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import indicatorData from '~/dummydata/indicatorData'
export default {
  data () {
    return {
      indicatorData
    }
  }
}
</script>

<style></style>
