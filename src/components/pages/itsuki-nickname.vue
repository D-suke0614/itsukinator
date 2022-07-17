<template>
  <div class="page">
    <h2 class="label">ニックネームをニックネームを入力しろやねん！</h2>
    <v-form class="form">
      <!-- validationは後で実装 -->
      <v-text-field v-model="nickname" required :counter="15" :error-messages="nicknameError" label="Nickname"></v-text-field>
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
import { validationMixin } from 'vuelidate'
import { required } from "vuelidate/lib/validators"
export default {
  name: 'itsuki-nickname',
  mixins: [validationMixin],

  data() {
    return {
      nickname: '',
    }
  },
  validations: {
    nickname: {
      required,
    }
  },
  methods: {
    submit() {
      this.$router.push({path: '/select'})
    }
  },
  computed: {
    nicknameError() {
      const errors = []
      if (!this.$v.nickname.$dirty) return errors
      !this.$v.ActivityName.required && errors.push('入力せや！いつきがおいかりやねん！')
      return errors
    }
  }
}
</script>

<style>
  .page {
    background-color: greenyellow;
    height: 80vh;
  }
  .label {
    text-align: center;
    color: white;
    padding-top: 100px;
    font-family: bold;
    font-size: 50px;
  }
  .form {
    margin-top: 20vh;
    margin-right: 25%;
    margin-left: 25%;
  }
  .submit {
    margin-right: 20px;
  }
</style>
