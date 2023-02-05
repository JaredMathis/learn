import { log } from './../node_modules/m00/src/log.mjs';
import { string_split_space } from './../node_modules/m00/src/string/split/space.mjs';
export function sb() {
    let input = `Jared is human`;
    let tokens = string_split_space(input);
    console.log(tokens);
}