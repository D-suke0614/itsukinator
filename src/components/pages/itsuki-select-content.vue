<template>
    <div class="select-page">
        <!-- {{ $route.params.selected }} -->
        <h2 id="title2" class="label">悩みはなんやねん？</h2>
        <v-radio-group column class="radio-group" v-model="selectedContent">
            <v-radio
                class="text-large"
                v-for="item in items"
                :key="item.id"
                :label="item.content"
                :value="item.value"
                color="#897DD8"
            >
            <template v-slot:label>
              <div class="radio text-large"><strong class="white--text">{{ item.content }}</strong></div>
            </template>
            </v-radio>
        </v-radio-group>
        <div class="select-content-button-container">
            <v-btn class="submit btn white--text text-h6 font-weight-black" @click="submit" color="#897DD8">次へ</v-btn>
        </div>
    </div>
</template>

<script>
import radioContents from "./values/selectValue";
export default {
    name: "itsuki-select-content",
    data() {
        return {
            selectedContent: "",
            items: [],
        };
    },
    methods: {
        submit() {
            this.$router.push({
                name: "result",
                params: { selectedContent: this.selectedContent },
            });
        },
    },
    mounted() {
        const selected = this.$route.params.selected;
        switch (selected) {
            case "0":
                this.items = radioContents[0].contents;
                break;
            case "1":
                this.items = radioContents[1].contents;
                break;
            case "2":
                this.items = radioContents[2].contents;
                break;
            case "3":
                this.items = radioContents[3].contents;
                break;
        }
    },
};
</script>
<style>
.select-page {
    background-color: #ebe568;
    min-height: 90vh;
}
.label {
    text-align: center;
    color: white;
    padding-top: 100px;
    font-family: bold;
    font-size: 70px;
  }
  .select-content-button-container {
    text-align: center;
  }
  .text-large {
    font-size: 40px;
  }
  .radio-group {
    height: 50vh;
    background-color: red;
    display: flex;
  }
</style>
