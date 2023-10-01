<script>
export default {
    props: ['serie']
}
</script>
<template>
    <div class="p-3 block_card">
        <img :src="'https://image.tmdb.org/t/p/w500' + serie.poster_path" alt="" style="width: 100%" class="film_img">
        <div class="card_titol p-5">
            <ul>
                <li><span>Titolo:</span> {{ serie.name }}</li>
                <li><span>Titolo originale: {{ serie.original_name }}</span></li>
                <li><span>Voto:</span> {{ serie.vote_average }}</li>
            </ul>
        </div>
    </div>
</template>