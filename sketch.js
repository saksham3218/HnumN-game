const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
 



function setup()
{
     createCanvas(1500,700);
  engine=Engine.create();
  world= engine.world;
  star1 = new Star(200,200,100,100)
  star5 = new Star(1347,542,100,100)
  star6 = new Star(676,468,100,100)
  star7 = new Star(100,90,50,50)
  star8 = new Star(939,359,50,50)
  star9 = new Star(106,558,100,100)
  star10 = new Star(1029,540,100,100)
  star11 = new Star(904,651,50,50)
  star2 = new Star(470,100,50,50)
  planet1 = new Planet(300,300,150,150)
  planet4 = new Planet(1289,300,150,150)
  planet5 = new Planet(1116,70,150,150)
  star4 = new Star(601,320,50,50)
  planet2 = new PlanetA(780,150,100,100)
  planet6 = new PlanetA(444,585,100,100)
  hanuman = new Hanuman(500,300,350,250)
  demon1 = new Demon(1309,73,350,250)
  star3 = new Star(710,50,100,100)
}

function draw()
{ 
     
background("lightblue");
Engine.update(engine);
text(mouseX+"  "+mouseY,1400,50)
star1.deliveryJoker();
star2.deliveryJoker();
star3.deliveryJoker();
star4.deliveryJoker();
star5.deliveryJoker();
star6.deliveryJoker();
star7.deliveryJoker();
star8.deliveryJoker();
star9.deliveryJoker();
star10.deliveryJoker();
star11.deliveryJoker();
 planet1.jokerAilens();
 planet4.jokerAilens();
 planet5.jokerAilens();
 planet2.jokerAilens();
 planet6.jokerAilens(); 
 hanuman.jokerAilens(); 
demon1.crazyAilens();  
}
