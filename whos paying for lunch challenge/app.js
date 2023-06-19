function whosPaying(names){
    var numberOfPeople = names.length;
    var randomNumber = Math.random()*numberOfPeople;
    var random = Math.floor(randomNumber) ;
    console.log(names[random]+' is paying for lunch today');
    }
    whosPaying(['muzammil','maham','maheen','mudassir','habib','shayan'])