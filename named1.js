function greet(name, name2) {
    return name + " " + name2;
}
console.log(greet('a'));
console.log(greet('a', 'b'));
function greet1(name, name2) {
    if (name2 === void 0) { name2 = 'hello'; }
    return name + " " + name2;
}
console.log(greet1('a'));
console.log(greet1('a', 'b'));
