//text box example

var textBox = prompt('enter characters');
var textBoxCount = textBox.length;
alert('you have written '+textBoxCount+' characters '+(200-textBoxCount)+' characters left')


//text box another variation
var tweet = prompt('enter 140 characters')
var tweetCopy = tweet.slice(0,140);
document.write(tweetCopy)