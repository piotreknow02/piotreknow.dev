<script>
	let mobileMenu

	function toggleMenu() {
		scrollTo(0, 0)
		mobileMenu.classList.toggle("disabled")
	} 
</script>

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
		transition: all 1s ease;
	}
	
	.menu {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 8rem;
		transition: all 1s ease;
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
	.hamburger {
		display: none;
	}
	.line {
		height: 3px;
		width: 30px;
		background-color: white;
	}
	.mobile {
		height: 0px;
	}
	@media screen and (max-width: 1000px) {
		.hamburger {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			width: 30px;
			height: 30px;
		}
		.desktop {
			display: none;
		}
		.mobile {
			padding-top: 15vh;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
		.middle-icon {
			transform: none;
		}
		.menu {
			height: 80vh;
		}
		.disabled {
			padding: 0px;
			margin: 0px;
			height: 0px;
			transform: translate(0px, -500px);
		}
	}
</style>

<nav>
	<a class="link noshadow" href="/">
		<div class="monogram">piotreknow</div>
	</a>
	<div role="button" tabindex="0" on:click={toggleMenu} class="hamburger">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</div>
	<a class="desktop middle-icon" href="https://github.com/piotreknow02">
		<i class="fa-brands fa-github" title="github"></i>
	</a>
	<div class="desktop menu">
		<a class="link" href="/blog/">Blog</a>
		<a class="link" href="/about/">About</a>
		<a class="link" href="/wecan">w<b>ec</b>an</a>
	</div>
</nav>
<div bind:this={mobileMenu} class="disabled mobile menu">
	<a class="link" href="/blog/">Blog</a>
	<a class="link" href="/about/">About</a>
	<a class="link" href="/wecan">w<b>ec</b>an</a>
	<a class="middle-icon" href="https://github.com/piotreknow02">
		<i class="fa-brands fa-github" title="github"></i>
	</a>
</div>

