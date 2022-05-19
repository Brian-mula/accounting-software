<template>
  <div class="">
    <div class="flex justify-between items-center my-4 mx-4 p-4 bg-gray-700">
      <div class="mt-5 md:mt-0 w-2/5">
        <form action="">
          <input id="invoice-search" type="text" name="invoice-search" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300" placeholder="Invoice search">
        </form>
      </div>

      <div class="mt-5 md:mt-0 w-2/5">
        <form action="">
          <input id="invoice-search" type="text" name="invoice-search" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300" placeholder="Client search">
        </form>
      </div>
    </div>
    <div class="flex justify-between items-center mt-2 mb-4 p-4 bg-gray-700 mx-4">
      <div class="w-60 ">
        <nuxt-link to="/sales/newInvoice" class="flex justify-center items-center flex-col p-6 max-w-sm bg-gray-600 hover:bg-gray-800 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white las la-file-invoice-dollar" />

          <p class="mb-3 font-normal text-gray-100 dark:text-gray-100">
            Create Invoice
          </p>
        </nuxt-link>
      </div>
      <div class="w-60 ">
        <nuxt-link to="/sales/manageSales" class="flex justify-center items-center flex-col p-6 max-w-sm bg-gray-600 hover:bg-gray-800 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white las la-file-invoice" />

          <p class="mb-3 font-normal text-gray-100 dark:text-gray-100">
            Invoices
          </p>
        </nuxt-link>
      </div>
      <div class="w-60 ">
        <nuxt-link to="/sales/clientsPage" class="flex justify-center items-center flex-col p-6 max-w-sm bg-gray-600 hover:bg-gray-800 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white las la-user-friends" />

          <p class="mb-3 font-normal text-gray-100 dark:text-gray-100">
            Clients
          </p>
        </nuxt-link>
      </div>
      <div class="w-60 ">
        <nuxt-link to="/sales/newClient" class="flex justify-center items-center flex-col p-6 max-w-sm bg-gray-600 hover:bg-gray-800 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white las la-user-edit" />

          <p class="mb-3 font-normal text-gray-100 dark:text-gray-100">
            New Client
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
