class Lobby{
constructor(){
//this.friend;
this.welcome;
this.friend  = createButton("Friend");
this.start  = createButton("Start");
this.friends = createElement('h1');
}
display(){
var canvas = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);    
var lobbybg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
//lobbybg.addImage(lobbyBGI);
var player = createSprite(200,200);
this.friend.mousePressed(()=>{
buttonState = 1;
});
this.start.mousePressed(()=>{
var game = new Game();
});
}
display2() {
player.visible = false;
this.friend.html("Friends");
this.html.position;
var sheet = Bodies.rectangle();
this.nameInx.list();
}
if(buttonState = 1) {
display2();    
}
}

