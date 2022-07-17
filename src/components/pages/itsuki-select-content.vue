<template>
  <div class="select-page">
    {{ $route.params.selected }}
    <h2>悩みはなんやねん？</h2>
    <v-radio-group v-if="$route.params.selected == 0" column class="radio-group" v-model="selected">
      <v-radio class="radio" label="90番目の女が見つからんねん" value="0"></v-radio>
      <v-radio class="radio" label="東京に女がおらんねん" value="1"></v-radio>
      <v-radio class="radio" label="Tinderやってると疑われてるねん" value="2"></v-radio>
      <v-radio class="radio" label="今日も朝帰りしてしもてん" value="3"></v-radio>
    </v-radio-group>

    <v-radio-group v-if="$route.params.selected == 1"  column class="radio-group" v-model="selected">
      <v-radio class="radio" label="仕事辞めたいねん" value="0"></v-radio>
      <v-radio class="radio" label="貢献できる自信ないねん" value="1"></v-radio>
      <v-radio class="radio" label="社長が嫌いやねん" value="2"></v-radio>
      <v-radio class="radio" label="通勤だるいねん" value="3"></v-radio>
    </v-radio-group>

    <v-radio-group v-if="$route.params.selected == 2"  column class="radio-group" v-model="selected">
      <v-radio class="radio" label="友達が少ないねん" value="0"></v-radio>
      <v-radio class="radio" label="あああ" value="1"></v-radio>
      <v-radio class="radio" label="Tinderやってると疑われてるねん" value="2"></v-radio>
      <v-radio class="radio" label="今日も朝帰りしてしもてん" value="3"></v-radio>
    </v-radio-group>

    <v-radio-group v-if="$route.params.selected == 3"  column class="radio-group" v-model="selected">
      <v-radio class="radio" label="浪費癖がすごいねん" value="0"></v-radio>
      <v-radio class="radio" label="s" value="1"></v-radio>
      <v-radio class="radio" label="s" value="2"></v-radio>
      <v-radio class="radio" label="d" value="3"></v-radio>
    </v-radio-group>
    <v-btn class="submit" @click="submit">次へ</v-btn>
  </div>
</template>

<script>
export default {
  name: 'itsuki-select-content',
  data() {

    return {

    }
  },
  methods: {
    submit() {
      this.$router.push({name: 'result'})
    }
  },
}
</script>
<style>
  .select-page {
    background-color: #EBE568;
    min-height: 80vh;
  }
</style>
