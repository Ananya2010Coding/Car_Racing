canvas=document.getElementById('myCanvas');
ctx = canvas.getContext('2d');


function add(){

    background_imgTag= new Image();
    background_imgTag.onload= uploadbackground;
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
    ctx.drawImage(car1_imgTag, 10, 10, 100, 90);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, 10, 100, 100, 90);
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