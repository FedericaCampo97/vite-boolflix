<script>
import { store } from "../js/store";
import cardFilm from './CardFilm.vue';
export default {
    components: {
        cardFilm
    },
    data() {
        return {
            store,
            films: null
        }
    },
    created() {
        console.log(this.store)
    }
}
</script>


<template>
    <div>
        <cardFilm v-for="film in films" :film=film></cardFilm>
    </div>
</template>
