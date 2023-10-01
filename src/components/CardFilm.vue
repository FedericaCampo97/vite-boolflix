<script>
export default {
    props: ['film']
}
</script>
<template>
    <div class="p-3">
        <img :src="'https://image.tmdb.org/t/p/w500' + film.poster_path" alt="" style="width: 100%">
        <span class="m-5">{{ film.title }} - {{ film.original_title }} -
            <img height="20" :src="'src/assets/img/' + film.original_language + '.png'" alt="">
            - {{
                film.vote_average
            }}</span>
    </div>
</template>