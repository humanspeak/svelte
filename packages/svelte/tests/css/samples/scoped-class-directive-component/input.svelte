<script>
	import Child from './Child.svelte';

	const classes = ['active', { dimmed: true }];
</script>

<Child scoped:class="active" scoped:internalClass={classes} />
<Child class="plain" />
<div class="active">native</div>

<style>
	.active {
		color: green;
	}

	.dimmed {
		opacity: 0.5;
	}
</style>
