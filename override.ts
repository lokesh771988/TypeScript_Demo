class bank{
    rate:number=0;

    roi():number{
        return this.rate;
    }
}

class sbi extends bank{
    roi(): number {
        return 9.5;
    }
}

class icici extends bank{
    roi(): number {
        return 9.0;
    }
}

var sb = new sbi()
console.log(sb.roi())

var ic = new icici()
console.log(ic.roi())