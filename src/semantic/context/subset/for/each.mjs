import { for_each } from './../../../../../node_modules/m00/src/for/each.mjs';
import { semantic_context_subset } from './../../subset.mjs';
export function semantic_context_subset_for_each(context, subsets, superset) {
    for_each(subjects, s => {
        semantic_context_subset(context, s, p2);
    });
}