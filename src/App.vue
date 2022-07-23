<template>
  <v-app class="font">
    <itsukiHeader/>
    <v-main class="main-container">
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
  @import url("https://fonts.googleapis.com/css?family=Sawarabi+Mincho");

  .main-container {
    min-width: 90vw;
  }
  #app {
    font-family: "Sawarabi Mincho";
  }
</style>
