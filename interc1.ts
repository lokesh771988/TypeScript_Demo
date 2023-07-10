interface inter{
    a:number;
    b:number;

    sum():number;
    
}

interface inter1 extends inter{
    x:number;
    y:number;
    sub():number;
}

class amp1 implements inter1{
    a: number;
    b: number;
    x: number;
    y: number;

    sum(): number {
        return this.a+this.b;
    }

    sub(): number {
        return this.x - this.y;
    }
}

var a = new amp1()
a.a = 10;
a.b = 15;
a.x = 15;
a.y = 10;

console.log(a.sub())
console.log(a.sum())