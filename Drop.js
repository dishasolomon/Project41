class Drop{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.1,
            density: 0.2
        }

        this.x = x;
        this.y = y;
        this.rain;

        this.body = Bodies.circle(this.x,this.y,10,options);
        World.add(world, this.body);
    }

    display(){
        var paperpos=this.body.position;
		push();
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER);
		strokeWeight(2);
		fill(30,20,255);
		//imageMode(CENTER);
		//image(this.image, 0,0,this.r, this.r)
        ellipse(0,0,this.r, this.r);
        
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
        }
		pop();
    }
}