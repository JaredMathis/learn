import { list_single } from './../../node_modules/m00/src/list/single.mjs';
import { semantic_binary } from './binary.mjs';
export function semantic_superset(parsed) {
    if (parsed.length === 1) {
        return list_single(parsed);
    }
}