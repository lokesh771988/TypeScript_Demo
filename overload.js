function add(m) {
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    return m + n;
}
console.log(add("a", 'b'));
console.log(add("a", "b", "c"));
