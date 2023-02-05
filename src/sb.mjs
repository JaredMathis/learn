import { list_index_of } from './../node_modules/m00/src/list/index/of.mjs';
import { string_split_space } from './../node_modules/m00/src/string/split/space.mjs';
export function sb() {
    let input = `Jared is human`;
    let tokens = string_split_space(input);
    let is = list_index_of(tokens, 'is');
}