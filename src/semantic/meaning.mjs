import { properties_replace } from './../../node_modules/m00/src/properties/replace.mjs';
import { json_copy } from './../../node_modules/m00/src/json/copy.mjs';
import { semantic_is } from './is.mjs';
export function semantic_meaning(parsed, context) {
    let copy = json_copy(context);
    if (semantic_is(parsed, copy)) {
        properties_replace(context, copy);
        return true;
    }
    return false;
}