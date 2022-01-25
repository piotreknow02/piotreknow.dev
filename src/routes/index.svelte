<script context="module">
	import TitleImg from "$lib/components/TitleImg.svelte";
	import profile from "$lib/images/my_profile.jpg"
	export const prerender = true;
</script>

<section id="title">
	<TitleImg title="Piotreknow" img={profile}/>
</section>

<style>

</style>
