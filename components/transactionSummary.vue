<template>
  <div>
    <div class="flex justify-between bg-gray-700 mt-4">
      <div class="p-3">
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        <h3 class="text-gray-100 text-base">Transactions</h3>
      </div>
      <div class="flex justify-between">
        <div class="flex justify-center items-center">
          <input v-if="isSearching" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-700" type="text" placeholder="search ...">
          <span class="text-gray-100 cursor-pointer p-3 mx-2 las la-search" @click="isSearching=!isSearching" />
        </div>
        <div>
          <span class="text-gray-100 p-3 mx-2 las la-download" />
        </div>
        <div class="cursor-pointer mx-2 p-3 flex justify-between">
          <div>
            <span class="text-blue-600 text-sm mr-2">View more</span>
          </div>
          <div>
            <span class=" text-blue-600 mx-1  las la-angle-right" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="relative overflow-x-auto shadow-md">
        <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400">
          <thead class="text-xs text-gray-100 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <th scope="col" class="px-6 py-3">Name</th>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <th scope="col" class="px-6 py-3">Date</th>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <th scope="col" class="px-6 py-3">Status</th>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <th scope="col" class="px-6 py-3">Amount</th>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <th scope="col" class="px-6 py-3">Running Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in customerData" :key="customer.name" class="bg-gray-700 border-b dark:bg-gray-700  text-gray-100 dark:border-gray-700">
              <td class="px-6 py-4">{{ customer.name }}</td>
              <td class="px-6 py-4">{{ customer.date }}</td>
              <td class="px-6 py-4">{{ customer.status }}</td>
              <td class="px-6 py-4">{{ customer.amount }}</td>
              <td class="px-6 py-4">{{ customer.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import customerData from '~/dummydata/customer'
export default {
  data () {
    return {
      customerData,
      isSearching: false
    }
  }

}
</script>

<style>

</style>
