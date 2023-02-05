import { arguments_assert } from './../../node_modules/m00/src/arguments/assert.mjs';
import { defined_is } from './../../node_modules/m00/src/defined/is.mjs';
import { list_is } from './../../node_modules/m00/src/list/is.mjs';
import { merge } from './../../node_modules/m00/src/merge.mjs';
export function semantic_binary(parsed, prefix, context) {
    arguments_assert(arguments, list_is, list_is, defined_is);
    if (parsed.length !== 2) {
        return false;
    }
    let p0 = parsed[0];
    if (!prefix.includes(p0)) {
        return false;
    }
    let p1 = parsed[1];
    if (!list_is(p1)) {
        return false;
    }
    merge(context, {
        p0,
        p1
    });
    return true;
}