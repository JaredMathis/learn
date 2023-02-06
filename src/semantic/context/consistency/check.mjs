import { for_each } from './../../../../node_modules/m00/src/for/each.mjs';
import { for_each_key } from './../../../../node_modules/m00/src/for/each/key.mjs';
import { log } from './../../../../node_modules/m00/src/log.mjs';
import { list_add } from './../../../../node_modules/m00/src/list/add.mjs';
import { assert } from './../../../../node_modules/m00/src/assert.mjs';
import { list_single } from './../../../../node_modules/m00/src/list/single.mjs';
import { property_has } from './../../../../node_modules/m00/src/property/has.mjs';
import { semantic_parse } from './../../parse.mjs';
import graphlib from '@dagrejs/graphlib';
import { semantic_superset_not } from '../../superset/not.mjs';
export function semantic_context_consistency_check(context) {
    var g = new graphlib.Graph();
    for_each(context, (superset, superset_name) => {
        for_each_key(superset, subset_name => {
            g.setEdge(subset_name, superset_name);
        });
    });
    console.log(g)
    let distances = graphlib.alg.dijkstraAll(g);
    console.log(distances)
    let errors = [];
    for_each_key(context, superset_name => {
        if (superset_name.startsWith('not (')) {
            return;
        }

        let superset_negated_name = semantic_superset_not(superset_name);

        for_each_key(context, subset_name => {
            let d = distances[subset_name];
            if (isFinite(d[superset_name].distance) && d[superset_negated_name] && (d[superset_negated_name].distance)) {
                let error_message = `${subset_name} cannot be both ${superset_name} and ${superset_negated_name}`;
                console.log(error_message)
                list_add(errors, error_message)
            }
        })
    });
    return errors;
}