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
var dept = /** @class */ (function () {
    function dept(dept_name) {
        this.dept_name = dept_name;
    }
    return dept;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(empId, empName, dept_name) {
        var _this = _super.call(this, dept_name) || this;
        _this.empId = empId;
        _this.empName = empName;
        return _this;
    }
    employee.prototype.display_emp_details = function () {
        console.log(this.empId + " " + this.empName + " " + this.dept_name);
    };
    return employee;
}(dept));
var emp = new employee(1, 'lokesh', 'QA');
emp.display_emp_details();
