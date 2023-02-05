import { defined_is } from './../../node_modules/m00/src/defined/is.mjs';
import { semantic_context_subset } from './context/subset.mjs';
import { arguments_assert } from './../../node_modules/m00/src/arguments/assert.mjs';
import { list_is } from './../../node_modules/m00/src/list/is.mjs';
export function semantic_is(parsed, context) {
    arguments_assert(arguments, list_is, defined_is);
    if (parsed.length !== 3) {
        return false;
    }
    const p0 = parsed[0];
    if (!list_is(p0)) {
        return false;
    }
    if (parsed[1] !== 'is') {
        return false;
    }
    const p2 = parsed[2];
    if (!list_is(p2)) {
        return false;
    }
    semantic_context_subset(context, p0, p2);
}