<script>
	let { class: className = '', internalClass = '' } = $props();
</script>

<section class={className}>class prop</section>
<section class={internalClass}>alias prop</section>
