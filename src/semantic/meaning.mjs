import { semantic_is } from './is.mjs';
export function semantic_meaning(parsed, context) {
    let copy = json_copy(context);
    if (semantic_is(parsed, copy)) {
    }
}