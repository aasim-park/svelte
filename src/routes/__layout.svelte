<script>
	import Footer from '$lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
</script>

<header>
	<Navbar />
</header>

<main>
	<slot />
</main>

<footer>
	<Footer />
</footer>
