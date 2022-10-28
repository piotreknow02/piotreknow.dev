<script>
	let contacts = [
		{
			email: "email",
			link: "mailto:kontakt@piotreknow.ml",
			icon: "fa-regular fa-envelope"
		},
		{
			name: "telegram",
			link: "https://t.me/piotreknow",
			icon: "fa-brands fa-telegram"
		},
		{
			name: "discord",
			link: "https://discordapp.com/users/piotreknow#7252",
			icon: "fa-brands fa-discord"
		}
	]
	let accounts = [
		{
			name: "github",
			link: "https://github.com/piotreknow02",
			icon: "fa-brands fa-github"
		},
		{
			name: "try hack me",
			link: "https://tryhackme.com.p/piotreknow",
			icon: "fa-solid fa-robot"
		},
		{
			name: "stack overflow",
			link: "https://stackoverflow.com/users/16216153",
			icon: "fa-brands fa-stack-overflow"
		},
	]
</script>

<style lang="scss">
	nav {
		z-index: 1000;
		position: fixed;
		display: flex;
		width: 100vw;
		gap: 8rem;
		align-items: center;
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		background-color: var(--c-transparent);
	}

	.link {
		color: var(--t-subdue);
		display: block;
		text-decoration: none;
		font-size: var(--f-d1);
		text-transform: uppercase;
		padding-top: 0.75em;
		padding-bottom: 0.75em;
	}

	.link:hover,
	.link:focus {
		color: var(--t-active);
	}

	.monogram {
		display: flex;
		font-size: xx-large;
		font-family: 'MrRobot', sans-serif;
		align-items: center;
		padding-left: 6rem;
		justify-content: center;
		width: 2em;
		height: 2em;
		margin-right: 1rem;
		color: var(--c-red);
		font-weight: normal;
	}

	.contacts {
		display: flex;
		gap: 0.75em;
		margin-left: auto;
	}

	.contact {
		font-size: 2vmin;
		padding: 1vmin;
		display: block;
	}

	.socialIcon {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		fill: var(--t-subdue);
		transition: fill linear 150ms;
	}

	.socialIcon:hover {
		fill: var(--t-active);
	}
</style>

<nav>
	<a class="link" href="/">
		<div class="monogram">piotreknow</div>
	</a>
	<a class="link" href="/projects/">Blog</a>
	<a class="link" href="/about/">About</a>
	<div class="contacts">
		{#each contacts as contact}
			<a class="contact" href={contact.link}>
				<i class={contact.icon} title={contact.name}>
			</a>
		{/each}
			
	</div>
</nav>

