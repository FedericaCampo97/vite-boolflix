<script>
import { store } from "./js/store";
import cardFilm from './components/CardFilm.vue';
import cardSerie from './components/CardSerie.vue';
export default {
  components: {
    cardFilm,
    cardSerie
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
      const url_series = this.store.url_series + '?api_key=' + this.store.api_key + '&query=' + query
      this.store.fetchMovies(url)
      this.store.fetchSeries(url_series)
    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-black">
      <div class="container d-flex justify-content-between">
        <a class="navbar-brand titol" href="#">BOOLFLIX</a>
        <div class="input-group mb-3 mt-4 header_input">
          <input type="text" class="form-control" placeholder="Cerca un film" aria-describedby="button-addon1"
            v-model="store.query" @keyup.enter="filterFilms">
          +
        </div>
      </div>
    </nav>
  </header>

  <div>
    <div v-if="store.films.length > 0">
      <div class="container">
        <h5 class="mt-5">Films</h5>
        <div class="row d-flex flex-wrap">
          <cardFilm v-for="film in store.films" :film=film class="col-4"></cardFilm>
        </div>
      </div>
    </div>
    <div v-if="store.series.length > 0">
      <h5>Series</h5>
      <cardSerie v-for="serie in store.series" :serie=serie></cardSerie>
    </div>
  </div>
</template>

<style lang="scss">
@use './scss/style.scss'
</style>
