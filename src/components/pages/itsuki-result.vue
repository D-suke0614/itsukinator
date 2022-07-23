<template>
  <div>
    <Loading v-show="isLoading"></Loading>
    <div class="result-page" v-show="!isLoading">
      <h2 class="label">いつきからのお言葉やねん</h2>
      <div class="text">
        <transition-group appera name="text">
          <p v-for="item in items" :key="item">
            {{ item.content }}
          </p>
        </transition-group>
      </div>

      <v-btn class="to-top btn white--text text-h5 font-weight-black" @click="toTop" color="#897DD8">TOPへ戻る</v-btn>
    </div>
  </div>
</template>

<script>
import results from "./values/resultValue";
import Loading from './loading/itsuki-loaging.vue'
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
      const selected = this.$route.params.selectedContent
      const index = Number(selected.slice(0, 1))
      const value = Number(selected.slice(1, 2))
      this.items = results[index][value]
    }, 1500)
  },
};
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
  .text-enter {
    opacity: 0;
  }
  .text-enter-active {
    transition: opacity 1s;
  }
  .text-enter-to {
    opacity: 1;
  }
</style>
