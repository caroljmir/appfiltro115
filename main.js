noseX = 0;
noseY = 0;

function preload(){}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
camera = createCapture(VIDEO);
camera.size(300, 300);
camera.hide();
poseNet = ml5.poseNet(camera, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('Posenet foi incializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-25;
    noseY = results[0].pose.nose.y+15;
  }
}
function draw(){
image(camera, 0, 0,300, 300);
}
