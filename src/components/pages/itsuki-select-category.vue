<template>
  <div class="select-page">
    <h2 class="label">悩みのカテゴリーを選択しろやねん！</h2>
    <v-radio-group column class="radio-group" v-model="selected">
      <v-radio value="0" color="#897DD8">
        <template v-slot:label>
          <div class="text-large"><strong class="white--text">恋愛やねん</strong></div>
        </template>
      </v-radio>
      <v-radio value="1" color="#897DD8">
        <template v-slot:label>
          <div class="text-large"><strong class="white--text">仕事やねん</strong></div>
        </template>
      </v-radio>
      <v-radio value="2" color="#897DD8">
        <template v-slot:label>
          <div class="text-large"><strong class="white--text">人間関係やねん</strong></div>
        </template>
      </v-radio>
      <v-radio value="3" color="#897DD8">
        <template v-slot:label>
          <div class="text-large"><strong class="white--text">お金やねん</strong></div>
        </template>
      </v-radio>
    </v-radio-group>
    <div class="select-catergory-button-container">
      <v-btn class="submit btn white--text text-h5 font-weight-black" @click="submit" color="#897DD8">次へ</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'itsuki-select-category',
  data() {
    return {
      selected: null,
    }
  },
  methods: {
    submit() {
      this.$router.push({name: 'select-content', params: {selected: this.selected}})
    }
  }
}
</script>

<style>
  .select-page {
    background-color: #EBE568;
    min-height: 90vh;
  }
  .label {
    text-align: center;
    color: white;
    padding-top: 100px;
    font-family: bold;
    font-size: 70px;
  }
  .radio-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 0 auto;
    /* margin-left: 20vw; */
    /* margin-right: 30vw; */
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
</style>
