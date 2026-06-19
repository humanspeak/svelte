<script>
	let { class: className = '', internalClass = '' } = $props();
</script>

<div class={['class-prop', className]}>class prop</div>
<div class={['alias-prop', internalClass]}>alias prop</div>
