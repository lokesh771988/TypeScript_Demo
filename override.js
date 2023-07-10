var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var bank = /** @class */ (function () {
    function bank() {
        this.rate = 0;
    }
    bank.prototype.roi = function () {
        return this.rate;
    };
    return bank;
}());
var sbi = /** @class */ (function (_super) {
    __extends(sbi, _super);
    function sbi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sbi.prototype.roi = function () {
        return 9.5;
    };
    return sbi;
}(bank));
var icici = /** @class */ (function (_super) {
    __extends(icici, _super);
    function icici() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    icici.prototype.roi = function () {
        return 9.0;
    };
    return icici;
}(bank));
var sb = new sbi();
console.log(sb.roi());
var ic = new icici();
console.log(ic.roi());
