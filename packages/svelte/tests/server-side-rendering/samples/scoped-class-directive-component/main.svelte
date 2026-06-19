<script>
	import Child from './Child.svelte';

	const internalClass = ['active', { dimmed: true }];
</script>

<Child scoped:class="active" scoped:internalClass={internalClass} />
<Child class="plain" />

<style>
	.active {
		color: green;
	}

	.dimmed {
		opacity: 0.5;
	}
</style>
