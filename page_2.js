img = "";
status = "";


function preload(){
   img = loadImage('bottle.jpg');
}

function setup(){
    canvas = createCanvas(640 , 620);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded );
    document.getElementById("status").innerHTML = "Status : Detecting Objects ";

}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img , gotResults);
}

function gotResults(error , results){
    if(error){
        console.log(error);
    }

    console.log(results);
}

function draw() {
    image(img , 0, 0, 640 , 620);

    fill("#c71c5b");
    text( "Bottel" , 180 , 80 );
    noFill();
    stroke("#c71c5b");
    rect( 150 , 40 , 350 , 550 );
}