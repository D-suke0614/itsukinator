<template>
  <v-footer padless color="white">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>itsuki.com</strong>
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
