// Start function calls the functions used
function start(){
    makeCyanBackground();
    returnToStart();
    for (var i=0; i<19; i++){
        move();
    }
    // If the front is blocked then it will build the car in the 20x20 world
    /* Precondition: When front is blocked
        Postcondition: Car will be painted
    */
    if (frontIsBlocked()){
        //20x20 code
        returnToCar1();
        paintCarBody1();
        returnToCar1();
        paintCarWheels1();
        returnToCar1();
        paintCarWindows1();
        returnToCar1();
        paintCarDoors1();
        returnToStart();
    } else { // If the front isnt blocked it will build the car in the 40x40 world
        //40x40 code
        returnToCar2();
        paintCarBody2();
        returnToCar2();
        paintCarWheels2();
        returnToCar2();
        paintCarDoors2();
        //returnToStart();
    }
}
// This makes Karel paint the blue background in both worlds
/* Precondition: Karel must start on street 1 avenue 1
    Postcondition: The entire world must be painted cyan
*/
function makeCyanBackground(){
    while(leftIsClear()){
        makeRow();
        flipLeft();
        makeRow();
        if(rightIsClear()){
            flipRight();
        } else {
            turnAround();
        }
    }
}
// Makes Karel paints the color red on the row in both worlds
/*  Precondition: When Karel is on the row for red paint
    Postcondition: Karel will complete the row
*/
function makeRow(){
    while(frontIsClear()){
        paint(Color.cyan);
        move();
    }
    paint(Color.cyan);
}
// Makes Karel flip to the Left in both worlds
function flipLeft(){
    turnLeft();
    move();
    turnLeft();
}
// Makes Karel flip to the Right in both worlds
function flipRight(){
    turnRight();
    move();
    turnRight();
}
// Makes Karel paint the wheels of the car in the 20x20 world
/*  Precondition: When karel is done painting the body
    Postcondition: Karel will finish painting the wheels of the car
*/
function paintCarWheels1(){
    turnRight();
    move();
    turnLeft();
    move();
    paintCarWheel1();
    for (var i=0; i<7; i++){
        move();
    }
    paintCarWheel1();
}
// Returns Karel to the starting position in both worlds
/* Precondition: Karel must be on the bottom row
    Postcondition: Karel must be on the starting square
*/
function returnToStart(){
    faceWest();
    while(frontIsClear()){
        move();
    }
    turnLeft();
    while(frontIsClear()){
        move();
    }
    turnLeft();
}
// Makes Karel face West
function faceWest(){
    while (notFacingWest()){
        turnLeft();
    }
}
// This makes Karel paint the car wheels in the 20x20 world
/* Precondition: Karel completed the car and is facing east
    Postcondition: Karel facing east with tires completed
*/
function paintCarWheel1(){
    paint(Color.white);
    move();
    paint(Color.white);
    turnLeft();
    move();
    paint(Color.white);
    turnLeft();
    move();
    paint(Color.white);
    turnLeft();
    move();
    turnLeft();
}
// This makes Karel return to the car in the 20x20 world
/* Precondition: When Karel finishes painting the background
    Postcondition: Karel will finish returning to the car 
*/
function returnToCar1(){
    returnToStart();
    for (var i=0; i<5; i++){
        move();
    }
    turnLeft();
    for (var i=0; i<8; i++){
        move();
    }
    turnRight();
}
// This makes Karel paint the car body in the 20x20 world
/* Precondition: Karel has the background finished and is in starting square
    Postcondition: Karel finished body and is on start square
*/
function paintCarBody1(){
    paint(Color.gray);
    move();
    for (var i=0; i<9; i++){
        paint(Color.red);
        move();
    }
    paint(Color.gray);
    move();
    flipLeft();
    move();
    paint(Color.yellow);
    move();
    for (var i=0; i<10; i++){
        paint(Color.red);
        move();
    }
    flipRight();
    move();
    move();
    for (var i=0; i<8; i++){
        paint(Color.red);
        move();
    }
    flipLeft();
    move();
    move();
    for (var i=0; i<7; i++){
        paint(Color.black);
        move();
    }
}
// This makes Karel paint the car windows in the 20x20 world
/* Precondition: Karel finished the tires on the car
    Postcondition: Windows complete and on square to start doors
*/
function paintCarWindows1(){
    turnLeft();
    move();
    move();
    turnRight();
    move();
    for (var i=0; i<8; i++){
        paint(Color.blue);
        move();
    }
}
// This makes Karel paint the car doors in the 20x20 world
/* Precondition: Car windows are complete
    Postcondition: Car complete and on starting square
*/
function paintCarDoors1(){
    for (var i=0; i<5; i++){
        move();
    }
    turnLeft();
    for (var i=0; i<3; i++){
        paint(Color.black);
        move();
    }
    move();
    flipRight();
    move();
    turnLeft();
    for (var i=0; i<1; i++){
        move();
    }
    move();
    turnRight();
    move();
    paint(Color.black);
    move();
    turnRight();
    paint(Color.black);
    for (var i=0; i<3; i++){
        move();
        move();
        paint(Color.black);
    }
    turnRight();
    move();
    paint(Color.black);
}
// This makes Karel return to the car in the 40x40 world
/* Precondition: When Karel finishes painting the background
    Postcondition: Karel will finish returning to the car
*/
function returnToCar2(){
    returnToStart();
    for (var i=0; i<10; i++){
        move();
    }
    turnLeft();
    for (var i=0; i<16; i++){
        move();
    }
    turnRight();
} 
// This makes Karel paint the car body in the 40x40 world
/* Precondition: Karel has the background finished and is in starting square
    Postcondition: Karel finished body and is on start square 
*/
function paintCarBody2(){
    paint(Color.gray);
    move();
    for (var i=0; i<20; i++){
        paint(Color.red);
        move();
    }
    paint(Color.grey);
    move();
    flipLeft();
    move();
    paint(Color.grey);
    move();
    for (var i=0; i<20; i++){
        paint(Color.red);
        move();
    }
    paint(Color.grey);
    move();
    flipRight();
    move();
    for (var i=0; i<21; i++){
        paint(Color.red);
        move();
    }
    paint(Color.yellow);
    move();
    flipLeft();
    move();
    paint(Color.yellow);
    move();
    for (var i=0; i<21; i++){
        paint(Color.red);
        move();
    }
    flipRight();
    move();
    move();
    for (var i=0; i<17; i++){
        paint(Color.blue);
        move();
    }
    flipLeft();
    move();
    for (var i=0; i<17; i++){
        paint(Color.blue);
        move();
    }
    flipRight();
    move();
    move();
    for (var i=0; i<15; i++){
        paint(Color.black);
        move();
    }
    flipLeft();
    move();
    for (var i=0; i<15; i++){
        paint(Color.black);
        move();
    }
    
}
// This makes Karel paint the car wheels in the 40x40 world
/* Precondition: Karel completed the car and is facing east
    Postcondition: Karel facing east with tires completed
*/
function paintCarWheels2(){
    move();
    move();
    paintCarWheel2();
    turnAround();
    turnLeft();
    move();
    move();
    turnRight();
    for (var i=0; i<15; i++){
        move();
    }
    paintCarWheel2();
}
// This makes Karel paint the car wheels in the 40x40 world
/* Precondition: Karel completed the car and is facing east
    Postcondition: Karel facing east with tires completed
*/
function paintCarWheel2(){
    turnLeft();
    move();
    turnRight();
    for (var i=0; i<4; i++){
        paint(Color.white);
        move();
    }
    flipRight();
    move();
    paint(Color.white);
    move();
    paint(Color.black);
    move();
    paint(Color.black);
    move();
    paint(Color.white);
    flipLeft();
    paint(Color.white);
    move();
    paint(Color.black);
    move();
    paint(Color.black);
    move();
    paint(Color.white);
    flipRight();
    for (var i=0; i<4; i++){
        paint(Color.white);
        move();
    }
}
// This makes Karel paint the car doors in the 40x40 world
/* Precondition: Car windows are complete
    Postcondition: Car complete and on starting square
*/
function paintCarDoors2(){
    for (var i=0; i<11; i++){
        move();
    }
    turnLeft();
    for (var i=0; i<6; i++){
        paint(Color.black);
        move();
    }
    turnRight();
    for (var i=0; i<7; i++){
        move();
    }
    turnRight();
    move();
    for (var i=0; i<4; i++){
        paint(Color.black);
        move();
    }
    turnAround();
    move();
    turnLeft();
    for (var i=0; i<5;i++){
        move();
    }
    paint(Color.black);
    for (var i=0; i<6; i++){
        move();
    }
    paint(Color.black);
    move();
    move();
    turnRight();
    for (var i=0; i<4; i++){
        paint(Color.black);
        move();
    }
}
