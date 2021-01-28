/*class mango
{
    constructor(x,y,width,height)
    {
        var options = 
        {
            "isStatic":true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/mango.png");
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

class mango
{
    constructor(x,y,radius)
    {
        var options = 
        {            
            isStatic:true,
            restitution :0,
            friction :1,
        }
        this.x=x;
        this.y=y;
        this.r=radius;
        this.image = loadImage("images/mango.png");       
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world,this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        
        ellipseMode(CENTER);        
        image(this.image,0,0,this.r*1.75,this.r*1.75);
        pop();
    }
}