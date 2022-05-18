<template>
  <div>
    <div class="mt-5 mx-4 bg-gray-700 pt-5">
      <dir class="">
        <button
          class="flex px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="isOpen = true"
        >
          <div class="las la-plus-circle" />
          <div class="text-white">
            Add Client
          </div>
        </button>
      </dir>

      <div class="flex justify-between items-center">
        <div class="text-white">
          <div
            class="block p-6 rounded-lg shadow-lg bg-gray-700 max-w-sm my-5 mx-3 w-96"
          >
            <form>
              <div class="col-span-6 sm:col-span-3 form-group mb-6">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-100"
                >Method:</label>
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-control"
                >
                  <option selected>
                    Print(offline)
                  </option>
                  <option value="">
                    Send via e-mail
                  </option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3 form-group mb-6">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-100"
                >Client:</label>
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-control"
                >
                  <option selected>
                    Select client
                  </option>
                </select>
              </div>

              <button
                type="submit"
                class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <div class="px-4 py-4 mb-6">
            <!-- invoice details -->
            <div class="block p-6 rounded-lg shadow-lg bg-gray-600 max-w-sm">
              <form>
                <div class="form-group mb-6 flex items-center">
                  <div>
                    <label
                      for="invoice_number"
                      class="form-label inline-block mb-2 text-gray-100"
                    >Invoice Number:</label>
                  </div>
                  <div>
                    <input
                      id="invoice_number"
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                  </div>
                </div>
                <div class="form-group mb-6 flex items-center">
                  <div>
                    <label
                      for="invoice_number"
                      class="form-label inline-block mb-2 text-gray-100"
                    >Invoice date:</label>
                  </div>
                  <div>
                    <input
                      id="invoice_number"
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                  </div>
                </div>
                <div class="form-group mb-6 flex items-center">
                  <div>
                    <label
                      for="invoice_number"
                      class="form-label inline-block mb-2 text-gray-100"
                    >Issue date:</label>
                  </div>
                  <div>
                    <input
                      id="invoice_number"
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                  </div>
                </div>
                <div class="form-group mb-6 flex items-center">
                  <div>
                    <label
                      for="invoice_number"
                      class="form-label inline-block mb-2 text-gray-100"
                    >Payment Terms:</label>
                  </div>
                  <div>
                    <input
                      id="invoice_number"
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                  </div>
                </div>
              </form>
            </div>
            <!-- invoice details -->
          </div>
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="mt-5 bg-gray-700 p-4 mx-4">
      <div class="block p-6 rounded-lg shadow-lg bg-white w-2/3">
        <form>
          <div class="form-group mb-6">
            <label
              for="businessName"
              class="form-label inline-block mb-2 text-gray-700"
            >Business Name:</label>
            <input
              id="exampleInputEmail1"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp"
              placeholder="eg.Taquana ltd"
            >
          </div>
          <div class="flex justify-between items-center">
            <div class="col-span-6 sm:col-span-3 w-72">
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
              >First name:</label>
              <input
                id="first-name"
                type="text"
                name="first-name"
                autocomplete="given-name"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
            </div>

            <div class="col-span-6 sm:col-span-3 w-72">
              <label
                for="last-name"
                class="block text-sm font-medium text-gray-700"
              >Last name:</label>
              <input
                id="last-name"
                type="text"
                name="last-name"
                autocomplete="family-name"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
            </div>
          </div>
          <div class="col-span-6 sm:col-span-3 w-72">
            <label
              for="email-address"
              class="block text-sm font-medium text-gray-700"
            >Email Address:</label>
            <input
              id="email-address"
              type="email"
              name="email-address"
              autocomplete="given-name"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
          </div>
          <div class="flex justify-between items-center">
            <div class="col-span-6 sm:col-span-3 w-72">
              <label
                for="street-address"
                class="block text-sm font-medium text-gray-700"
              >Street Address:</label>
              <input
                id="street-address"
                type="text"
                name="street-address"
                autocomplete="given-name"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
            </div>

            <div class="col-span-6 sm:col-span-3 w-72">
              <label
                for="addresss1"
                class="block text-sm font-medium text-gray-700"
              >Address 1:</label>
              <input
                id="addresss1"
                type="text"
                name="addresss1"
                autocomplete="address"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="col-span-6 sm:col-span-3 w-48">
              <label
                for="city"
                class="block text-sm font-medium text-gray-700"
              >City:</label>
              <input
                id="city"
                type="text"
                name="city"
                autocomplete="given-name"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
            </div>
            <div class="col-span-6 sm:col-span-3 w-48">
              <label
                for="province"
                class="block text-sm font-medium text-gray-700"
              >Province:</label>
              <input
                id="province"
                type="text"
                name="province"
                autocomplete="given-name"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
            </div>
            <div class="col-span-6 sm:col-span-3 w-48">
              <label
                for="postal-code"
                class="block text-sm font-medium text-gray-700"
              >Postal Code:</label>
              <input
                id="postal-code"
                type="text"
                name="postal-code"
                autocomplete="address"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="col-span-6 sm:col-span-3 w-72">
              <label
                for="telephone"
                class="block text-sm font-medium text-gray-700"
              >Telephone:</label>
              <input
                id="telephone"
                type="text"
                name="telephone"
                autocomplete="given-name"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
            </div>

            <div class="col-span-6 sm:col-span-3 w-72">
              <label
                for="mobile"
                class="block text-sm font-medium text-gray-700"
              >Mobile:</label>
              <input
                id="mobile"
                type="text"
                name="mobile"
                autocomplete="address"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
            </div>
          </div>
          <div class="col-span-6 sm:col-span-3 w-full">
            <label
              for="country"
              class="block text-sm font-medium text-gray-700"
            >Country</label>
            <select
              id="country"
              name="country"
              autocomplete="country-name"
              class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>Kenya</option>
              <option>Uganda</option>
              <option>Tanzania</option>
            </select>
          </div>

          <div class="flex justify-end items-center">
            <div>
              <button
                type="submit"
                class="px-6 py-2.5 mt-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Save Client
              </button>
            </div>
          </div>
        </form>
        <div>
          <button
            type="submit"
            class="px-6 py-2.5 mt-5 bg-gray-400 text-gray-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
            @click="isOpen = false"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="mt-5 p-4 mx-4 bg-gray-600">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <form action="">
          <table
            class="w-full text-sm text-left text-gray-100 dark:text-gray-100"
          >
            <thead
              class="text-xs text-gray-100 uppercase bg-gray-600 dark:bg-gray-600 dark:text-gray-100"
            >
              <th scope="col" class="px-6 py-3">
                Item
              </th>
              <th colspan="6" scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Unit price
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3">
                Tax 1
              </th>
              <th scope="col" class="px-6 py-3">
                Subtotal
              </th>
              <th scope="col" class="px-6 py-3">
                Total
              </th>
            </thead>
            <tbody>
              <tr
                class="bg-gray-600 border-b dark:bg-gray-600 dark:border-gray-600"
              >
                <td class="px-6 py-4">
                  <input
                    type="text"
                    name="item"

                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-800"
                  >
                </td>
                <td colspan="6" class="px-6 py-4">
                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <input
                      id="description"
                      type="text"
                      name="description"

                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-800"
                    >
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <input
                      id="price"
                      type="text"
                      name="price"

                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-800"
                    >
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <input
                      id="quantity"
                      type="text"
                      name="quantity"

                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-800"
                    >
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <select id="taxes" name="taxes" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>Taxes</option>
                      <option>PAYE</option>
                      <option>Income Tax</option>
                    </select>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <input
                      id="subtotal"
                      type="text"
                      name="subtotal"

                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-800"
                    >
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <input
                      id="total"
                      type="text"
                      name="total"
                      autocomplete="total"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-800"
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-center items-center mt-5 mb-3">
            <button
              type="submit"
              class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Save Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped></style>
