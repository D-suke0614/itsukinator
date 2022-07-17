<template>
  <div>
    {{ $route.params.selected }}
    <h2>悩みはなんやねん？</h2>
    <v-form>
      <v-radio-group column class="radio-group" v-model="selected">
        <v-radio class="radio" label="90番目の女が見つからんねん" value="0"></v-radio>
        <v-radio class="radio" label="東京に女がおらんねん" value="1"></v-radio>
        <v-radio class="radio" label="Tinderやってると疑われてるねん" value="2"></v-radio>
        <v-radio class="radio" label="今日も朝帰りしてしもてん" value="3"></v-radio>
      </v-radio-group>
      <v-btn class="submit" @click="submit">次へ</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'itsuki-select-content',
}
</script>
