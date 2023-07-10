var amp1 = /** @class */ (function () {
    function amp1() {
    }
    amp1.prototype.sum = function () {
        return this.a + this.b;
    };
    amp1.prototype.sub = function () {
        return this.x - this.y;
    };
    return amp1;
}());
var a = new amp1();
a.a = 10;
a.b = 15;
a.x = 15;
a.y = 10;
console.log(a.sub());
console.log(a.sum());
