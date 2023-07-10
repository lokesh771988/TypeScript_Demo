//type 1
var fruit = ["apple", "mango", "bannan"];
//type2
var fruit1;
fruit1 = ["apple", "mango", "bannan"];
console.log(fruit);
console.log(fruit1);
// multiple data type value
//type 1
var fruit2 = ["apple", "mango", "bannan", 5, 8];
//type2
var fruit3;
fruit3 = ["apple", "mango", "bannan", 6, 9];
console.log(fruit2);
console.log(fruit3);
//access
console.log(fruit3[5]);
console.log(fruit3[4]);
for (var i = 0; i < fruit3.length; i++) {
    console.log(fruit3[i]);
}
for (var j1 in fruit3) {
    console.log(fruit3[j1]);
}
