<template>
  <nav
    class="bg-gray-700 border-gray-700 px-2 sm:px-4 py-2.5 dark:bg-gray-700"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <div class="hidden relative md:block mr-auto">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <span class="las la-search" />
        </div>
        <input
          type="text"
          class="block p-2 pl-10 w-full text-gray-50 bg-gray-700 rounded-lg border border-gray-300 sm:text-sm focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search..."
        >
      </div>
      <div class="ml-auto flex">
        <!-- here goes the user profile -->
        <nuxt-link
          to="/notificationPage"
          class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-4"
        >
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </nuxt-link>
        <img
          src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg"
          alt=""
          class="h-8 w-8 rounded-full"
        >
        <!-- user profile -->
        <!-- dummy user -->

        <!-- dummy user -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      /* eslint-disable */
      isOpen: false,
    };
  },
};
</script>

<style></style>
