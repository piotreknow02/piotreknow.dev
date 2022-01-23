<script>
    export let title
    export let desc
    export let name
</script>

<svelte:head>
    <title>Piotreknow: {title}</title>
    <meta name="title" content={"Piotreknow: " + title}/>
    <meta name="description" content={desc}/>
    <meta name="url" content={"https://piotreknow.ml/" + name}/>

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website"/>
    <meta property="og:url" content={"https://piotreknow.ml/" + name}/>
    <meta property="og:title" content={"Piotreknow: " + title}/>
    <meta property="og:description" content={desc}/>
    <meta property="og:image" content=""/>

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content={"https://piotreknow.ml/" + name}/>
    <meta property="twitter:title" content={"Piotreknow: " + title}/>
    <meta property="twitter:description" content={desc}/>
    <meta property="twitter:image" content=""/>
</svelte:head>