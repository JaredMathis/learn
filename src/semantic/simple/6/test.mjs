import { semantic_parse_meaning } from './../../parse/meaning.mjs';
import { assert } from './../../../../node_modules/m00/src/assert.mjs';
import { assert_throws } from './../../../../node_modules/m00/src/assert/throws.mjs';
export function semantic_simple_6_test() {
    let context = {};
    assert(semantic_parse_meaning(`( jared ) is ( good )`, context));
    assert(semantic_parse_meaning(`( good ) is ( not ( bad ) )`, context));
    assert_throws(() => semantic_parse_meaning(`( jared ) is ( bad )`), context);
}