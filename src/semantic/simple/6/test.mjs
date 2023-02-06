import { semantic_meaning } from './../../meaning.mjs';
import { assert } from './../../../../node_modules/m00/src/assert.mjs';
import { semantic_parse } from './../../parse.mjs';
import { assert_throws } from './../../../../node_modules/m00/src/assert/throws.mjs';
export function semantic_simple_6_test() {
    let context = {};
    assert(semantic_meaning(semantic_parse(`( jared ) is ( not ( bad ) )`), context));
    assert_throws(() => semantic_meaning(semantic_parse(`( jared ) is ( bad )`), context));
}