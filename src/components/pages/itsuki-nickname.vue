<template>
  <div class="nickname-page">
    <h2 class="label">ニックネームを入力しろやねん！</h2>
    <v-form class="form">
      <!-- validationは後で実装 -->
      <v-text-field v-model="nickname" required :counter="15" :error-messages="nicknameError" label="ニックネーム" solo></v-text-field>
      <div class="button-container">
        <v-btn
          class="submit btn white--text text-h5 font-weight-black"
          @click="submit"
          color="#897DD8"
        >
          次  へ
        </v-btn>
        <v-btn
          class="btn"
          @click="clear"
        >
          クリア
        </v-btn>
      </div>
      
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
      this.$router.push({name: 'select-category'})
    },
    clear() {
      return this.nickname = ''
    },
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
  .nickname-page {
    background-color: #6BE489;
    min-height: 90vh;
  }
  .label {
    text-align: center;
    color: white;
    padding-top: 100px;
    font-family: bold;
    font-size: 50px;
    margin-bottom: 30px;
  }
  .form {
    margin-top: 20vh;
    margin-right: 25%;
    margin-left: 25%;
  }
  .submit {
    margin-right: 20px;
  }
  .button-container {
    display: flex;
    justify-content: center;
  }
  .btn {
    height: 50px;
  }
  .input-container {
    width: 50%;
  }
</style>
