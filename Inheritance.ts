
class dept{
    dept_name:string;

    constructor(dept_name:string){
        this.dept_name=dept_name;
    }
}

class employee extends dept{
    empId:number;
    empName:string;
    constructor(empId:number, empName:string,dept_name:string){
        super(dept_name);
        this.empId=empId;
        this.empName=empName;
    }

    display_emp_details(){
        console.log(this.empId+" "+this.empName+" "+this.dept_name)
    }
}


var emp = new employee(1, 'lokesh', 'QA')
emp.display_emp_details()