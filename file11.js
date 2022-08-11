// and (&&) operator and or(||) operator
let name = "Neeraj"
let age = 22;
// "&" operator m agar dono value right hongi to if wala programe chlega
// or aar ek hi vvale false hui to lse wala programechlega 
if(name[0]== "N" && age>18){
    console.log("You name start with N and age is above 18")
}else{
    console.log("insside else")
}
// (||) or operator , agar ek value true  hogi to if wala programe run hoga 
// dono m se ek value true hone chahiye 

if(name[3]== "r" || age>18){
    console.log("inside if")
}else{
    console.log("inside else")
}