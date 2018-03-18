function suma(x1, x2) {
  "use strict";
  return x1+x2;
}

function suma2() {
  "use strict";
  var wynik = 0;
  for( var i in arguments){
    if( arguments.hasOwnProperty(i)) {
       wynik = wynik + arguments[i];
     }
  }
  return wynik;
}


function fizz(){
  "use strict";
  var i;
  for (i=1; i <= 100; i = i+1 ){
    if( i%15 == 0){
      console.log("FizzBuzz");
    } else if(i%3 == 0){
      console.log("Fizz");
    } else if(i%5 == 0){
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}



function gcd(a, b){
  "use strict";
    if ( ! b) {
        return a;

      }
    return gcd(b, a % b);
}


function xgcd(a,b) {
  "use strict";
 if (b == 0)  {
   return [1, 0, a];
 } else {
    temp = xgcd(b, a % b);
    x = temp[0];
    y = temp[1];
    d = temp[2];
    return [y, x-y*Math.floor(a/b), d];
   }
 }
