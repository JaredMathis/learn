
import parser from 'paren';
export function semantic_parse(parenthesized) {
    let parsed = parser(parenthesized, ' ');
    return parsed;
}