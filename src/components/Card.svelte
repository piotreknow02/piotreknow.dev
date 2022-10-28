<script>

</script>

<style>
    .card {
        z-index: 100;
        position: absolute;
        top: 25vh;
        right: 5vw;
        width: 30vw;
        border-radius: 18px;
        padding: 4vmin;
        background-color: var(--c-transparent);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
    }
</style>

<div class="card">
    <slot/>
</div>