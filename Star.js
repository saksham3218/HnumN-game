class Star{
constructor(a,b,c,d){
var order = {
 isStatic:true


}
this.starStorage = Bodies.rectangle(a,b,c,d,order)
World.add(world,this.starStorage)
this.width = c
this.height = d
this.image = loadImage("images/Star.png")
}


deliveryJoker(){

image(this.image,this.starStorage.position.x,this.starStorage.position.y,this.width,this.height)


}

















}