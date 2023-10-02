<script>
export default {
    props: ['film']
}
</script>
<template>
    <div class="p-3 block_card">
        <img :src="'https://image.tmdb.org/t/p/w500' + film.poster_path" alt="" style="width: 100%" class="film_img">
        <div class="card_titol p-5">
            <ul>
                <li><span>Titolo:</span> {{ film.title }}</li>
                <li><span>Titolo originale:</span> {{ film.original_title }}</li>
                <li><span>Voto:</span> {{ film.vote_average }}</li>
                <li><span>Overview:</span> {{ film.overview }}</li>
            </ul>
        </div>
    </div>
</template>