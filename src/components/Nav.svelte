<style lang="scss">
	nav {
		z-index: 1000;
		position: fixed;
		display: flex;
		width: 100vw;
		align-items: center;
		justify-content: space-between;
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		background-color: var(--c-transparent);
		padding: 0px 5vmin 0px 0px;
		box-sizing: border-box;
	}
	
	.menu {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 8rem;
	}

	.link {
		transition: all 1s ease;
		color: var(--t-active);
		display: block;
		text-decoration: none;
		font-size: var(--f-d1);
		text-transform: uppercase;
		padding-top: 0.75em;
		padding-bottom: 0.75em;
		box-shadow: 0px 0px 0px var(--t-active);
	}

	.link:hover,
	.link:focus {
		font-size: 1,5em;
		box-shadow: 3px 3px 5px var(--t-active);
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

	.middle-icon {
		transform: translate(300%, 0%);
	}

	i {
		font-size: 3em;
	}
</style>

<nav>
	<a class="link noshadow" href="/">
		<div class="monogram">piotreknow</div>
	</a>
	<a class="middle-icon" href="https://github.com/piotreknow02">
		<i class="fa-brands fa-github" title="github"></i>
	</a>
	<div class="menu">

		<a class="link" href="/blog/">Blog</a>
		<a class="link" href="/about/">About</a>
		<a class="link" href="/wecan">w<b>ec</b>an</a>
	</div>
</nav>

