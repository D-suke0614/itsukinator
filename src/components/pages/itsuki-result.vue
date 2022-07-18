<template>
  <div class="result-page">
    <h2 class="label">いつきからのお言葉やねん</h2>
    <div class="text">
      <p class="white--text">予告のないDestiny（Destiny）</p>
      <p class="white--text">一秒後にはHistory（History）</p>
      <p class="white--text">I, My, Me, Mineじゃ 表現もできないさ</p>
      <p class="white--text">君というPrinceがいなきゃI'mゼロ人称</p>

      <p v-for="item in items" :key="item.id">{{ item.content }}</p>
    </div>
    <v-btn class="to-top btn white--text text-h5 font-weight-black" @click="toTop" color="#897DD8">TOPへ戻る</v-btn>
  </div>
</template>

<script>
import results from './values/resultValue'
export default {
  name: 'itsuki-result',
  data() {
    return {
      items: [],
    }
  },
  methods: {
    toTop() {
      this.$router.push({name: 'home'})
    }
  },
  mounted() {
    const selected = this.$route.params.selectedContent
    switch (selected) {
      case '0':
        this.items = results[0].contents
        break;
      case '1':
        this.items = results[1].contents
        break;
      default:
    }
  },
}
</script>
<style>
  .result-page {
    background-color: #6BE489;
    min-height: 90vh;
  }
    .label {
    text-align: center;
    color: white;
    padding-top: 100px;
    font-family: bold;
    font-size: 50px;
  }
  .text {
    text-align: center;
    color: white;
    padding-top: 10px;
    font-family: bold;
    font-weight: 900;
    font-size: 40px;
    padding-top: 30px;
  }
  .to-top {
    margin-left: 45%;
  }
</style>
