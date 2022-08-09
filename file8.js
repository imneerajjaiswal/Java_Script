// BigInt
// jada number likhne k liye hm ya to last m "n" lekhenge 
let myNumber = 1234567890123456789n
console.log(myNumber)
// one more way 
let mynumber = BigInt("112121212121212121212122")
console.log(mynumber)


// Boolean & comparison operator 
let num1 = 12;
let num2 = 12;
console.log(num1==num2)
console.log(num1>num2)
console.log(num1<num2)
console.log(num1<=num2)
console.log(num1>=num2)
// agar hmari ek value equal h but wo string fir bhi true ayega kuki wo avlue check krta hai na ki data type
// lekin agar ham triple equal lageynge to wo false btayega tab 
// wo data bhi check krega
let num3 = '12'
let num4 = 12
console.log(num3==num4)