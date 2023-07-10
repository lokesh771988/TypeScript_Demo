var arr5:(string | number)[][]=[['a', 2], ['b', 4], ['c', 6]]

for(var k = 0; k < arr5.length; k++){
    for(var l = 0; l < arr5[k].length; l++){
        console.log(arr5[k][l])
    }
}

for(var m in arr5){
    for(var n in arr5[m]){
        console.log(arr5[m][n])
    }
}