<script>
export default {
    props: ['film']
}
</script>
<template>
    <div>
        <img src="" alt="">
        <span class="m-5">{{ film.title }} - {{ film.original_title }} -
            <img height="20" :src="'src/assets/img/' + film.original_language + '.png'" alt="">
            - {{
                film.vote_average
            }}</span>
    </div>
</template>