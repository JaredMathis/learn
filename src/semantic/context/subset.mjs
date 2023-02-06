import { semantic_context_consistency_check } from './consistency/check.mjs';
import { for_each } from './../../../node_modules/m00/src/for/each.mjs';
import { property_initialize } from './../../../node_modules/m00/src/property/initialize.mjs';
import { arguments_assert } from './../../../node_modules/m00/src/arguments/assert.mjs';
import { defined_is } from './../../../node_modules/m00/src/defined/is.mjs';
import { string_is } from './../../../node_modules/m00/src/string/is.mjs';
export function semantic_context_subset(context, subset, superset) {
    arguments_assert(arguments, defined_is, string_is, string_is);
    for_each([
        subset,
        superset
    ], s => {
        property_initialize(context, s, {});
    });
    context[superset][subset] = true;
    semantic_context_consistency_check(context);
}