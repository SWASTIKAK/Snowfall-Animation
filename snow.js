class Snow{
    constructor(x,y,r){
        var options ={ 
           restitution : 0.4, 
            
        }
        this.r = r;
          //  this.width = width;
          // this.height = height;
            this.body = Bodies.circle(x,y,this.r,options);
           // this.image("snow1.jpg");
            this.color = color("white");
            World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        imageMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
            }
}