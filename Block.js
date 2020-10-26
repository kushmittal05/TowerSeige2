class Block{
  constructor(x, y, width, height) {
    this.image=this.image
      var options = {
       
        
          restitution :0.4,
          friction :0.0,
          isStatic:false
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=255;
      World.add(world, this.body);
    }
    display(){
     // console.log(this.body.speed)
      if (this.body.speed<3) {
        var pos =this.body.position;
        //imageMode(CENTER);
        
       // image(this.image, pos.x, pos.y, this.width, this.height);
      }
      else{ 
        World.remove(world, this.body);
        push();
        this.Visibility=this.Visibility-5
        tint(255,this.Visibility)
       image(this.image,this.body.position.x, this.body.position.y)
       pop();
      }

      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();

    }
};

