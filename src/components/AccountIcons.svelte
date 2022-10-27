<script>
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

<style>
	.icons {
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		font-size: 4rem;
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