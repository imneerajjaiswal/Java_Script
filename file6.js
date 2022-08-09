// types of operator
// 1. primitive data types:
// (i).string
// (ii).numbers
// (iii).null
// (iv).symbol
// (v).boolean
// (vi).BigIn 
// (vii).undfined

// how i convert nubmer to String   1   
let age = '22'; 
age = +age ;
console.log(typeof(age)) 

// how we change convert string to number
let myStr = 32;
myStr = myStr+"";
console.log(typeof(myStr))

// one way or -- aise hi string ko number m badal skte hai
// jahan p number likha hai wha p string likh denge then its change
let aage = "18";
age = Number(aage);
console.log(typeof(aage))   