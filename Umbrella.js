class Umbrella{
    constructor(x,y,r){
        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world, this.body);
    }

    display(){
        var paperpos=this.body.position;
		push();
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER);
		strokeWeight(2);
		//imageMode(CENTER);
		//image(this.image, 0,0,this.r, this.r)
		ellipse(0,0,this.r, this.r);
		pop();
    }
}