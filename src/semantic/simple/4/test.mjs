import { semantic_parse } from './../../parse.mjs';
import { assert } from './../../../../node_modules/m00/src/assert.mjs';
import { semantic_is } from './../../is.mjs';
import { semantic_context_subset } from './../../context/subset.mjs';
import { json_equal } from './../../../../node_modules/m00/src/json/equal.mjs';
import { semantic_superset_not } from '../../superset/not.mjs';
export function semantic_simple_4_test() {
    let parsed = semantic_parse(`( jared ) is ( not ( lame ) )`);
    let actual = {};
    assert(semantic_is(parsed, actual));
    let expected = {};
    semantic_context_subset(expected,  'jared', semantic_superset_not('lame'));
    assert(json_equal(actual, expected));
}