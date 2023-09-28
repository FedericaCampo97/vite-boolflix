<script>
import axios from 'axios';
import cardFilm from './CardFilm.vue';
export default {
    components: {
        cardFilm
    },
    data() {
        return {
            base_url: 'https://api.themoviedb.org/3/search/movie?api_key=74ec4e13e23b08e73924c0a4a6ae2702',
            films: null
        }
    },
    created() {
        axios.get(this.base_url + '&query=ritorno+al+futuro')
            .then(response => {
                this.films = response.data.results
                console.log(this.films)
            })
            .catch(err => console.error(err));
    }
}
</script>


<template>
    <div>
        <cardFilm v-for="film in films" :film=film></cardFilm>
    </div>
</template>
