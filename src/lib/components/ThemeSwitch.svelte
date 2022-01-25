<script>
    import { onMount } from "svelte";

    $: isDark = true
    onMount(() => {
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) isDark = false
    })
</script>

<svelte:head>
    <link rel="stylesheet" href={isDark ? "/themes/vardark.css" : "/themes/varlight.css"}>
    <link rel="stylesheet" href="/themes/var.css">
</svelte:head>
<div class="switch" on:click={() => isDark = !isDark}>
    <i class={"fas " + (isDark ? "fa-moon" : "fa-sun")}></i>
</div>

<style>
    .switch {
        border: 2px solid var(--text-color);
        padding: 5px;
        border-radius: 9999px;
        margin: 0px;
    }
    i {
        margin: 0px;
        padding: 0px;
        display: grid;
        place-items: center;
        color: var(--text-color);
    }
</style>