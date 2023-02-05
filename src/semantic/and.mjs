import { semantic_ternary } from './ternary.mjs';
import { for_each } from './../../node_modules/m00/src/for/each.mjs';
export function semantic_and(parsed, if_parse) {
    let context = {};
    if (semantic_ternary(parsed, ['and'], context)) {
        for_each([
            '0',
            '2'
        ], i => {
            if_parse(inner['p' + i]);
        });
        return true;
    }
}