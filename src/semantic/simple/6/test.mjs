import { assert } from './../../../../node_modules/m00/src/assert.mjs';
import { semantic_is } from './../../is.mjs';
import { semantic_parse } from './../../parse.mjs';
import { assert_throws } from './../../../../node_modules/m00/src/assert/throws.mjs';
export function semantic_simple_6_test() {
    let context = {};
    assert(semantic_is(semantic_parse(`( jared ) is ( not ( bad ) )`), context));
    assert_throws(() => semantic_is(semantic_parse(`( jared ) is ( bad )`), context));
}