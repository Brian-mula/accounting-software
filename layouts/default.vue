<template>
  <div class="flex bg-gray-900">
    <div class="bg-gray-700 h-max">
      <SideNav />
    </div>
    <div class="flex flex-col w-5/6">
      <MainNav />
      <div class="mr-3">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from '../components/SideNav.vue'
import MainNav from '../components/MainNav.vue'
export default {
  name: 'MyDefault',
  components: { SideNav, MainNav }
}
</script>

<style></style>
