import { json_to } from './../node_modules/m00/src/json/to.mjs';
import { log } from './../node_modules/m00/src/log.mjs';
import parser from 'paren';
export function sb() {
    let parenthesized = `( Jared ) is ( human )`;
    let parsed = parser(parenthesized, ' ');
    log(json_to(parsed));
}