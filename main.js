img=""
model_status= "";
function preload(){
    img = loadImage('pancakes.jpg');
    img1 = loadImage('big knee.png');
}
function setup() {
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!")
    model_status = true;
    objectDetector.detect(img1, gotResult);
}
function gotResult(error, results){
    if(error) {
        console.log(error);
    }
    console.log(results);
}
function draw() {
    image(img1, 0, 0, 640, 420);
    strokeWeight(3)
    noFill();
    rect(60,50, 300, 350)
    stroke("black")
    fill("red")
    textSize(20)
    text("pancake 97%", 60, 40)
    noFill();
    rect(290,60, 290, 340)
    fill("yellow")
    text("bananas 95%", 290, 55)
}