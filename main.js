function preload(){
    
}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();
tintcolor = "";
fill(169, 0 , 0);
stroke(169, 0 , 0);

}

function draw(){
image(video, 0, 0, 640, 480);
tint(tintcolor);
circle(60,60,-80);
circle(580,60,80);
circle(580,430,80);
circle(60,430,-80);
rect(40, 45, 550, 40);
rect(40, 405, 550, 40);



}

function filter_tint(){
tintcolor =  document.getElementById("filter_color").value;

}
function take_snapshot()
{
save("color.png");
}