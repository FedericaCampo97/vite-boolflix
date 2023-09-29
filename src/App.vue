<script>
import { store } from "./js/store";
import cardFilm from './components/CardFilm.vue';
export default {
  components: {
    cardFilm
  },
  data() {
    return {
      store
    }
  },
  created() {
    const query = 'ritorno+al+futuro'
    const url = this.store.base_url + '?api_key=' + this.store.api_key + '&query=' + query
    this.store.fetchMovies(url)
  },
  methods: {
    filterFilms() {
      const query = this.store.query.replace(' ', '+')
      const url = this.store.base_url + '?api_key=' + this.store.api_key + '&query=' + query
      this.store.fetchMovies(url)
    }
  }
}
</script>

<template>
  <div class="input-group mb-3 mt-4 container">
    <input type="text" class="form-control" placeholder="Cerca un film" aria-describedby="button-addon1"
      v-model="store.query">
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" @click="filterFilms">VAI</button>
  </div>
  <div>
    <cardFilm v-for="film in store.films" :film=film></cardFilm>
  </div>
</template>

<style lang="scss">
@use './scss/style.scss'
</style>
