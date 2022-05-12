<template>
  <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
  <div class="">
    <div class="text-gray-50">
      <div class="mb-3 bg-gray-700 border border-gray-100 my-5 mx-5">
        <h3 class="text-gray-50 py-5 px-5">Stock Summary</h3>
        <h4 class="text-gray-100 text-lg py-5 px-5">
          Opening Capital as at <br />
          27/3/2021: <span class="text-xl">Ksh. 13,000,000</span>
        </h4>
      </div>

      <div class="bg-gray-700 mt-4 mb-4 mx-4 border border-gray-100 my-5 mx-5">
        <div class="relative overflow-x-auto shadow-md">
          <table
            class="w-full text-sm text-left text-gray-700 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-100 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                <th scope="col" class="px-6 py-3">Date</th>
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                <th scope="col" class="px-6 py-3">Withdrawals</th>
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                <th scope="col" class="px-6 py-3">Deposit</th>
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                <th scope="col" class="px-6 py-3">Transaction</th>
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                <th scope="col" class="px-6 py-3">Status</th>
                <th scope="col" class="px-6 py-3">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="capital in capitalSummary"
                :key="capital.id"
                class="bg-gray-700 border-b dark:bg-gray-700 text-gray-100 dark:border-gray-700"
              >
                <td class="px-6 py-4">
                  {{ capital.date }}
                </td>
                <td class="px-6 py-4">Ksh. {{ capital.withdrawals }}</td>
                <td class="px-6 py-4">
                  {{ capital.deposit }}
                </td>
                <td class="px-6 py-4">
                  {{ capital.transaction }}
                </td>
                <td class="px-6 py-4">
                  <span class="las la-arrow-up"></span>
                </td>
                <td class="px-6 py-4">Ksh. {{ capital.balance }}</td>
              </tr>
              <!-- dummy data -->
              <!-- dummy data -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import capitalSummary from '~/dummydata/capitalSummary'
export default {
  data () {
    return {
      capitalSummary
    }
  }
}
</script>

<style></style>
