<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="nav">
	<h1>XPS</h1>
</nav>
{@render children()}

<style>
	.nav {
		background-color: rgb(255, 230, 0);
		height: 4rem;
	}
</style>