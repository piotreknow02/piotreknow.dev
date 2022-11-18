<script>
    export let src;
    export let alt;
</script>

<style lang="scss">
    .img-wrapper {
        width: 100vw;
    }
    img {
        max-width: 100vw;
        width: 100vw;
        max-height: 2000px;
        object-fit: cover;
    }
    @media screen and (max-width: 1200px) {
        img {
            min-width: 200vw;
            max-width: 400vw;
        }
    }
    @media screen and (max-width: 450px) {
        img {
            min-width: 300vw;
            max-width: 600vw;
        }
    }
</style>

<div class="img-wrapper">
    <img src={src} alt={alt}>
</div>