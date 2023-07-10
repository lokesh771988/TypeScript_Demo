interface emp1{
    empId:number;
    empName:string;
    deptName:string;

    display:()=>void; //arrow function
}

var emp2:emp1={
    empId: 1,
    empName: 'lokesh',
    deptName: 'IT',
    display():void{
        console.log(this.empId+" "+this.empName+" "+this.deptName)
    }
}


emp2.display();
console.log(emp2.empId)
console.log(emp2.deptName)
console.log(emp2.empName)