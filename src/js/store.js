import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie',
    api_key: '74ec4e13e23b08e73924c0a4a6ae2702',
    query: '',
    films: [],


    fetchMovies(url) {
        axios.get(url)
            .then(response => {
                this.films = response.data.results
                console.log(this.films);
            })
            .catch(err => console.error(err));
    }
})

