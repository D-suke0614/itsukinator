<template>
  <div v-show="loading">
    <div class="fullview">
      <div class="loading-spacer"></div>
      <vue-loading
        type="spiningDubbles"
        color="#EBE568"
        :size="{ width: '100px', height: '100px' }"
        >
      </vue-loading>
    </div>
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'

export default {
  name: 'itsuki-loading',
  components: {
    VueLoading,
  },

}
</script>

<style>
.fullview {
  width: 100%;
  height: 88vh;
  background: #6BE489;
}
.loading-spacer {
  height: 35%;
}
</style>
