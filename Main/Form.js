class Form {
// creates a form which will accept  : your name...
//button and text-box     
constructor(){
  this.button = createButton("SUBMIT");
  this.input = createInput("Your name");
  this.heading = createElement('h1');
  this.welcome = createElement('h1');
  this.backgroundimage = loadImage("Main/images/day.jpg");
  this.link = createElement('h3');
  this.ad1 = loadImage("Main/images/LOL.jpg");
  this.ad2 = loadImage("Main/images/hi.png");
}

async backGround() {
// adjusts the bg to day or night    
    createCanvas(displayWidth-20,displayHeight-30);
    image(this.ad1,displayWidth/2,displayHeight/2+150);
    image(this.ad2,displayWidth/7+70,displayHeight/2-10);
    /*var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var reponseJSON  = await response.json(); 
    console.log(reponseJSON);
    var time = reponseJSON.datetime;
    console.log(time);
    var hours = time.slice(11,13);
    console.log(hours);
    if(hours>=9 && hours<=21){
        bg = this.backgroundimage+"/day.jpg"; 
        console.log("GG :&");
    }
    else {
        bg = this.backgroundimage+"/night.jpg";  
        console.log("jj >_<"); 
    }

        console.log(bg);*/
    }

    //background(backgroundImg)
  form(){
    var i;    
    this.button.position(displayWidth/2,displayHeight/2);
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.heading.html("BLOCK BUSTER");
    this.heading.position(displayWidth/2-75,0);
    fill("red");
    this.welcome.html("Welcome to the world of joy");
    this.welcome.position(displayWidth/2-125,displayHeight/4);
    this.link.html("https://www.roblox.com/games/5107633705/Tricky-Fun-Obby-D");
    this.link.position(displayWidth/2-150,displayHeight/2+200);
    //console.log(this.ad1);    
    //Player.name = this.input.value();
    //Player.name =   i 
    /*var ad1 = createSprite(displayWidth/2,displayHeight/2+150,101,1001);
    ad1.addImage(ad1I);
    ad1.scale=0.75;

    var ad2 = createSprite(displayWidth/7-50,displayHeight/2-10,101,1001);
    ad2.addImage(ad2I);
    ad2.scale=0.75;

    var box = createSprite(displayWidth/2+100,displayHeight/2+230,510,20);
    box.shapeColor="red";
   // console.log("outside mouse")*/
    
    this.button.mousePressed(()=>{
     this.input.hide();
     this.link.hide();
     this.welcome.hide();
     this.heading.hide();
     this.ad1.width = 0;
     this.ad1.height = 0;
     this.ad2.height = 0;
     this.ad2.width = 0;
     this.button.hide();
        lobby1 = new Lobby();
     /*World.remove(world, this.ad1);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.ad1, this.ad1.position.x, this.ad1.position.y, 50, 50);
     pop();*/
      
      
    });

    
  
  //if(hideFields === 1){

 /* this.submit.hide();
  this.input.hide();
  this.welcome.hide();
  this.heading.hide();
  console.log("inside mouse")
  //background("white");
  this.link.hide();
  //box.visible= false;
 // box.destroy();
  box.height=0;
  box.width=0;*/
  /*console.log("Destroy is good");
  ad1.visible= false;
  ad2.visible= false;
  console.log("inside mouse 2");
  console.log("JS is bad");*/
 // lobby1 = new Lobby();
     
//} 
  }
/*database.ref('player').update({
i : player    
});*/
 // drawSprites();
}

  

