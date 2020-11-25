class Stone {
   

        constructor(x,y,r){
    
            var options = {
                isStatic:false,
                'restitution':0,
                'friction':1,
                'density':1.2
            }
            this.x=x;
            this.y=y;
            this.r=r;
            this.body = Bodies.circle(this.x,this.y,this.r,options);
            this.image = loadImage("stone.png");
    
    
            World.add(world,this.body);
        }
  
        display(){
    
            var pos = this.body.position;
    
            push ()
           translate(pos.x,pos.y);
           rectMode(CENTER)
           strokeWeight(0)
           
           fill ("0");
           ellipse(0,0,this.r,this.r)
           imageMode(CENTER);
           image(this.image, 0, 0, 40,40);
            pop ()
    
    
        }
    
    
    
    
    
  









}