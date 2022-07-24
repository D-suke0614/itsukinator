<template>
  <div class="home-page">
    <div>
      <h1 id="title">この世は</h1>
      <h1 id="title">いつきが全て！</h1>
    </div>
    <div class="home-button-container">
      <v-btn
        id="title2"
        class="btn white--text text-h5 font-weight-black"
        @click="submit"
        color="#897DD8"
        height="70"
        large
      >
        <span class="btn_font">
          悩みを相談してみる
        </span>
      </v-btn>
    </div>
    <!-- <v-img class="main-img" src="../../../public/himawaris.jpeg"></v-img> -->
  </div>
</template>

<script>
export default {
  name: "itsuki-home",

  data() {
    return {};
  },
  methods: {
    submit() {
      this.$router.push({ name: "nickname" });
    },
  },
};
</script>

<style>
.home-page {
  background-color: #ebe568;
  min-height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home-page div {
  width: 80%;
  margin: 0 auto;
}
#title {
  margin-bottom: 30px;
  font-size: 90px;
  color: #fff;
  text-shadow: 5px 5px 5px #808080;
  font-family: "Sawarabi Mincho";
}
.btn {
  text-align: right;
  border-radius: 35px;
  box-shadow: 5px 5px 5px #808080;
  font-family: "Sawarabi Mincho";
}
.main-img {
  height: 70%;
  margin-right: 20%;
  margin-left: 20%;
}
.home-button-container {
  display: flex;
  justify-content: flex-end;
}
#title2 {
  font-family: "Sawarabi Mincho";
}
.btn_font {
  font-family: "Sawarabi Mincho";
}
</style>
