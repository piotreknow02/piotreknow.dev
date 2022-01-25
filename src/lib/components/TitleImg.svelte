<script>
    export let img;
    export let title;
</script>

<div class="img-container">
    <img src={img} alt={title}>
    <h1>{title}</h1>
</div>

<style>
    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-height: 60vh;
        overflow: hidden;
    }
    img {
        min-width: 100vw;
        transition: all 1s ease;
        filter: brightness(0.4);
    }
    img:hover {
        filter: brightness(0.2);
        
    }
    h1 {

    }
</style>