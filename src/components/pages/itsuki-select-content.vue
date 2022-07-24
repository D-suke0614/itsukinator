<template>
  <div class="select-page">
    <h2 id="title2" class="label">悩みは何やねん？</h2>
    <v-radio-group column class="radio-group-content" v-model="selectedContent">
      <v-radio
        class="text-large radio"
        v-for="item in items"
        :key="item.id"
        :label="item.content"
        :value="item.value"
        color="#897DD8"
      >
        <template v-slot:label>
          <div class="text-large">
            <strong class="white--text">{{ item.content }}</strong>
          </div>
        </template>
      </v-radio>
    </v-radio-group>
    <div class="select-content-button-container">
      <v-btn
        class="submit btn white--text text-h6 font-weight-black"
        @click="submit"
        color="#897DD8"
        :disabled="!selectedContent"
      >
        <span class="btn_font">次へ</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import radioContents from "./values/selectValue";
export default {
  name: "itsuki-select-content",
  data() {
    return {
      selectedContent: "",
      items: [],
      nackname: '',
    };
  },
  methods: {
    submit() {
      this.$router.push({
        name: "result",
        params: { 
          selectedContent: this.selectedContent,
          nickname: this.nickname,
           }, 
      });
    },
  },
  mounted() {
    this.nickname = this.$route.params.nickname;
    const selected = this.$route.params.selected;
    switch (selected) {
      case "0":
        this.items = radioContents[0].contents;
        break;
      case "1":
        this.items = radioContents[1].contents;
        break;
      case "2":
        this.items = radioContents[2].contents;
        break;
      case "3":
        this.items = radioContents[3].contents;
        break;
    }
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
}
.select-content-button-container {
  text-align: center;
}
.text-large {
  font-size: 40px;
}
.radio-group {
  height: 50vh;
  display: flex;
}
.radio-group-content {
    width: 50%;
    margin: 0 auto;
}

</style>
