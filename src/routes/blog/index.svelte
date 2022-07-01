<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/blog.json');
		const { blogs } = await res.json();

		if (res.ok) {
			return {
				props: {
					blogs
				}
			};
		}
		return {
			status: res.status,
			error: new Error('could not fetch data')
		};
	}
</script>

<script>
	export let blogs;
</script>

{#each blogs as blog}
	<div>{blog.name}</div>
{/each}
<p>This is blog page</p>
