function greet(name:string, name2?:string){
    return name+ " "+name2;
}

console.log(greet('a'))
console.log(greet('a', 'b'))

function greet1(name:string, name2:string='hello'){
    return name+ " "+name2;
}

console.log(greet1('a'))
console.log(greet1('a', 'b'))