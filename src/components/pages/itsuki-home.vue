<template>
  <div class="home-page">
    <h1 id="title">この世はいつきが全て！</h1>
    <v-btn class="btn" @click="submit">悩みを相談してみる</v-btn>
    <v-img class="main-img" src="../../../public/himawaris.jpeg"></v-img>
  </div>
</template>

<script>

export default {
  name: 'itsuki-home',

  data() {
    return {

    }
  },
  methods: {
    submit() {
      this.$router.push({name: 'nickname'})
    }
  }
}
</script>

<style>
.home-page {
  background-color: #EBE568;
  min-height: 80vh;
  padding-bottom: 50px;
}
  #title {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .btn {
    /* 暫定対応 */
    margin-left: 42%;
    margin-bottom: 50px;
  }
  .main-img {
    height: 70%;
    margin-bottom: 30px;
    margin-right: 20%;
    margin-left: 20%;
  }
</style>
