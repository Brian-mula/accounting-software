<template>
  <div>
    <div class="flex justify-between">
      <div>
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        <h3 class="px-4 pt-2 text-gray-100 text-lg">Employees</h3>
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        <p class="text-gray-100 text-sm px-4 py-2">
          Powered by <span class="text-blue-600">Taquana</span>
        </p>
      </div>
      <div>
        <p class="text-gray-100 text-xl">Popup</p>
      </div>
    </div>
    <!-- tabs view -->
    <div class="bg-gray-700 mx-5">
      <TabsView />
    </div>
    <!-- end of tabs -->
  </div>
</template>

<script>
import TabsView from '../components/employees/tabsView.vue'
export default {
  components: { TabsView }
}
</script>

<style></style>
