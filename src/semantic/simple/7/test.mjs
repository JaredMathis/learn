import { assert } from './../../../../node_modules/m00/src/assert.mjs';
import { semantic_parse_meaning } from './../../parse/meaning.mjs';
import { assert_throws } from './../../../../node_modules/m00/src/assert/throws.mjs';
export function semantic_simple_7_test() {
    let context = {};
    assert(semantic_parse_meaning(`( jordan ) is ( sexy )`, context));
    assert(semantic_parse_meaning(`( sexy ) is ( attractive )`, context));
    assert(semantic_parse_meaning(`( attractive ) is ( good )`, context));
    assert_throws(() => semantic_parse_meaning(`( jordan ) is ( not ( attractive ) )`, context));
}