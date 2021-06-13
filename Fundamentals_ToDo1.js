//Setting and Swapping 
var myNumber = 42;
var myName = "Chris";
console.log(myNumber);
console.log(myName);

var temp = myNumber
var myNumber = myName;
var myName = temp;
console.log(" myName is now " + myName);
console.log(" myNumber is now "+ myNumber);

//Print -52 to 1066

for ( var num = -52; num < 1066; num = num + 2) {
    console.log( "The number is on " + num);
}

//Dont Worry, Be Happy
function beCheerful(){
    for(var i=1; i<99; i++){
        console.log("good morning!")
    }
}
console.log(beCheerful());

//Multiples of Three - but NOT all

for ( var num = -300; num < 1; num += 3) {
    if (num == -3 || num == -6 ){
        continue;
    }
    console.log(num);    
}
