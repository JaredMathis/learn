import { arguments_assert } from './../../node_modules/m00/src/arguments/assert.mjs';
import { list_is } from './../../node_modules/m00/src/list/is.mjs';
export function semantic_is(parsed) {
    arguments_assert(arguments, list_is);
    if (parsed.length !== 3) {
        return false;
    }
    if (!list_is(parsed[0])) {
        return false;
    }
    if (parsed[1] !== 'is') {
        return false;
    }
    if (!list_is(parsed[2])) {
        return false;
    }
}