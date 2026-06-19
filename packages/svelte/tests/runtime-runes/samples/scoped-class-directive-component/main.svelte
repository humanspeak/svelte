<script>
	import Child from './Child.svelte';

	let { active = true } = $props();
	let classes = $derived(active ? ['active', { dimmed: true }] : null);
</script>

<Child scoped:class={classes} />

<style>
	.active {
		color: green;
	}

	.dimmed {
		opacity: 0.5;
	}
</style>
