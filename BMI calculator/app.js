function bmiCalculator(weight,height){
    var bmi = weight / (height*height)
    return Math.round(bmi)
}
var bmi = bmiCalculator(75,6.2)
console.log(bmi)