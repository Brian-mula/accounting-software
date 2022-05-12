<template>
  <div class="w-64 bg-gray-700 h-screen">
    <div class="overflow-y-auto py-4 px-3 dark:bg-gray-800 ">
      <a href="#" class="flex items-center pl-2.5 mb-8 pt-3">
        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/11/eco-5465429__340.png" class="h-6 mr-3 sm:h-7 rounded-full" alt="Flowbite Logo">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TAQUANA</span>
      </a>
      <ul class="space-y-2">
        <li>
          <nuxt-link to="/" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
            <span class="las la-border-all" />
            <span class="ml-3">Dashboard</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/employeesPage" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
            <span class="las la-border-all" />
            <span class="ml-3">Employees</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/orderHistory" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
            <span class="las la-history" />
            <span class="ml-3">Order History</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/offersPage" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
            <span class="las la-gift" />
            <span class="ml-3">Offers</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/productsPage" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
            <span class="las la-layer-group" />
            <span class="ml-3">Products</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/storePage" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
            <span class="las la-warehouse" />
            <span class="ml-3">Stock</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/messagePage" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
            <span class="las la-sms" />
            <span class="ml-3">Messages</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="settingsPages" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-blue-900 dark:hover:bg-gray-700">
            <span class="las la-cog" />
            <span class="ml-3">Settings</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
