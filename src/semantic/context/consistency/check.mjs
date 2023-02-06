import { for_each } from './../../../../node_modules/m00/src/for/each.mjs';
import { for_each_key } from './../../../../node_modules/m00/src/for/each/key.mjs';
import { log } from './../../../../node_modules/m00/src/log.mjs';
import { list_add } from './../../../../node_modules/m00/src/list/add.mjs';
import { assert } from './../../../../node_modules/m00/src/assert.mjs';
import { list_single } from './../../../../node_modules/m00/src/list/single.mjs';
import { property_has } from './../../../../node_modules/m00/src/property/has.mjs';
import { semantic_parse } from './../../parse.mjs';
import graphlib from '@dagrejs/graphlib';
export function semantic_context_consistency_check(context) {
    var directed = new graphlib.Graph();
    for_each(context, (superset, superset_name) => {
        for_each_key(superset, subset_name => {
            directed.edge(subset_name, superset_name);
        });
    });
    let distances = graphlib.alg.dijkstraAll(g);
    console.log(distances);
    let errors = [];
    for_each_key(context, set_name => {
        if (set_name.startsWith('not (')) {
            let parsed = semantic_parse(set_name);
            assert(parsed.length === 2);
            let unnegated = list_single(parsed[1]);
            if (property_has(context, unnegated)) {
                for_each_key(context[set_name], subset_name => {
                    if (context[unnegated][subset_name]) {
                        list_add(errors, `${ subset_name } cannot be ${ unnegated } and not ${ unnegated } at the same time`);
                    }
                });
            }
        }
    });
    return errors;
}