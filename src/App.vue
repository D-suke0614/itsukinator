<template>
  <v-app>
    <itsukiHeader/>
    <v-main class="container">
      <router-view></router-view>
    </v-main>
    <itsukiFooter/>
  </v-app>
</template>

<script>
import itsukiHeader from './components/common/molecules/itsuki-header.vue'
import itsukiFooter from './components/common/molecules/itsuki-footer.vue'
export default {
  name: 'App',

  components: {
    itsukiHeader,
    itsukiFooter,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
  .container {
    margin: 0 auto;
  }
</style>
