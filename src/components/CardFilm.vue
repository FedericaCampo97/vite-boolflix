<script>
export default {
    props: ['film']
}
</script>
<template>
    <div>
        <img src="https://img.illibraio.it/images/9788893675680_92_310_0_75.jpg" alt="">
        {{ film.title }}
    </div>
</template>