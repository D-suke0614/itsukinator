<template>
  <div class="select-page">
    <h2 id="title2" class="label">悩みのカテゴリーを選択しろやねん！</h2>
    <v-radio-group column class="radio-group" v-model="selected">
      <v-radio class="radio" value="0" color="#897DD8">
        <template v-slot:label>
          <div class="text-large">
            <strong class="white--text">恋愛やねん</strong>
          </div>
        </template>
      </v-radio>
      <v-radio  class="radio" value="1" color="#897DD8">
        <template v-slot:label>
          <div class="text-large">
            <strong class="white--text">仕事やねん</strong>
          </div>
        </template>
      </v-radio>
      <v-radio  class="radio" value="2" color="#897DD8">
        <template v-slot:label>
          <div class="text-large">
            <strong class="white--text">人間関係やねん</strong>
          </div>
        </template>
      </v-radio>
      <v-radio  class="radio" value="3" color="#897DD8">
        <template v-slot:label>
          <div class="text-large">
            <strong class="white--text">お金やねん</strong>
          </div>
        </template>
      </v-radio>
    </v-radio-group>
    <div class="select-catergory-button-container">
      <v-btn
        class="submit btn white--text text-h5 font-weight-black"
        @click="submit"
        color="#897DD8"
        :disabled="!selected"
      >
        <span class="btn_font">次へ</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "itsuki-select-category",
  data() {
    return {
      selected: null,
      nackname: '',
    };
  },
  methods: {
    submit() {
      this.$router.push({
        name: "select-content",
        params: { 
        selected: this.selected,
        nickname: this.nickname, 
        },  
      });
    },
  },
  mounted() {
    this.nickname = this.$route.params.nickname;
  },
};
</script>

<style>
.select-page {
  background-color: #ebe568;
  min-height: 86vh;
}
.label {
  text-align: center;
  color: white;
  padding-top: 100px;
  font-family: bold;
  font-size: 70px;
  font-family: "Sawarabi Mincho";
}
.radio-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 0 auto;
}
.radio {
  margin-bottom: 30px !important;
}
.select-catergory-button-container {
  text-align: center;
}
.text-large {
  font-size: 40px;
}
.radio {
    height: 60px;
}
</style>
