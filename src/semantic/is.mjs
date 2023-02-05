import { list_add } from './../../node_modules/m00/src/list/add.mjs';
import { for_each } from './../../node_modules/m00/src/for/each.mjs';
import { semantic_and } from './and.mjs';
import { list_single } from './../../node_modules/m00/src/list/single.mjs';
import { defined_is } from './../../node_modules/m00/src/defined/is.mjs';
import { semantic_context_subset } from './context/subset.mjs';
import { arguments_assert } from './../../node_modules/m00/src/arguments/assert.mjs';
import { list_is } from './../../node_modules/m00/src/list/is.mjs';
import { semantic_ternary } from './ternary.mjs';
export function semantic_is(parsed, context) {
    arguments_assert(arguments, list_is, defined_is);
    let inner = {};
    if (!semantic_ternary(parsed, [
            'is',
            'are'
        ], inner)) {
        return false;
    }
    let {p0, p2} = inner;
    let subjects = [];
    if (!semantic_and(p0, part => {
            list_add(list_single(part));
        })) {
        subjects = [p0];
    }
    p0 = list_single(p0);
    if (p2.length === 1) {
        p2 = list_single(p2);
        for_each(subjects, s => {
            semantic_context_subset(context, s, p2);
        });
        return true;
    }
    if (semantic_and(p2, part => {
            for_each(subjects, s => {
                semantic_context_subset(context, s, list_single(part));
            });
        })) {
        return true;
    }
    return false;
}