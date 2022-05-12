<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            :class="{
              'text-gray-100 bg-gray-700': openTab !== 1,
              'text-white bg-gray-800': openTab === 1,
            }"
            @click="toggleTabs(1)"
          >
            Master
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            :class="{
              'text-gray-100 bg-gray-700': openTab !== 2,
              'text-white bg-gray-800': openTab === 2,
            }"
            @click="toggleTabs(2)"
          >
            Employee Taxes
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            :class="{
              'text-gray-100 bg-gray-700': openTab !== 3,
              'text-white bg-gray-800': openTab === 3,
            }"
            @click="toggleTabs(3)"
          >
            Manage Exits
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            :class="{
              'text-gray-100 bg-gray-700': openTab !== 4,
              'text-white bg-gray-800': openTab === 4,
            }"
            @click="toggleTabs(4)"
          >
            Preview Payrol
          </a>
        </li>
      </ul>
      <div
        class="relative flex text-gray-100 flex-col min-w-0 break-words bg-gray-700 w-full mb-6 shadow-lg rounded"
      >
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <div class="relative overflow-x-auto shadow-md">
                <table
                  class="w-full text-sm text-left text-gray-700 dark:text-gray-400"
                >
                  <thead
                    class="text-xs text-gray-100 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
                  >
                    <tr>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Code</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Name</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Joining Date</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Job Type</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Department</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                    v-for="employee in employeeData"
                    :key="employee.code"
                      class="bg-gray-700 border-b dark:bg-gray-700 text-gray-100 dark:border-gray-700"
                    >
                      <td class="px-6 py-4">
                        {{ employee.code }}
                      </td>
                      <td class="px-6 py-4">
                        {{ employee.name }}
                      </td>
                      <td class="px-6 py-4">
                        {{ employee.date }}
                      </td>
                      <td class="px-6 py-4">
                        {{ employee.type }}
                      </td>
                      <td class="px-6 py-4">
                        {{ employee.department }}
                      </td>
                      <td class="px-6 py-4">
                        {{ employee.designation }}
                      </td>
                    </tr>
                    <!-- dummy data -->
                    <!-- dummy data -->
                  </tbody>
                </table>
              </div>
            </div>
            <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <div class="relative overflow-x-auto shadow-md">
                <table
                  class="w-full text-sm text-left text-gray-700 dark:text-gray-400"
                >
                  <thead
                    class="text-xs text-gray-100 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
                  >
                    <tr>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Job group</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">NHIF</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">PAYE</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Insurance</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                    v-for="employee in employeeTaxes"
                    :key="employee.group"
                      class="bg-gray-700 border-b dark:bg-gray-700 text-gray-100 dark:border-gray-700"
                    >
                      <td class="px-6 py-4">
                        {{ employee.group }}
                      </td>
                      <td class="px-6 py-4">
                       Ksh. {{ employee.nhif }}
                      </td>
                      <td class="px-6 py-4">
                        {{ employee.paye }}
                      </td>
                      <td class="px-6 py-4">
                        {{ employee.insurance }}
                      </td>
                      <td class="px-6 py-4">
                        Ksh. {{ employee.total }}
                      </td>
                    </tr>
                    <!-- dummy data -->
                    <!-- dummy data -->
                  </tbody>
                </table>
              </div>
            </div>
            <div :class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <p>
                List of employees on Leave
              </p>
            </div>
            <div :class="{ hidden: openTab !== 4, block: openTab === 4 }">
             <div class="relative overflow-x-auto shadow-md">
                <table
                  class="w-full text-sm text-left text-gray-700 dark:text-gray-400"
                >
                  <thead
                    class="text-xs text-gray-100 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
                  >
                    <tr>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Code</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Taxes</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Advance</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Incentives</th>
                      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                      <th scope="col" class="px-6 py-3">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                    v-for="employee in employeeSalary"
                    :key="employee.code"
                      class="bg-gray-700 border-b dark:bg-gray-700 text-gray-100 dark:border-gray-700"
                    >
                      <td class="px-6 py-4">
                        {{ employee.code }}
                      </td>
                      <td class="px-6 py-4">
                       Ksh. {{ employee.taxes }}
                      </td>
                      <td class="px-6 py-4">
                        {{ employee.advance }}
                      </td>
                      <td class="px-6 py-4">
                        {{ employee.incentive }}
                      </td>
                      <td class="px-6 py-4">
                        Ksh. {{ employee.total }}
                      </td>
                    </tr>
                    <!-- dummy data -->
                    <!-- dummy data -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import employeeData from '~/dummydata/employeeDetails'
import employeeTaxes from '~/dummydata/employeeTaxes'
import employeeSalary from '~/dummydata/employeeSalary'
export default {
  data () {
    return {
      openTab: 1,
      employeeData,
      employeeTaxes,
      employeeSalary

    }
  },
  methods: {
    toggleTabs (tabNumber) {
      this.openTab = tabNumber
    }
  }
}
</script>
