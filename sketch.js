//variables 
let xball = 300;
let yball = 200;
let dball = 13;
let xball_speed = 6.5;
let yball_speed = 6.5;
let rball = dball /2;
let axrect = 5
let ayrect = 150
let acrect = 10
let ahrect = 90
let brect_speed = 6.5;
let bxrect = 585
let byrect = 150
let bcrect = 10
let bhrect = 90
let collide = false 
let brect_auto_ball_speed;


//score

let ascore = 0;
let bscore = 0;

//sounds
let scoresound;
let rectsound;
let gamesound;

function setup() {
  createCanvas(600, 400);
  gamesound.loop();
  }

function draw() {
  background(0);
  sball();
  mball();
  cwidth();
  cheight();
  arect();
  brect();
  marect();
  carect();
  colarectlib();
  brect_auto();
  colbrectlib();
  score_viewer();
  ponts();
  

}

function sball(){
   circle(xball,yball,dball);
  }

function mball(){
  xball += xball_speed;
  yball += yball_speed;
  }

function cwidth(){
    if(xball+rball > width || xball-rball <0){
    xball_speed *= -1;
  }
}

function cheight(){
  if(yball+rball > height || yball-rball <0){
    yball_speed *= -1;
  }
}

function arect(){
  rect(axrect, ayrect, acrect,ahrect)
}

function brect(){
  rect(bxrect, byrect, bcrect,bhrect)
}

function marect(){
  if(keyIsDown(UP_ARROW)){
    ayrect -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    ayrect += 10;
  }
}

function carect(){
    if(xball - rball < axrect + acrect && yball - rball < ayrect + ahrect && yball +rball > ayrect){
    xball_speed *=-1;
  }
}

function colarectlib(){
  collide =
  collideRectCircle(axrect, ayrect, acrect,ahrect,xball,yball,rball);
  if(collide){
    xball_speed *= -1; 
    rectsound.play();
  }
}

function brect_auto(){
  brect_auto_ball_speed = yball -byrect -bcrect / 2 -79;
  byrect += brect_auto_ball_speed
}

function colbrectlib(){
  collide =
  collideRectCircle(bxrect, byrect, bcrect,bhrect,xball,yball,rball);
  if(collide){
    xball_speed *= -1;
    rectsound.play();
  }
}
function score_viewer(){
  stroke(255);
  textAlign(CENTER);
  textSize(18);
  fill(color(255, 140, 0))
  rect(150,10,40,20);
  fill(255)
  text(ascore,170,26);
  fill(color(255, 140, 0))
  rect(450,10,40,20);
  fill(255);
  text(bscore, 470,26);
  fill(255);

}

function ponts(){
  if(xball > 599){
  ascore +=1;
  scoresound.play();
  }  

  if(xball <10){
  bscore +=1;
  scoresound.play();
  }
}

function preload(){
  scoresound = loadSound("ponto.mp3");
  rectsound = loadSound("raquetada.mp3");
  gamesound = loadSound("trilha.mp3")

  
}