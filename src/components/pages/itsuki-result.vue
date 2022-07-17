<template>
  <div class="result-page">
    <h2 class="label">いつきからのお言葉やねん</h2>
    <div class="text">
      <p>予告のないDestiny（Destiny）</p>
      <p>一秒後にはHistory（History）</p>
      <p>I, My, Me, Mineじゃ 表現もできないさ</p>
      <p>君というPrinceがいなきゃI'mゼロ人称</p>
    </div>
    <v-btn class="to-top" @click="toTop">TOPへ戻る</v-btn>
  </div>
</template>

<script>
export default {
  name: 'itsuki-result',
  methods: {
    toTop() {
      this.$router.push({name: 'home'})
    }
  }
}
</script>
<style>
  .result-page {
    background-color: #6BE489;
    min-height: 80vh;
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
