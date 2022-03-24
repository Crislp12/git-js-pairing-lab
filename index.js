//Code your solutions in this file
function fiveToOneHundred (){
    for (let i=0; i <= 100; i++){
        console.log(i)
    }
}
fiveToOneHundred(); 

function multiplesOfThree() {
    for (let i= 1; i <= 100; i++) {
        if (i % 3 ===0) {
            console.log(i)
        }
    }
} multiplesOfThree(); 

function multiplesOfThreeOrFive () {
    console.log("---q3--")
    for (let i =0; i < 100; i++){
        if ( i % 3 ===0 && i % 5 === 0){
            console.log(i)
        }
    }
    
    
}
 multiplesOfThreeOrFive() 
 
 function untilNum(n) {
     for (let i = 1; i <= n; i ++) {
         console.log(i)
     }
 } untilNum(40) 
 
 function multiplyBy(num, dep){
     console.log ("--q5--")
     return num * dep
 }
 
 console.log(multiplyBy(6,7)) 
 
 function add(n1, n2) {
     console.log("Q6 ---")
    if (n1 !== n2  ) {
        return (n1 + n2) 
    } 
    return (n1 + n2 ) * 3
 } 
 console.log(add(5,5)) 
 
 
 function isNegative(neg){
     
     console.log("---q7---")
     if (neg < 0){
         return true;
     }
     return false;
     
 }
 
console.log(isNegative(3)) //returns false
console.log(isNegative(-2)) // return true 
console.log(isNegative(Math.PI)) // return false  


function triangleArea(n1, n2) {
    console.log("Q8 ---")
 return (n1 * n2) * 1/2
} console.log(triangleArea(6, 7)) // 21
console.log(triangleArea(8,8)) // 32 
