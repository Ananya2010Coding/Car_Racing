canvas=document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

var car1X = 10;
var car1Y = 10;
var car1_height = 90;
var car1_width = 100;

var car2X = 10;
var car2Y = 100;
var car2_height = 90;
var car2_width = 100;


function add(){

    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= "RaceTrack.jpg";
    
    car1_imgTag= new Image();
    car1_imgTag.onload= uploadCar1;
    car1_imgTag.src= "car1.png";

    car2_imgTag= new Image();
    car2_imgTag.onload= uploadCar2;
    car2_imgTag.src= "car2.png";
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1X, car1Y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2X, car2Y, car2_width, car2_height);
}

window.addEventListener("touchdown", my_touchdown);

function my_touchdown(e){
    keyPress=e.keyCode;
    console.log(keyPress);

    if(keycode == "38"){
        console.log("up");
        Car1_up();
    }

    if(keycode == "40"){
        console.log("down");
        Car1_down();
    }

    if(keycode == "37"){
        console.log("left");
        
        Car1_left();
    }

    if(keycode == "39"){
        console.log("right");
        Car1_right();
    }


    if(keycode == "85"){
        console.log("key u");
        Car2_up();
    }

    if(keycode == "68"){
        console.log("key d");
        Car2_down();
    }

    if(keycode == "76"){
        console.log("key l");
        Car2_left();
    }

    if(keycode == "82"){
        console.log("key r");
        Car2_right();
    }
}

function Car1_up(){
    if(car1Y >=0){
        car1Y= car1Y-10;
        console.log("When Up Arrow is pressed x="+car1X+" y="+car1Y);
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car1_down(){
    if(car1Y <=500){
        car1Y= car1Y+10;
        console.log("When Down Arrow is pressed x="+car1X+" y="+car1Y);
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car1_left(){
    if(car1X >=0){
        car1X= car1X-10;
        console.log("When left Arrow is pressed x="+car1X+" y="+car1Y);
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car1_right(){
    if(car1X <=700){
        car1X= car1X+10;
        console.log("When Right Arrow is pressed x="+car1X+" y="+car1Y);
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car2_up(){
    if(car2Y >=0){
        car2Y= car2Y-10;
        console.log("When Up Arrow is pressed x="+car2X+" y="+car2Y);
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}
function Car2_down(){
    if(car2Y <=500){
        car2Y= car2Y+10;
        console.log("When Down Arrow is pressed x="+car2X+" y="+car2Y);
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}
function Car2_left(){
    if(car2X >=0){
        car2X= car2X-10;
        console.log("When left Arrow is pressed x="+car2X+" y="+car2Y);
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}
function Car2_right(){
    if(car2X <=700){
        car2X= car2X+10;
        console.log("When Right Arrow is pressed x="+car2X+" y="+car2Y);
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}



if(car1X >= 700){
    console.log("CAR 1 has won the race!!");
    document.getElementById("status").innerHTML = "CAR-1 has Won!!";
}

if(car2X >= 700){
    console.log("CAR 2 has won the race!!");
    document.getElementById("status").innerHTML = "CAR-2 has Won!!";
}

