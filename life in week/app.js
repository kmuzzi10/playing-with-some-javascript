//life in week function
var lifeInWeeks = (age)=>{
    var yearsRemaining = 90-age;
    var days = yearsRemaining*365;
    var weeks = yearsRemaining*52;
    var months = yearsRemaining*12

    console.log('you have '+ days +' days remaining and '+weeks +' weeks left and '+months + ' months left ')

}
lifeInWeeks(22)  //input your age in parameter