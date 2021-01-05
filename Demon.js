class Demon{
    constructor(a,b,c,d){
    var order = {
        isStatic:true
    
    }
    this.demon = Bodies.rectangle(a,b,c,d,order)
    World.add(world,this.demon)
    this.width = c
    this.height = d
    this.image = loadImage("images/devil1.png")
    
    }
    
    
    crazyAilens(){

    image(this.image,this.demon.position.x,this.demon.position.y,this.width,this.height)
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    }
