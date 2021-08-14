nose_x=0;
nose_y=0;
function preload() {
    clown_nose=loadimage()
}

function setup() {
    canvas = createCanvas(250, 250);
    canvas.center();
    video=createCapture(VIDEO);
 video.size(250, 250);
 video.hide();
}

function te() {
    save("my_picture.png");
}
function draw(){
    image(video,0,0,250,250);
}

function modelLoaded() {
    console.log('poseNetStarted');
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
        }
}