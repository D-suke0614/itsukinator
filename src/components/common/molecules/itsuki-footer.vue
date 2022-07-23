<template>
  <v-footer padless color="#897DD8">
    <v-col
      class="text-center"
      cols="12"
    >
      @ {{ new Date().getFullYear() }} - seed-k
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'itsuki-footer',

  data() {
    return {

    }
  },
}
</script>

<style>
  .text-center {
    color: #fff;
    font-family: "Sawarabi Mincho"; 
  }
</style>
