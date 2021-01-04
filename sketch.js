const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;


var player, player2, player3 , player4 ,player5,player6,player7;
var form1,ad1I,ad2I;
var database,lobby1, backgroundImg,bg;
var hidefields=0,lobbyBGI,buttonState = 0;

function preload() {
  /*ad1I = loadImage("Main/images/LOL.jpg");
  ad2I = loadImage("Main/images/hi.png");*/    
 // lobbyBGI = loadImage("Main/images/night.jpg")
}
function setup() 
{
  database = firebase.database();
  engine = Engine.create();
  world = engine.world; 
  form1 = new Form();
 // lobby1 = new Lobby();
   
}

function draw() {
  //firstForm();
 // backgroundImg = loadImage(bg); 
  //background(backgroundImg);  
//  ad1.visible= false;
 // ad2.visible= false;
  // drawSprites();
  form1.backGround();
  form1.form();
 // lobby1.display();
  drawSprites();
}
