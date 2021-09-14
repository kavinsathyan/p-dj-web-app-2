song = ""; 

function preload() 
{
     song = loadSound("believer music.mp3 imagine dragons.mp3");
     song = loadSound("Satisfya Imran Khan.mp3");
} 
     
function setup() 
{
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
   video.hide();
}

function draw() 
{
   image(video, 0, 0, 600, 500); 
} 

function play() 
{
  song.play(); 
}
