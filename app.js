//increment and decrement
var x = 5;
var y = 5;
//increment
x++; //value of x is 6 now 
x += y;//it add y value into x now x value is 10 we can also use -= to subtract the value from x and *= and /=

var say = [];
var count=1;
var fizzBuzz = ()=>{
    if(count%3==0 && count%5==0){
        say.push('fizzbuzz')
    }
    else if(count%5==0){
        say.push('buzz')
    }
    else if(count%3==0){
        say.push('fizz')
    }
    else{
        say.push(count)
    }
    count++;
    console.log(say)
}
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()




