var barco;
var mar;
var nuvem;
var sol;
var barcoImagem;
var marImagem;
var cloud;
var solImagem;

function preload(){
  barcoImagem = loadImage("pixil-frame-0.png");
  marImagem = loadImage("pixil-frame-1.png");
  nuvem = loadImage("pixil-frame-4.png");
  solImagem = loadImage("pixil-frame-2.png");
}

function setup(){
  createCanvas(600,200);

  barco = createSprite(250,157);
  barco.addImage(barcoImagem);
  
  mar = createSprite(300,185);
  mar.addImage(marImagem);
  mar.velocityX = -6;
  mar.lifetime = 220;
  
  sol = createSprite(550,50);
  sol.addImage(solImagem);
}

function draw(){
  background("DeepSkyBlue");
  drawSprites();

  if(mar.x < 300){
    mar = createSprite(890,185);
    mar.addImage(marImagem);
    mar.velocityX = -6;
    mar.lifetime = 220;
  }

  createclouds();
}

function createclouds(){
  if(frameCount % 60 === 0){
  cloud = createSprite(600,50,30,20);
  cloud.addImage(nuvem);
  cloud.scale = 2;
  cloud.velocityX = -3;
  cloud.lifetime = 220;
  cloud.y = Math.round(random(10,60));
  }
}