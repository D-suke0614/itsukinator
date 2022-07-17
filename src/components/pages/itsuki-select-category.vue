<template>
  <div class="select-page">
    <h2 class="label">悩みのカテゴリーを選択しろやねん！</h2>
    <v-radio-group column class="radio-group" v-model="selected">
      <v-radio class="radio" label="恋愛やねん" value="0"></v-radio>
      <v-radio class="radio" label="仕事やねん" value="1"></v-radio>
      <v-radio class="radio" label="人間関係やねん" value="2"></v-radio>
      <v-radio class="radio" label="お金やねん" value="3"></v-radio>
    </v-radio-group>
    <v-btn class="submit" @click="submit">次へ</v-btn>
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
    min-height: 80vh;
  }
  .label {
    text-align: center;
    color: white;
    padding-top: 100px;
    font-family: bold;
    font-size: 50px;
  }
  .radio-group {
    width: auto;
    margin-left: 20vw;
    margin-right: 30vw;
  }
  .radio {
    margin-bottom: 30px !important;
  }
  .submit {
    margin-left: 25%;
  }
</style>
