import { assert } from './../../../node_modules/m00/src/assert.mjs';
import { semantic_parse } from './../parse.mjs';
import { semantic_is } from './../is.mjs';
export function semantic_simple_test() {
    let parsed = semantic_parse(`( Jared ) is ( human )`);
    let context = {};
    assert(semantic_is(parsed, context));
}