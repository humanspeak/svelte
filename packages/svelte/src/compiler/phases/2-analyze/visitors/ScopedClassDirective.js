/** @import { AST } from '#compiler' */
/** @import { Context } from '../types' */
import * as e from '../../../errors.js';
import { get_attribute_chunks } from '../../../utils/ast.js';
import { mark_subtree_dynamic } from './shared/fragment.js';

/**
 * @param {AST.ScopedClassDirective} node
 * @param {Context} context
 */
export function ScopedClassDirective(node, context) {
	if (node.modifiers.length > 0) {
		e.scoped_directive_invalid_modifier(node);
	}

	if (node.value === true) {
		e.scoped_directive_missing_value(node);
	}

	mark_subtree_dynamic(context.path);

	context.next();

	for (const chunk of get_attribute_chunks(node.value)) {
		if (chunk.type !== 'ExpressionTag') continue;

		node.metadata.expression.merge(chunk.metadata.expression);
	}
}
