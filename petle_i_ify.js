//Zadanie 1

var num1 = 63;
var num2 = 45;

if(num1 > num2) {console.log(num1);}
else {console.log(num2);}

//Zadanie 2

var number1 = 5
var number2 = 4
var number3 = 3

if(number1 > number2 && number1 > number3) {console.log(number1);}
else if(number2 > number3) {console.log(number2);}
else {console.log(number3)}

//Zadanie 3

var x = 0;
while(x<10)
  {
    console.log("Lubie JavaScript");
    x++;
  }

//Zadanie 4

var result = 0;
var x = 1;
while(x<=10)
{
  result += x;
  x++;
}
console.log(result);

//Zadanie 5

var n = 7

for(var x = 0; x<=n; x++)
  {
    if(x%2==0){console.log(x + " - " + "parzysta")}
    
    else{console.log(x + " - " + "nieparzysta")}
  }

//Zadanie 6

var i = 0;
var j = 0;

for(var x = 0; x<=10; x++)
  {
    while(x<11)
      {
        i++;
        break;
      }
    while(x<11)
      {
        j+=2;
        break;
      }
    console.log("i = " + i, "j = " + j);
  }

//Zadanie 7
