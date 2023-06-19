var say = [];
var count=1;
var fizzBuzz = ()=>{
    while(count<=100){
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
}
fizzBuzz()
