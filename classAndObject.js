var student = /** @class */ (function () {
    function student(sid, sname, nameClass) {
        this.sid = sid;
        this.sname = sname;
        this.nameClass = nameClass;
    }
    student.prototype.display = function () {
        console.log(this.sid + " " + this.sname + " " + this.nameClass);
    };
    return student;
}());
var stu = new student(1, 'lokesh', 'mtch');
stu.display();
