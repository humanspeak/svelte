import { flushSync } from 'svelte';
import { test } from '../../test';

export default test({
	compileOptions: {
		cssHash: () => 'svelte-xyz'
	},
	html: `<p class="active dimmed svelte-xyz">child</p>`,
	test({ assert, component, target }) {
		component.active = false;
		flushSync();

		assert.htmlEqual(target.innerHTML, `<p>child</p>`);

		component.active = true;
		flushSync();

		assert.htmlEqual(target.innerHTML, `<p class="active dimmed svelte-xyz">child</p>`);
	}
});
