import { list_slice_end_to } from './../node_modules/m00/src/list/slice/end/to.mjs';
import { list_slice_begin_from } from './../node_modules/m00/src/list/slice/begin/from.mjs';
import { log } from './../node_modules/m00/src/log.mjs';
import { list_index_of } from './../node_modules/m00/src/list/index/of.mjs';
import { string_split_space } from './../node_modules/m00/src/string/split/space.mjs';
export function sb() {
    let input = `Jared is human`;
    let tokens = string_split_space(input);
    let index = list_index_of(tokens, 'is');
    let before = list_slice_begin_from(tokens, index);
    let after = list_slice_end_to(tokens, index + 1);
    console.log({
        before,
        after
    });
}