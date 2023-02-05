import { list_single } from './../../node_modules/m00/src/list/single.mjs';
import { defined_is } from './../../node_modules/m00/src/defined/is.mjs';
import { semantic_context_subset } from './context/subset.mjs';
import { arguments_assert } from './../../node_modules/m00/src/arguments/assert.mjs';
import { list_is } from './../../node_modules/m00/src/list/is.mjs';
import { semantic_ternary } from './ternary.mjs';
import { for_each } from 'm00/src/for/each.mjs';
export function semantic_is(parsed, context) {
    arguments_assert(arguments, list_is, defined_is);
    let inner = {};
    if (!semantic_ternary(parsed, ['is', 'are'], inner)) {
        return false;
    }
    let {p0,p2} = inner;
    p0 = list_single(p0);
    if (p2.length === 1) {
        p2 = list_single(p2);
        semantic_context_subset(context, p0, p2);
        return true;
    }

    inner = {};
    if (semantic_ternary(p2, ['and'], inner)) {
        for_each(['0', '2'], i => {
            semantic_context_subset(context, p0, list_single(inner['p' + i]));
        });
        return true;
    }

    return false;
}