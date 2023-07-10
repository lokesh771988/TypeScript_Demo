var localVar = 10;
function varKe(){
    if(true){
        var localVar = 9;
        console.log(localVar)// true
    }
    console.log(localVar) //true
}

console.log(localVar) //false