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
    <img class="img1" src="../../assets/itsuki-bike.png">
    <img class="img2" src="../../assets/itsuki-bike2.png">
    <img class="img3" src="../../assets/itsuki-peace.png">
    <img class="main-img" src="../../assets/kakamu.png">
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
  position: relative;
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
  /* width: 20%; */
  position: absolute;
  top: 30%;
  right: 70%;
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
.img1 {
  height: 45%;
  /* width: 20%; */
  position: absolute;
  top: 62%;
  right: 0%;
}
.img2 {
  height: 45%;
  /* width: 20%; */
  position: absolute;
  top: 57%;
  right: 35%;
}
.img3 {
  height: 50%;
  /* width: 20%; */
  position: absolute;
  top: 5%;
  right: 10%;
}
</style>
