<template>
  <div>
    <h1 id="title">この世はいつきが全て！</h1>
    <router-link :to="{path: '/nickname'}">
      <v-btn class="btn">悩みを相談してみる</v-btn>
    </router-link>
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
}
</script>

<style>
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
    height: 80vh;
    margin-bottom: 30px;
    margin-right: 20%;
    margin-left: 20%;
  }
</style>
