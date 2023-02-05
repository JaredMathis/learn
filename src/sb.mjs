import { semantic_parse } from './semantic/parse.mjs';
import { semantic_is } from './semantic/is.mjs';
export function sb() {
    let parsed = semantic_parse(`( Jared ) is ( human )`);
    let context = {};
    semantic_is(parsed, context);
}