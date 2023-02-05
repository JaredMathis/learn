import { semantic_parse } from './semantic/parse.mjs';
import { semantic_is } from './semantic/is.mjs';
export function sb() {
    let parenthesized = `( Jared ) is ( human )`;
    let parsed = semantic_parse(parenthesized);
    let context = {};
    semantic_is(parsed, context);
}