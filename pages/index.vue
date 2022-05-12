<template>
  <!-- <Tutorial /> -->
  <div>
    <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
    <h3 class="text-lg p-4 text-white">
      Welcome Mulati! You are exploring financial dashboard
    </h3>
    <div class="flex my-6">
      <div class="mx-8">
        <div class="bg-gray-700 flex justify-center items-center">
          <div
            class="p-6 max-w-md w-48 rounded-l-lg border border-gray-500 shadow-md dark:bg-gray-700 dark:border-gray-700"
          >
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white"
            >
              Revenue
            </h5>

            <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
              ksh.3,000,000
            </p>
          </div>
          <!-- expense item -->
          <div
            class="p-6 max-w-sm w-48 border border-gray-500 shadow-md dark:bg-gray-700 dark:border-gray-700"
          >
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white"
            >
              Expenses
            </h5>

            <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
              ksh.2,000,000
            </p>
          </div>
          <!-- expense -->
          <!-- debts item -->
          <div
            class="p-6 max-w-sm w-48 border border-gray-500 shadow-md dark:bg-gray-700 dark:border-gray-700"
          >
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white"
            >
              Debts
            </h5>

            <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
              ksh.4,000,000
            </p>
          </div>
          <!-- debts item -->
          <!-- cash at hand item -->
          <div
            class="p-6 max-w-sm w-48 rounded-r-lg border border-gray-500 shadow-md dark:bg-gray-700 dark:border-gray-700"
          >
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white"
            >
              Cash at hand
            </h5>

            <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
              ksh.9,000,000
            </p>
          </div>
          <!-- cash at hand -->
        </div>
        <div class="flex flex-col bg-gray-700 mt-6">
          <div class="bg-gray-700 flex justify-between">
            <div class="p-3">
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <p class="text-gray-100 text-base">Analytics</p>
            </div>
            <div class="p-3 flex justify-between">
              <div
                class="mx-3 form-check form-check-inline justify-items-center"
              >
                <input
                  id="inlineRadio1"
                  class="form-check-input form-check-input appearance-none rounded-full h-3 w-3 border border-gray-300 bg-green-600 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  value="option1"
                >
                <label
                  class="form-check-label inline-block text-gray-100"
                  for="inlineRadio10"
                >Revenue</label>
              </div>
              <div
                class="mx-3 form-check form-check-inline justify-items-center"
              >
                <input
                  id="inlineRadio1"
                  class="form-check-input form-check-input appearance-none rounded-full h-3 w-3 border border-gray-300 bg-red-600 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  value="option1"
                >
                <label
                  class="form-check-label inline-block text-gray-100"
                  for="inlineRadio10"
                >Expenses</label>
              </div>
              <div
                class="mx-3 form-check form-check-inline justify-items-center"
              >
                <input
                  id="inlineRadio1"
                  class="form-check-input form-check-input appearance-none rounded-full h-3 w-3 border border-gray-300 bg-blue-600 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  value="option1"
                >
                <label
                  class="form-check-label inline-block text-gray-100"
                  for="inlineRadio10"
                >Debts</label>
              </div>
            </div>
            <div class="p-3">
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <p class="text-gray-100 text-base">Last 7 days</p>
            </div>
          </div>
          <!-- here goes the chart module -->
          <GraphTemplate />
        <!-- chart -->
        </div>
        <!-- here goes transaction summary -->
        <TransactionSummary />
      </div>
      <div class="w-64 ml-auto">
        <div class="  ">
        <LeftBar />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionSummary from '../components/transactionSummary.vue'
import GraphTemplate from '~/components/graphTemplate.vue'
import LeftBar from '~/components/leftBar.vue'
export default {
  name: 'IndexPage',
  components: { GraphTemplate, TransactionSummary, LeftBar }
}
</script>
