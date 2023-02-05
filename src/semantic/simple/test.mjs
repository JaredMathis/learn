export function semantic_simple_test() {
    let parsed = semantic_parse(`( Jared ) is ( human )`);
    let context = {};
    semantic_is(parsed, context);
}