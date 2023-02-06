import { semantic_parse } from './../parse.mjs';
import { semantic_meaning } from './../meaning.mjs';
export function semantic_parse_meaning(input, context) {
    let parsed = semantic_parse(input);
    return semantic_meaning(parsed, context);
}