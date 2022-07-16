<template>
  <div>
    <v-form class="form">
      <v-text-field label="Nickname"></v-text-field>
      <v-btn
      class="submit"
      @click="submit"
      >
        Next
      </v-btn>
      <v-btn
      @click="clear"
      >
        Clear
      </v-btn>
    </v-form>
  </div>
</template>

<script>
// import { required } from "vuelidate/lib/validators"
export default {
  name: 'itsuki-nickname',

  data() {
    return {

    }
  },
}
</script>

<style>
  .form {
    margin-top: 20vh;
    margin-right: 25%;
    margin-left: 25%;
  }
  .submit {
    margin-right: 20px;
  }
</style>
