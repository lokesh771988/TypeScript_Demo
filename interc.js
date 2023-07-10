var emp2 = {
    empId: 1,
    empName: 'lokesh',
    deptName: 'IT',
    display: function () {
        console.log(this.empId + " " + this.empName + " " + this.deptName);
    }
};
emp2.display();
console.log(emp2.empId);
console.log(emp2.deptName);
console.log(emp2.empName);
