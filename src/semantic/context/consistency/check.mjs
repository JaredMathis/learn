import { assert } from './../../../../node_modules/m00/src/assert.mjs';
import { list_single } from './../../../../node_modules/m00/src/list/single.mjs';
import { property_has } from './../../../../node_modules/m00/src/property/has.mjs';
import { semantic_parse } from './../../parse.mjs';
import { for_each_key } from './../../../../node_modules/m00/src/for/each/key.mjs';
import { list_add } from 'm00/src/list/add.mjs';
export function semantic_context_consistency_check(context) {
    let errors = [];
    for_each_key(context, set_name => {
        if (set_name.startsWith('not (')) {
            let parsed = semantic_parse(set_name);
            assert(parsed.length === 2);
            let unnegated = list_single(parsed[1]);
            if (property_has(context, unnegated)) {
                for_each_key(context[set_name], subset_name => {
                    if (context[unnegated][subset_name]) {
                        list_add(errors, `${subset_name} cannot be ${unnegated} and not ${unnegated} at the same time`)
                    }
                }) 
            }
        }
    });
    return errors;
}