class student{
    sid:number;
    sname:string;
    nameClass:String;

    constructor(sid:number, sname:string, nameClass:string){
        this.sid = sid;
        this.sname = sname;
        this.nameClass = nameClass;
    }

    display():void{
        console.log(this.sid+ " "+this.sname+ " "+ this.nameClass)
    }
}


var stu = new student(1, 'lokesh', 'mtch')
stu.display()
