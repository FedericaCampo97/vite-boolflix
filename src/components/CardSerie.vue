<script>
export default {
    props: ['serie']
}
</script>
<template>
    <div>
        <img src="" alt="">
        <span class="m-5">{{ serie.name }} - {{ serie.original_name }} -
            <img height="20" :src="'src/assets/img/' + serie.original_language + '.png'" alt="">
            - {{
                serie.vote_average
            }}</span>
    </div>
</template>