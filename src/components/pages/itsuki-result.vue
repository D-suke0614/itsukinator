<template>
  <div class="result-page">
    <Loading v-show="isLoading"></Loading>
    <div v-show="!isLoading">
      <h2 id="title2" class="label">いつきからのお言葉やねん</h2>
      <div class="result-wrapper">
        <div class="text result-text clip-box-a">
          <transition-group appera name="text">
            <p v-for="item in items" :key="item" id="title2" class="gray--text result-text-border">
              {{ item.content }}
            </p>
          </transition-group>
        </div>
      </div>
      <v-btn
        class="to-top btn white--text text-h5 font-weight-black"
        @click="toTop"
        color="#897DD8"
        ><span class="btn_font">TOPへ戻る</span></v-btn
      >
    </div>
  </div>
</template>

<script>
import results from "./values/resultValue";
import Loading from "./loading/itsuki-loaging.vue";
export default {
  name: "itsuki-result",
  components: {
    Loading,
  },
  data() {
    return {
      items: [],
      isLoading: true,
    };
  },
  methods: {
    toTop() {
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
      const selected = this.$route.params.selectedContent;
      const index = Number(selected.slice(0, 1));
      const value = Number(selected.slice(1, 2));
      this.items = results[index][value];
    }, 1500);
  },
};
</script>
<style>
.result-page {
  background-color: #6be489;
  min-height: 86vh;
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
.text-enter {
  opacity: 0;
}
.text-enter-active {
  transition: opacity 1s;
}
.text-enter-to {
  opacity: 1;
}
.result-text {
  margin-bottom: 40px;
  background-color: #ebe568;
  width: 50%;
  text-align: center;
  box-shadow: 5px 5px 5px #808080;
}

.clip-box-a {
 position: relative;
 margin: 0 auto;
 padding: 15px 35px 15px 25px;
 width: 70%; /* ボックス幅 */
 background-color: #ebe568; /* ボックス背景色 */
 color: #555555; /* 文章色 */
 border: 1px solid #ccc; /* 枠線 */
 box-shadow: 1px 1px 1px #acacac; /* 影の色 */
 margin-bottom: 30px;
}
.clip-box-a::before {
 position: absolute;
 content: '';
 top: -15px;
 right: 10px;
 height: 55px;
 width: 15px;
 border: 3px solid #767575; /*クリップ色 */
 background-color: none;
 border-radius: 12px;
 box-shadow: 1px 1px 2px #999;
 transform: rotate(10deg);
 z-index: 1;
}
.clip-box-a::after {
 position: absolute;
 content: '';
 top: 0px;
 width: 10px; 
 right: 20px;
 border: solid 5px #ebe568; /*背景色と同じ色にする*/
 z-index: 2;
}
</style>
