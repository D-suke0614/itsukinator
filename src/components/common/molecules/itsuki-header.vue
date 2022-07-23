<template>
  <div>
    <v-toolbar
      color="#897DD8"
    >
      <div class="header-container">
        <v-btn icon @click="home">
          <v-img class="itsuki-logo" src="../../../assets/itsuki-logo.png"></v-img>
        </v-btn>
        <v-spacer></v-spacer>
      </div>

    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'itsuki-header',

  data() {
    return {

    }
  },
  methods: {
    home() {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style>
  .header-container {
    width: 80%;
    margin: 0 auto;
    height: 10vh;
    display: flex;
    align-items: center;
  }
  .itsuki-logo {
    height: 60px;
    width: 60px;
  }
</style>
