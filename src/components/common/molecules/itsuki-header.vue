<template>
  <div>
    <v-toolbar
      color="#897DD8"
      class="change-fonts"
    >
      <div class="header-container">
        <div>
          <v-btn icon @click="home">
            <v-img class="itsuki-logo" src="../../../assets/itsuki-himawari-header.png"></v-img>
          </v-btn>
        </div>
        <div class="header-right">
          <v-btn icon>
            <span class="white--text">利用規約</span>
          </v-btn>
          <v-btn icon>
            <span class="white--text">プライバシーポリシー</span>
          </v-btn>
        </div>
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
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .itsuki-logo {
    height: 60px;
    width: 60px;
  }
  .change-fonts {
    font-family: "Sawarabi Mincho"; 
  }
  .header-right {
    width: 20%;
    display: flex;
    justify-content: space-between;
  }
</style>
