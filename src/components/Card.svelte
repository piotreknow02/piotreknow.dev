<script>

</script>

<style>
    .card {
        border-radius: var(--border);
        padding: 4vmin;
        background-color: var(--c-transparent);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
    }
</style>

<div class="card">
    <slot/>
</div>