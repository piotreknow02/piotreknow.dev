<script>
    let accounts = [
		{
			name: "messenger",
			link: "https://m.me/piotrek.nowakowski.982",
			icon: "fa-brands fa-facebook-messenger",
		},
		{
			email: "email",
			link: "mailto:kontakt@piotreknow.ml",
			icon: "fa-regular fa-envelope",
		},
		{
			name: "telegram",
			link: "https://t.me/piotreknow",
			icon: "fa-brands fa-telegram",
		},
		{
			name: "discord",
			link: "https://discordapp.com/users/piotreknow#7252",
			icon: "fa-brands fa-discord",
		},
		{
			name: "try hack me",
			link: "https://tryhackme.com.p/piotreknow",
			icon: "fa-solid fa-robot",
		},
		{
			name: "stack overflow",
			link: "https://stackoverflow.com/users/16216153",
			icon: "fa-brands fa-stack-overflow",
		},
	]
</script>

<style>
	.icons {
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		font-size: 4rem;
	}
	.socialIcon {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		fill: var(--t-subdue);
		transition: fill linear 150ms;
	}
	i {
		padding: 6vmax;
	}
</style>

<div class="icons">
    {#each accounts as account}
        <a href={account.link}>
            <i class={account.icon} title={account.name}>
        </a>
    {/each}
</div>