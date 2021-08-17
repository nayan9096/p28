class paper {
    constructor(x,y,r){
        var options={
            restitution:0.3,
            friction:5,
            density:1
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r = r;
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        ellipse(0,0,this.r,this.r);
        pop ();
    }
}