import { list_is } from './../../node_modules/m00/src/list/is.mjs';
import { merge } from './../../node_modules/m00/src/merge.mjs';
export function semantic_ternary(parsed, middle, context) {
    if (parsed.length !== 3) {
        return false;
    }
    let p0 = parsed[0];
    if (!list_is(p0)) {
        return false;
    }
    if (parsed[1] !== middle) {
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