<script>
    let accounts = [
		{
			email: "email",
			link: "mailto:kontakt@piotreknow.dev",
			icon: "fa-regular fa-envelope",
		},
		{
			name: "telegram",
			link: "https://t.me/piotreknow",
			icon: "fa-brands fa-telegram",
		},
		{
			name: "messenger",
			link: "https://m.me/piotrek.nowakowski.982",
			icon: "fa-brands fa-facebook-messenger",
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
		width: 90vw;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		font-size: 7vmin;
		gap: 2vmin;
		margin: 1vmax 0px;
	}
	.social-icon {
		display: block;
		/* width: 1.25rem;
		height: 1.25rem; */
		text-decoration: none !important;
		color: var(--t-fg);
		transition: fill linear 150ms;
	}
	i {
		text-decoration: none;
		padding: .6vmax;
	}
</style>

<div class="icons">
    {#each accounts as account}
        <a href={account.link}>
            <i class={"social-icon " + account.icon} title={account.name}>
        </a>
    {/each}
</div>