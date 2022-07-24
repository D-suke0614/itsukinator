<template>
  <div>
    <v-toolbar
      color="#897DD8"
      class="change-fonts"
    >
      <div class="header-container">
        <div>
          <v-btn icon @click="toHome">
            <v-img class="itsuki-logo" src="../../../assets/itsuki-himawari-header.png"></v-img>
          </v-btn>
        </div>
        <div class="header-right">
          <a class="header-right-button" @click="toTerms">
            <span class="white--text">利用規約</span>
          </a>
          <a class="header-right-button" @click="toPrivacy">
            <span class="white--text">プライバシーポリシー</span>
          </a>
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
    toHome() {
      this.$router.push({name: 'home'})
    },
    toTerms() {
      this.$router.push({name: 'terms'})
    },
    toPrivacy() {
      this.$router.push({name: 'privacy'})
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
    width: 25%;
    display: flex;
    justify-content: space-between;
  }
  .header-right-button {
    margin-left: 10px;
  }
</style>
