<template>
  <v-app>
    <itsukiHeader/>
    <v-main>
      <router-view></router-view>
      <!-- <Home/> -->
      <!-- <Nickname/> -->
    </v-main>
    <itsukiFooter/>
  </v-app>
</template>

<script>
import itsukiHeader from './components/common/molecules/itsuki-header.vue'
import itsukiFooter from './components/common/molecules/itsuki-footer.vue'
// import Home from './components/pages/itsuki-home.vue'
// import Nickname from './components/pages/itsuki-nickname.vue'
export default {
  name: 'App',

  components: {
    // Home,
    itsukiHeader,
    itsukiFooter,
    // Nickname,
  },

  data: () => ({
    //
  }),
};
</script>
