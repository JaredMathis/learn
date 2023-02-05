import { arguments_assert } from './../../node_modules/m00/src/arguments/assert.mjs';
import { string_is } from './../../node_modules/m00/src/string/is.mjs';
import { defined_is } from './../../node_modules/m00/src/defined/is.mjs';
import { list_is } from './../../node_modules/m00/src/list/is.mjs';
import { merge } from './../../node_modules/m00/src/merge.mjs';
export function semantic_ternary(parsed, middle, context) {
    arguments_assert(arguments, list_is, list_is, defined_is);
    if (parsed.length !== 3) {
        return false;
    }
    let p0 = parsed[0];
    if (!list_is(p0)) {
        return false;
    }
    if (!middle.includes(parsed[1])) {
        return false;
    }
    let p2 = parsed[2];
    if (!list_is(p2)) {
        return false;
    }
    merge(context, {
        p0,
        p2
    });
    return true;
}