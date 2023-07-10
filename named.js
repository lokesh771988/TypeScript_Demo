function display() {
    console.log("welcome to named function");
}
function display1(x, y) {
    console.log(x + y);
}
display();
display1(5, 9);
var ann = function () {
    console.log("anonymous");
};
var ann1 = function (a, b) {
    return a * b;
};
ann();
console.log(ann1(2, 5));
