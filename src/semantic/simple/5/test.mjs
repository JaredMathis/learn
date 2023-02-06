import { assert } from './../../../../node_modules/m00/src/assert.mjs';
import { semantic_is } from './../../is.mjs';
import { semantic_parse } from './../../parse.mjs';
export function semantic_simple_5_test() {
    let context = {};
    assert(semantic_is(semantic_parse(`( jared ) is ( not ( bad ) )`), context));
    assert(semantic_is(semantic_parse(`( jared ) is ( bad )`), context));
}