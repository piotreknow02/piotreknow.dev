<script>
    import NavLink from "$lib/components/NavLink.svelte";
    import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
</script>

<nav>
    <ul>
        <li><a href="/"><h1>Piotreknow</h1></a></li>
        <NavLink name="About me" href="/about"/>
        <NavLink name="Programming" href="/programming"/>
        <NavLink name="Cyber Security" href="/cybersec"/>
        <NavLink name="Graphics" href="/graphics"/>
        <NavLink name="Photography" href="https://www.instagram.com/piotreknow_photography/"/>
        <li><ThemeSwitch/></li>
    </ul>
</nav>
<div class="spacer"></div>

<style>
    nav {
        z-index: 100;
        position: fixed;
        width: 100%;
        height: 4.5em;
        background-color: var(--bg-color);
        margin: 0px;
        padding: 0px;
        border-radius: 0px 0px 15px 15px;
        -webkit-box-shadow: -1px 4px 19px 0px var(--shadow);
        -moz-box-shadow: -1px 4px 19px 0px var(--shadow);
        box-shadow: -1px 4px 19px 0px var(--shadow);
    }
    ul {
        margin: 0px;
        padding: 0px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
        background-color: transparent;
    }
    a {
        text-decoration: none;
    }
    .spacer {
        height: calc(4.5em - 15px);
    }

    /* gradient */
    li a h1 {
        background: var(--gradient);
        background-size: 800% 800%;
        -webkit-background-clip: text;
        background-clip: text;
        -moz-background-clip: text;
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