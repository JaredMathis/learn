import { json_equal } from './../../../node_modules/m00/src/json/equal.mjs';
import { assert } from './../../../node_modules/m00/src/assert.mjs';
import { semantic_parse } from './../parse.mjs';
import { semantic_is } from './../is.mjs';
import { semantic_context_subset } from './../context/subset.mjs';
export function semantic_simple_test() {
    let a = 'jared';
    let b = 'human';
    let parsed = semantic_parse(`( jared ) is ( human )`);
    let actual = {};
    assert(semantic_is(parsed, actual));
    let expected = {};
    semantic_context_subset(expected, a, b);
    assert(json_equal(actual, expected));
}