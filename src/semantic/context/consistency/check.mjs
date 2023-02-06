import { assert } from './../../../../node_modules/m00/src/assert.mjs';
import { list_single } from './../../../../node_modules/m00/src/list/single.mjs';
import { property_has } from './../../../../node_modules/m00/src/property/has.mjs';
import { semantic_parse } from './../../parse.mjs';
import { for_each_key } from './../../../../node_modules/m00/src/for/each/key.mjs';
export function semantic_context_consistency_check(context) {
    for_each_key(context, set_name => {
        if (set_name.startsWith('not (')) {
            let parsed = semantic_parse(set_name);
            assert(parsed.length === 2);
            let negated = list_single(parsed[1]);
            if (property_has(context, negated)) {
                
            }
        }
    });
}