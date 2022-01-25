<script>
    export let href
    export let name
</script>

<li>
    <a href={href}>
        <h3>{name}</h3>
    </a>
</li>

<style>
    a {
        text-decoration: none;
    }
    li a h3  {
        background: var(--gradient);
        background-size: 800% 800%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        -moz-text-fill-color: transparent;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;

        -webkit-animation: navgradient 21s ease infinite;
        -moz-animation: navgradient 21s ease infinite;
        -o-animation: navgradient 21s ease infinite;
        animation: navgradient 21s ease infinite;
    }

    @-webkit-keyframes navgradient {
        0%{background-position:10% 0%}
        50%{background-position:91% 100%}
        100%{background-position:10% 0%}
    }
    @-moz-keyframes navgradient {
        0%{background-position:10% 0%}
        50%{background-position:91% 100%}
        100%{background-position:10% 0%}
    }
    @-o-keyframes navgradient {
        0%{background-position:10% 0%}
        50%{background-position:91% 100%}
        100%{background-position:10% 0%}
    }
    @keyframes navgradient {
        0%{background-position:10% 0%}
        50%{background-position:91% 100%}
        100%{background-position:10% 0%}
    }
</style>