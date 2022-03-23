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