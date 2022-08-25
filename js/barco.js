class Barco{

 constructor(x,y, width, height, barco_pos){
    var options = {
     restitution: 0.8,
     friction: 1.0,
     density:  1.8,
     
    }

    this.body =Bodies.rectangle(x,y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/boat.png");
    World.add(world,this.body)
    this.barco_pos = barco_pos;
 }



mostrar()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,this.barco_pos,this.width,this.height);
    pop();
}
}