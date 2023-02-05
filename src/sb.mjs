import { log } from './../node_modules/m00/src/log.mjs';
import { list_slice } from './../node_modules/m00/src/list/slice.mjs';
import { list_index_of } from './../node_modules/m00/src/list/index/of.mjs';
import { string_split_space } from './../node_modules/m00/src/string/split/space.mjs';
export function sb() {
    let input = `Jared is human`;
    let tokens = string_split_space(input);
    let index = list_index_of(tokens, 'is');
    let before = list_slice(tokens, 0, index);
    let after = list_slice(tokens, index + 1, tokens.length);
    console.log({
        before,
        after
    });
}