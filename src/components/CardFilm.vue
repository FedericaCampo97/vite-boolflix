<script>
export default {
    props: ['film']
}
</script>
<template>
    <div>
        <img src="" alt="">
        <span class="m-5">{{ film.title }} - {{ film.original_title }} - {{ film.original_language }} - {{
            film.vote_average
        }}</span>
    </div>
</template>