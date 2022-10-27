<script>
    export let src;
    export let alt;
</script>

<style>
    .img-wrapper {
        width: 100vw;
    }
    img {
        max-width: 100vw;
        width: 100vw;
        max-height: 2000px;
        object-fit: cover;
    }
</style>

<div class="img-wrapper">
    <img src={src} alt={alt}>
</div>