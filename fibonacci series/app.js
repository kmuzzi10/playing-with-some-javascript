var fibbionciGenerator = (num) => {
    var output = [];
    if (num == 1) {
        output = [0];
    }
    else if (num == 2) {
        output = [0, 1];
    }
    else {
        output = [0,1]
        for(var i =0;i<=num;i++){
            output.push(output[output.length - 1] + output[output.length - 2]);
        }
    }
    return output;
}
var done = fibbionciGenerator(7);
console.log(done)