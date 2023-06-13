/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main() {
    putBeeper();
    moving3();
    moving3();
    side();
    moving2();
    moving3();
    side2();
    turnRight();
    moving3();
    moving3();
    side();
    moving2();
    moving3();
    side2();
    turnRight();
    moving3();
    moving3();

}


function moving3() {
    move();
    move();
    putBeeper();
}

function moving2() {
    move();
    putBeeper();
}

function side() {
    turnLeft();
    move();
    turnLeft();
}
function side2() {
    move();
    turnRight();
    move();
    putBeeper();
}
