/*class stone
{
    constructor(x,y,width,height)
    {
        var options=
        {
           
            "restitution":0,
            "density":1.2,
            "friction":1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image= loadImage("images/stone.png");
        //this.image.scale = 10;
        World.add(world,this.body);
    }
    display()
    {
        push();      
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}*/

class stone
{
    constructor(x,y,radius)
    {
        var options=
        {
            "isStatic":false,
            "restitution":0,
            "density":1.2,
            "friction":1
        }
        this.x=x;
        this.y=y;
        this.r=radius;
        console.log(this.r/2);
        this.image= loadImage("images/stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
      //  this.image.scale = 10;
        World.add(world,this.body);
    }
    display()
    {
        push();      
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        //added ellipsemode 
        ellipseMode(RADIUS)
        //*2 to increase the size
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}