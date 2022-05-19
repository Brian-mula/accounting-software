<template>
  <div class="flex justify-between items-center mx-4 my-4 p-4 bg-gray-700">
    <div class="w-1/2">
      <div>
        <h4 class="text-white px-4 border-b-2">
          Client's details
        </h4>
        <h4 class="text-white pt-2">
          Client type
        </h4>
        <div class="flex">
          <div class="flex px-3">
            <div class="form-check">
              <input
                id="flexRadioDefault1"
                v-model="picked"
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                value="individual"
                name="flexRadioDefault"
              >
              <label
                class="form-check-label inline-block text-gray-100"
                for="flexRadioDefault1"
              >
                Individual
              </label>
            </div>
          </div>
          <div class="form-check">
            <input
              id="flexRadioDefault1"
              v-model="picked"
              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              value="business"
              name="flexRadioDefault"
            >
            <label
              class="form-check-label inline-block text-gray-100"
              for="flexRadioDefault1"
            >
              Business
            </label>
          </div>
        </div>
      </div>
      <div>
        <div v-if="picked=='business'" class="mt-5 bg-gray-700 p-4 mx-4">
          <div class="block p-6 rounded-lg shadow-lg bg-white">
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
                <div class="col-span-6 sm:col-span-3 mr-2">
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

                <div class="col-span-6 sm:col-span-3 ml-2">
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
              <div class="col-span-6 sm:col-span-3 w-full">
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
                <div class="col-span-6 sm:col-span-3 mr-2">
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

                <div class="col-span-6 sm:col-span-3 ml-2">
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
                <div class="col-span-6 sm:col-span-3 mr-2">
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
                <div class="col-span-6 sm:col-span-3 mr-2">
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
                <div class="col-span-6 sm:col-span-3 ml-2">
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
                <div class="col-span-6 sm:col-span-3 mr-2">
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

                <div class="col-span-6 sm:col-span-3 mr-2">
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
              <div class="col-span-6 sm:col-span-3">
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
            <div />
          </div>
        </div>
        <div v-if="picked=='individual'" class="mt-5 bg-gray-700 p-4 mx-4">
          <div class="block p-6 rounded-lg shadow-lg bg-white">
            <form>
              <div class="form-group mb-6">
                <label
                  for="businessName"
                  class="form-label inline-block mb-2 text-gray-700"
                >Full Name:</label>
                <input
                  id="exampleInputEmail1"
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-describedby="emailHelp"
                  placeholder="eg.Mulati  Brian"
                >
              </div>
              <div class="flex justify-between items-center">
                <div class="col-span-6 sm:col-span-3 mr-2">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                  >Telephone:</label>
                  <input
                    id="first-name"
                    type="text"
                    name="first-name"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                </div>

                <div class="col-span-6 sm:col-span-3 ml-2">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                  >Mobile:</label>
                  <input
                    id="last-name"
                    type="text"
                    name="last-name"
                    autocomplete="family-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                </div>
              </div>
              <div class="col-span-6 sm:col-span-3 w-full">
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
                <div class="col-span-6 sm:col-span-3 mr-2">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                  >Street Address 1:</label>
                  <input
                    id="street-address"
                    type="text"
                    name="street-address"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                </div>

                <div class="col-span-6 sm:col-span-3 ml-2">
                  <label
                    for="addresss1"
                    class="block text-sm font-medium text-gray-700"
                  > Street Address 2:</label>
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
                <div class="col-span-6 sm:col-span-3 mr-2">
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
                <div class="col-span-6 sm:col-span-3 mr-2">
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
                <div class="col-span-6 sm:col-span-3 ml-2">
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
              <!--  -->
              <div class="col-span-6 sm:col-span-3">
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
            <div />
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 ml-2">
      <h4 class="text-white px-2 border-b-2">
        Account details
      </h4>

      <div class="mt-5 bg-gray-700 p-4 mx-4">
        <div class="block p-6 rounded-lg shadow-lg bg-white">
          <form>
            <div class="flex justify-between items-center">
              <div class="form-group mb-6 w-40">
                <label
                  for="businessName"
                  class="form-label inline-block mb-2 text-gray-700"
                >Business Name:</label>
                <input
                  id="exampleInputEmail1"
                  type="text"
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-describedby="emailHelp"
                  placeholder="eg.Taquana ltd"
                >
              </div>
              <div class="col-span-6 sm:col-span-3 w-40">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                >Invoicing method</label>
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Print(offline)</option>
                  <option>Send via email</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="col-span-6 sm:col-span-3">
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

              <div class="col-span-6 sm:col-span-3">
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
            <div class="col-span-6 sm:col-span-3 w-60">
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
              <div class="col-span-6 sm:col-span-3">
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

              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3 w-40">
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

              <div class="col-span-6 sm:col-span-3 w-40">
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
            </div>
            <div class="col-span-6 sm:col-span-3">
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
          <div />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picked: 'business'
    }
  }
}
</script>

<style lang="scss" scoped></style>
