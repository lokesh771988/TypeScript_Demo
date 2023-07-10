//two ways
var str:string="typescript"

var str1="welcome "
var str2 = "typescript"
//charAt
console.log(str.charAt(0)) //t
console.log(str.charAt(5)) //c

//concat
console.log(str1 + " "+str2)
//replace

var str3 = "welcome to testing"
console.log(str3.replace("l", "L"))
console.log(str3.replace('testing', 'QA'))

//split
console.log(str3.split(' '))
console.log(str3.split(' ', 2))
console.log(str3.split(' ', 1))

//substring
var str4 = "welcome to testing"
console.log(str4.substring(4,9))

//touppercase. tolowercase

console.log(str4.toLowerCase())
console.log(str4.toUpperCase())

//trim
var str5:string ="   str   "
console.log(str5.trim())
console.log(str5.trimEnd)
