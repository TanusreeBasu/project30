class Box{

constructor(x, y){
var options={
    restitution:1
}

    this.body = Bodies.rectangle (x,y, 30,40);
    this.width = 30;
    this.height = 40;
    this.Visibility = 255;
    World.add(world,this. body);

}
display(){
    if(this.body.speed<3){
    var pos = this.body.position;
    var angle =this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
  
    rectMode(CENTER);
    fill("purple")
    rect(0,0,this.width, this.height);
    pop();
    }
    else {
        
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
       // rect(pos.x, pos.y,this.width, this.height);
        pop();
    }
    

}

}