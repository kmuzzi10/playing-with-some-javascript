//user give name whatever character is capital or small just do initcap on this


var name = prompt('enter your name')
var name1 = name.slice(0,1)
var name2 = name1.toUpperCase();
var name3 = name.slice(1,20)
var name4 = name3.toLowerCase()
alert('hello '+name2+name4)