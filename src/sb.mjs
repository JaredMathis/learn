import { log } from './../node_modules/m00/src/log.mjs';
import parser from 'paren';
export function sb() {
    let input = `( Jared ) is ( human )`;
    let parsed = parser(input, ' ');
    console.log({ parsed });
}