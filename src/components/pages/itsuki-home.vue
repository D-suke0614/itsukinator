<template>
  <div>
    <itsuki-header></itsuki-header>
    <h1 id="title">この世はいつきが全て！</h1>
    <v-img class="main-img" src="../../../public/himawaris.jpeg"></v-img>
    <itsukiFooter></itsukiFooter>
  </div>
</template>

<script>
import itsukiHeader from '../common/molecules/itsuki-header.vue'
import itsukiFooter from '../common/molecules/itsuki-footer.vue'

export default {
  name: 'itsuki-home',

  data() {
    return {

    }
  },
  components: {
    itsukiHeader,
    itsukiFooter,
  }
}
</script>

<style>
  #title {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .main-img {
    height: 80vh;
    margin-bottom: 30px;
    margin-right: 20%;
    margin-left: 20%;
  }
</style>
