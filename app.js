//increment and decrement
var x = 5;
var y = 5;
//increment
x++; //value of x is 6 now 
x += y;//it add y value into x now x value is 10 we can also use -= to subtract the value from x and *= and /=

var guestList = ['mudassir','maham','maheen','muzammil','shayan','gaffar']
var guestName = prompt('what is your name')
if(guestList.includes(guestName)){
    alert('welcome')
}
else{
    alert('you are not invited')
}
