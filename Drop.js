class drops {

    constructer(x,y){
        this.image=loadImage("thunderbolt/1.png");
        this.image=loadImage("thunderbolt/2.png");
        this.image=loadImage("thunderbolt/3.png");
        this.image=loadImage("thunderbolt/4.png");

        var options={
            'friction':0.1


        }
    }

    display(){

        if(this.rain.position.y > height){
        
            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
        
        }
    }

}