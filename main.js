sound = "";

scoreRightwrist = 0;
scoreLeftwrist=0;
rightwristX = 0;
leftwristx=0;
rightwristy=0;
leftwristy=0;

function preload(){
    sound = loadSound("music.mp3");

}

function setup() {
 canvas = createCanvas(600,500);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);

}

function modelloaded(){
console.log('pose net initialized');
score
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        scoreRightwrist = result[0].pose.keypoints[10].score;
        scoreLeftwrist= result[0].pose.keypoints[9].score;
        rightwristX = result[0].pose.rightWrist.x;
leftwristx= result[0].pose.leftWrist.x;
rightwristy=result[0].pose.rightWrist.y;
leftwristy=result[0].pose.leftWrist.y;
    }
}

function draw(){
    image(video ,0,0,600,500);

    fill("red");
    stroke("turquoise");

    if(scoreLeftwrist > 0.2){
    circle(leftwristx,leftwristy,15);
    monkey = Number(leftwristy);
    donkey = floor(monkey);
    volume=donkey/500;
    document.getElementById('volume').innerHTML='volume : '+volume

    sound.setVolume(volume);
    }
}

function play() {
 sound.play();
 sound.setVolume(1);
 
}

function pause() {
    sound.pause();
   }