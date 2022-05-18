<template>
  <div>
    <!-- top section -->
    <div class="flex justify-between items-center bg-gray-700 my-5 mx-4 p-4">
      <div class="flex">
        <div class="text-white px-4">
          <div class="flex justify-center">
            <div class="mb-3 cursor-pointer">
              <select
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-700 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-700 focus:border-blue-600 focus:outline-none cursor-pointer"
                aria-label="Default select example"
              >
                <option selected>
                  <span class="las la-envelope-square" />
                </option>
                <option value="1">
                  None
                </option>
                <option value="2">
                  All
                </option>
                <option value="3">
                  All filtered
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="text-white">
          <div class="flex justify-center">
            <div class="mb-3 cursor-pointer">
              <select
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-700 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-700 focus:border-blue-600 focus:outline-none cursor-pointer text-gray-100"
                aria-label="Default select example"
              >
                <option selected>
                  Actions
                </option>
                <option value="1">
                  None
                </option>
                <option value="2">
                  All
                </option>
                <option value="3">
                  All filtered
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <nuxt-link
          to="/sales/newInvoice"
          class="flex justify-center items-center bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          <span class="las la-plus-square p-3" />
          <span>New Invoice</span>
        </nuxt-link>
      </div>
    </div>
    <div class="flex flex-col bg-gray-700 m-3 p-3">
      <h3 class="text-white text-lg">
        Search
      </h3>
      <div class=" mt-5">
        <form class="w-full ">
          <div class="flex flex-wrap  justify-between items-center -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                for="grid-state"
              >
                Client
              </label>
              <div class="relative">
                <select
                  id="grid-state"
                  class="block appearance-none w-full bg-gray-700 border border-gray-200 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
                >
                  <option>Select client</option>
                </select>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                for="grid-city"
              >
                Invoice Number:
              </label>
              <input
                id="grid-city"
                class="appearance-none block w-full bg-gray-700 text-gray-100 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
                type="text"
              >
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                for="grid-state"
              >
                Status
              </label>
              <div class="relative">
                <select
                  id="grid-state"
                  class="block appearance-none w-full bg-gray-700 border border-gray-200 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
                >
                  <option>Any Status</option>
                </select>
              </div>
            </div>
          </div>
          <div class="py-4 flex justify-between">
            <div>
              <button class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 border border-gray-100 rounded">
                Advanced Search
              </button>
            </div>
            <div class="flex">
              <button class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 border border-gray-100 rounded">
                Reset
              </button>
              <button class="bg-gray-700 hover:bg-gray-800 text-white font-bold mx-3 py-2 px-4 border border-gray-100 rounded">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="mt-5 mx-4 bg-gray-700 ">
      <h3 class="text-white text-lg pt-4 pl-4">
        Results
      </h3>
      <div class="flex justify-between items-center">
        <div class="">
          <p class="text-white pb-2 pt-4 px-4 text-xl cursor-pointer hover:text-blue-600">
            #00001 - 16/5/2022
          </p>
          <p class="text-white py-2 px-4 text-xl cursor-pointer hover:text-blue-600">
            POS client #1
          </p>
        </div>
        <div class="">
          <p class="text-white pb-2 pt-4 px-4 text-xs ">
            Printed
          </p>
          <div class="flex">
            <div class="text-white">
              <span class="las la-clock" />
            </div>
            <div class="text-white ml-2">
              16/5/2022 21:12
            </div>
          </div>
        </div>
        <div class="">
          <p class="text-white pb-2 pt-4 px-4 text-xl">
            Ksh.46,400
          </p>
          <span class="bg-red-500 text-white py-2 px-4 border border-red-100 rounded text-xs">
            Unpaid
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
