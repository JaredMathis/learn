import { arguments_assert } from './../../../../../node_modules/m00/src/arguments/assert.mjs';
import { defined_is } from './../../../../../node_modules/m00/src/defined/is.mjs';
import { list_is } from './../../../../../node_modules/m00/src/list/is.mjs';
import { string_is } from './../../../../../node_modules/m00/src/string/is.mjs';
import { for_each } from './../../../../../node_modules/m00/src/for/each.mjs';
import { semantic_context_subset } from './../../subset.mjs';
export function semantic_context_subset_for_each(context, subsets, superset) {
    arguments_assert(arguments, defined_is, list_is, string_is);
    for_each(subsets, s => {
        semantic_context_subset(context, s, superset);
    });
}