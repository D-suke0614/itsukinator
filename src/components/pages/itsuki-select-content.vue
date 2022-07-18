<template>
    <div class="select-page">
        {{ $route.params.selected }}
        <h2>悩みはなんやねん？</h2>
        <v-radio-group column class="radio-group" v-model="selectedContent">
            <v-radio
                class="radio"
                v-for="item in items"
                :key="item.id"
                :label="item.content"
                :value="item.value"
            >
            </v-radio>
        </v-radio-group>
        <v-btn class="submit" @click="submit">次へ</v-btn>
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
    min-height: 80vh;
}
</style>
