<template>
  <div>
    <itsuki-header></itsuki-header>
    <itsukiFooter></itsukiFooter>
  </div>
</template>

<script>
import itsukiHeader from './common/itsuki-header.vue'
import itsukiFooter from './common/itsuki-footer.vue'

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
